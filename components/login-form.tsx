"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { AlertBanner, Button } from "@/components/ui";

const fallbackMessage = "Nao conseguimos entrar agora. Verifique sua rede e tente novamente.";

function isSafeRedirect(path: unknown): path is string {
  return typeof path === "string" && path.startsWith("/") && !path.startsWith("//");
}

export function LoginForm({ initialError = "" }: { initialError?: string }) {
  const passwordRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(initialError);
  const [pending, setPending] = useState(false);
  const [enhanced, setEnhanced] = useState(false);

  useEffect(() => setEnhanced(true), []);

  function reject(message: string) {
    setError(message);
    setPassword("");
    window.requestAnimationFrame(() => passwordRef.current?.focus());
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    setError("");
    setPending(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password })
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        reject(data.error || fallbackMessage);
        return;
      }
      if (!isSafeRedirect(data.redirectTo)) {
        reject("O destino de login retornado nao e seguro. Tente novamente.");
        return;
      }
      window.location.assign(data.redirectTo);
    } catch {
      reject(fallbackMessage);
    } finally {
      setPending(false);
    }
  }

  return (
    <form
      action="/api/auth/login?redirect=1"
      method="post"
      onSubmit={submit}
      data-login-enhanced={enhanced ? "true" : "false"}
      className="grid gap-4"
    >
      {error && (
        <div role="alert" aria-live="assertive">
          <AlertBanner type="risk">{error}</AlertBanner>
        </div>
      )}
      <div className="grid gap-2">
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-invalid={Boolean(error) || undefined}
          disabled={pending}
          required
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="password">Senha</label>
        <input
          ref={passwordRef}
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          aria-invalid={Boolean(error) || undefined}
          disabled={pending}
          required
        />
      </div>
      <Button
        type="submit"
        className="w-full"
        loading={pending}
        loadingLabel="Entrando..."
      >
        Entrar
      </Button>
    </form>
  );
}
