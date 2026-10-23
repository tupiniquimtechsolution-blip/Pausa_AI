import { AsyncLocalStorage } from "node:async_hooks";
import type { PrismaClient as AppPrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient as PostgresPrismaClient } from "@/generated/prisma-pg";

type RequestDatabase = { client?: PostgresPrismaClient };
const requestDatabase = new AsyncLocalStorage<RequestDatabase>();

function currentClient(): AppPrismaClient {
  const scope = requestDatabase.getStore();
  if (!scope) throw new Error("Worker database access requires a request context.");
  if (!scope.client) {
    scope.client = new PostgresPrismaClient({
      adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
      // Database errors can contain query values; the Worker captures exceptions.
      log: [],
    });
  }
  return scope.client as unknown as AppPrismaClient;
}

// Preserve the app's Prisma API while resolving its client within each request.
// This module is selected only by Vite; Node/SQLite scripts keep lib/prisma.ts.
export const prisma = new Proxy({} as AppPrismaClient, {
  get(_target, key) {
    const client = currentClient();
    const value = Reflect.get(client, key);
    return typeof value === "function" ? value.bind(client) : value;
  },
});

export function withRequestDatabase(
  handle: () => Promise<Response>,
  waitUntil: (promise: Promise<unknown>) => void,
): Promise<Response> {
  const scope: RequestDatabase = {};
  return requestDatabase.run(scope, async () => {
    const close = async () => { await scope.client?.$disconnect(); };
    try {
      const response = await handle();
      if (!response.body) {
        await close();
        return response;
      }
      // RSC rendering can keep querying after fetch returns. Close only once
      // the response stream ends, fails or is canceled by the caller.
      const { readable, writable } = new TransformStream<Uint8Array, Uint8Array>();
      waitUntil(response.body.pipeTo(writable).catch(() => undefined).finally(close));
      return new Response(readable, response);
    } catch (error) {
      await close();
      throw error;
    }
  });
}
