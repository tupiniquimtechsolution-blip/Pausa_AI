export function createCompletionToken() {
  if (typeof globalThis.crypto?.randomUUID === "function") return globalThis.crypto.randomUUID();
  throw new Error("Este ambiente nao oferece geracao segura de UUID para concluir a atividade.");
}
