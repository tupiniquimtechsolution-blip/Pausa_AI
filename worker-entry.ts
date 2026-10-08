import handler from "vinext/server/fetch-handler";
import { withRequestDatabase } from "./lib/prisma-worker";

export * from "vinext/server/fetch-handler";

export default {
  ...handler,
  fetch(request: Request, env: unknown, ctx: { waitUntil(promise: Promise<unknown>): void }) {
    return withRequestDatabase(
      () => handler.fetch(request, env, ctx),
      promise => ctx.waitUntil(promise),
    );
  },
};
