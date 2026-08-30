"use client";

import { useState, useTransition } from "react";
import { AlertBanner, Button } from "@/components/ui";

export function ForgotPasswordForm() {
  const [message, setMessage] = useState("");
  const [resetUrl, setResetUrl] = useState("");
  const [error, setError] = useState("");
  const [pending, startTransition] = useTransition();

  function submit(formData: FormData) {
    setError("");
    setMessage("");
    setResetUrl("");
    startTransition(async () => {
      const response = await fetch("/api/auth/password/forgot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.get("email") })
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setError(data.error || "Nao conseguimos solicitar a recuperacao agora.");
        return;
      }
      setMessage(data.message || "Se o e-mail existir, enviaremos instrucoes para redefinir sua senha.");
      if (data.resetUrl) setResetUrl(data.resetUrl);
    });
  }

  return (
    <form action={submit} className="grid gap-4">
      {error && <AlertBanner type="risk">{error}</AlertBanner>}
      {message && <AlertBanner type="success">{message}</AlertBanner>}
      {resetUrl && (
        <div className="rounded-2xl bg-ice p-3 text-sm font-semibold text-text">
          Link local de teste: <a className="font-black text-navy underline" href={resetUrl}>{resetUrl}</a>
        </div>
      )}
      <label className="grid gap-2">
        E-mail
        <input name="email" type="email" required />
      </label>
      <Button
        type="submit"
        className="w-full"
        loading={pending}
        loadingLabel="Enviando..."
      >
        Solicitar redefinicao
      </Button>
    </form>
  );
}

export function ResetPasswordForm({ token }: { token: string }) {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [pending, startTransition] = useTransition();

  function submit(formData: FormData) {
    setError("");
    setMessage("");
    startTransition(async () => {
      const response = await fetch("/api/auth/password/reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token,
          password: formData.get("password"),
          confirmPassword: formData.get("confirmPassword")
        })
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setError(data.error || "Nao conseguimos redefinir sua senha agora.");
        return;
      }
      setMessage(data.message || "Senha redefinida. Voce ja pode fazer login.");
    });
  }

  return (
    <form action={submit} className="grid gap-4">
      {error && <AlertBanner type="risk">{error}</AlertBanner>}
      {message && <AlertBanner type="success">{message}</AlertBanner>}
      <label className="grid gap-2">
        Nova senha
        <input name="password" type="password" minLength={8} required />
      </label>
      <label className="grid gap-2">
        Confirmar senha
        <input name="confirmPassword" type="password" minLength={8} required />
      </label>
      <Button
        type="submit"
        className="w-full"
        loading={pending}
        loadingLabel="Salvando..."
      >
        Redefinir senha
      </Button>
    </form>
  );
}
