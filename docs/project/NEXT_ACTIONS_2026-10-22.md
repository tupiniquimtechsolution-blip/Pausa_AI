# Próximas ações executadas — 22/10/2026

Consolidação documental: 23/10/2026. As consultas e testes descritos foram executados em 22/10; não representam nova homologação remota nesta retomada.

**PR #39 permanece draft. Sem merge, novo deploy, alterações de dados/schema reais ou recursos pagos. G8 BLOCKED; G9/G10 NO-GO.**

## Inventário real de permissões

Consulta em transação READ ONLY no projeto Pausa AI confirmou dois usuários, zero ADMIN/MASTER legados, zero contas sem atribuição e zero grants elevados ativos. Não há administrador dependente do fallback antigo no snapshot atual. Nenhuma conta foi promovida, redefinida ou migrada; inventário não equivale a aprovação de privilégios novos. Advisors de segurança retornaram zero lints.

[Evidência agregada](evidence/2026-10-22/admin-backup-preflight.json). Não foram selecionados nomes, e-mails, hashes ou secrets.

## Dependências corrigidas

Código candidato: `64739f4b9fe6b2b0c0906df4eec934d262b6927d`.

- Vite 8.3.0 → 8.3.5, dentro da série atual. [Advisory de exemplo](https://github.com/advisories/GHSA-587h-7wmj-h5pm) e [release oficial](https://github.com/vitejs/vite/releases/tag/v8.3.5). Dependências transitivas do build foram atualizadas dentro de seus ranges.
- Expo 56.0.23 → 56.0.24, calendar 56.0.8 → 56.0.10 e notifications 56.0.15 → 56.0.26, conforme o alinhamento exigido pelo SDK. Config-plugins 56.0.17 atualiza sua dependência xcode para 4.0.0 e elimina a cadeia uuid 7; metro-file-map 56.0.5 remove sua dependência micromatch. Não houve migração de SDK nem alteração de React Native 0.85.3.
- A primeira resolução ampla do npm trouxe Expo 58 como peer aninhado e foi rejeitada. A resolução final usa deduplicação e foi conferida para conter somente Expo 56. Não foram adicionados overrides para forçar APIs incompatíveis.
- O lockfile gerado no Windows omitiu dois registros opcionais emnapi necessários ao Linux. O CI detectou o problema; os registros verificados anteriores foram preservados no candidato corrigido. Não houve enfraquecimento dos gates.

| Coleta | Raiz | Grafo omit=dev | Mobile |
|---|---|---|---|
| Antes: 0e93088 | 21: 15 high/6 moderate | 14: 10 high/4 moderate | 20: 17 high/3 moderate |
| Depois: 64739f4 | 20: 14 high/6 moderate | 13: 9 high/4 moderate | 16: 16 high/0 moderate |

Zero critical nas coletas. Os totais contam pacotes afetados no grafo; não são CVEs únicos nem prova de alcançabilidade no Worker. Omit=dev ainda inclui ferramentas de build trazidas por dependências de produção. [Comandos, hashes e contagens](evidence/2026-10-22/dependencies-next-summary.json), [raiz](evidence/2026-10-22/dependencies-next-root.json), [omit=dev](evidence/2026-10-22/dependencies-next-runtime.json) e [mobile](evidence/2026-10-22/dependencies-next-mobile.json).

## Validação

Typecheck raiz e build Vinext passaram localmente. Instalações mobile no Windows encontraram EPERM; não foram contadas como aprovação. O novo job mobile-validation no Linux instalou o lockfile, executou typecheck, consultou alinhamento do SDK e compilou JavaScript Android com sucesso, sem EAS, APK, assinatura ou publicação. Isso não substitui build nativo nem QA no aparelho. Os dez checks do head 64739f4 passaram no GitHub, incluindo os gates gerais, PostgreSQL/workerd, CodeQL, auditoria e mobile. [Registro dos checks](evidence/2026-10-22/next-actions-ci.json).

A inspeção de 343 sourcemaps do bundle Worker local não encontrou referências de origem aos oito pacotes folha consultados: braces, deepmerge-ts, fflate, postcss-selector-parser, sharp, node-forge, image-size e vite. Isso é evidência de composição desse build, não demonstra ausência em ferramentas Node/mobile ou em outros deployments e não encerra a triagem.

## Risco residual e encaminhamento

- braces/micromatch, PostCSS e deepmerge-ts: versões utilizadas continuam afetadas; correções sugeridas mudam Tailwind/Prisma ou ranges transitivos. Exigem avaliação própria de compatibilidade e entradas alcançáveis.
- sharp: o Worker usa stub; ferramentas locais de mídia continuam no escopo da triagem. A versão corretiva está em outra série 0.x; não foi atualizada sem testes dos fluxos de mídia.
- fflate: Satori fixa a versão vulnerável. Atualizar requer correção upstream ou override revisado com testes dos fluxos de fontes/OG; não foi forçado neste ciclo.
- node-forge e image-size: permanecem no grafo mobile/CLI/Metro. Não foi usado downgrade de Expo/React Native sugerido automaticamente pela auditoria. Separar alcance de toolchain e app em mudança específica.
- PostgreSQL gerenciado reporta 17.6; o changelog vigente descreve a manutenção 17.11. Backup válido e revisão de pgcrypto/cifras legadas antecedem qualquer manutenção. Preflight público não encontrou ltree ou operadores com estimadores; nenhum upgrade foi executado.

Nenhuma exceção de risco foi aceita. TASK-131 continua Em Andamento.

## Backup e próximos passos manuais

O usuário informou não ter backup ou conexão local e pediu instruções. [Roteiro de backup real e restore seguro](BACKUP_MANUAL_SEGURO.md) preparado. Clientes PostgreSQL não estão no PATH desta sessão. A origem permanece intacta: nenhum dump real exportado nem restore real realizado. O plano não habilita PITR, upgrade, novo projeto ou add-on.

Preflight: 85 tabelas públicas, 86 FKs, zero objetos de Storage e zero grants efetivos anon/authenticated nas tabelas públicas. RLS permanece desabilitado; não foram alterados grants/policies durante a consulta. Advisors sem lints não substituem esse inventário nem a triagem da versão do servidor.

Rodrigo prepara ferramentas/pasta privada protegida/certificado/conexão local e avisa quando estiverem prontos, sem enviar senha/URI. Outra identidade habilitada revisa o head mais recente do PR #39; COMMENT da identidade autora não é aprovação independente. Após os gates, decidir implantação em preview e repetir a homologação remota. Persistem estabilidade/isolates, risco residual/rotação, rollback integral e QA físico/mobile/a11y. Imagens originais continuam adiadas.

O preview continua no código 7538400/deployment 101b85d7. Nenhuma evidência antiga de smoke valida automaticamente estas mudanças.

[Backups Supabase](https://supabase.com/docs/guides/platform/backups) · [PostgreSQL 17.11](https://supabase.com/changelog/postgres-15-19-17-11-breaking-changes).
