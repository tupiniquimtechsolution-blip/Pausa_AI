# Tratamento da revisão preliminar — 2026-10-22

**PR #39 permanece draft, sem aprovação independente, merge ou nova publicação. G9/G10 NO-GO.**

Origem: [COMMENT 5613984650](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/pull/39#pullrequestreview-5613984650), sobre `b7671615f29f211a96fcce817b38ab3e16265044`. A revisão foi publicada pela mesma identidade autora do PR; não satisfaz a aprovação independente. Os achados P1/P2 eram preexistentes na base e foram mantidos na proposta anterior.

## P1 — permissões sem fallback privilegiado

`UserRole` ativo é a única fonte de privilégios. `getSessionUser`, `getUserRoles` e os helpers de permissão usam a mesma resolução de papéis; ausência, expiração, remoção ou chave inválida resulta em USER, sem inferir ADMIN/MASTER de `User.role`. A seleção da sessão também deixou de buscar o campo legado.

Os seeds gerais deixaram de converter todos os valores legados em atribuições: contas sem nenhuma atribuição recebem apenas USER. As contas administrativas explicitamente configuradas nos seeds continuam com provisionamento explícito; esses scripts não devem ser usados como migração automática do banco real.

**Compatibilidade e implantação:** um administrador com apenas `User.role=ADMIN/MASTER`, sem atribuição ativa, perderá o acesso elevado por decisão de segurança. Antes da implantação, inventariar esses casos em leitura e revisar cada autorização. A correção não concede privilégios automaticamente, não altera schema nem migra contas reais. Provisionamento aprovado deve criar a atribuição explícita e invalidar sessões anteriores. Contas comuns continuam com acesso USER.

## P2 — seed invalida sessões existentes

O caminho update do seed controlado de staging incrementa `sessionVersion` atomicamente na mesma transação que atualiza senha e atribuição ADMIN. A criação inicia na versão padrão. Reexecução preserva identidade/uma atribuição, mas invalida sessões novamente: idempotência de identidade não significa preservar a versão da sessão. Se a gravação da atribuição falhar, senha e incremento também sofrem rollback.

Os caminhos explícitos de atualização ADMIN/MASTER nos seeds gerais também incrementam a versão. Nenhum desses seeds foi executado em staging/produção nesta correção.

## Regressões executadas

- SQLite e PostgreSQL 17 isolados: 128 hits concorrentes por provider, binding SQL/exportação isolada, ADMIN legado sem atribuição, atribuição válida, expirada e removida; rollback de seed novo/existente, versão e unicidade da atribuição.
- Bundle completo em workerd local, mesmo JWT e `User.role=ADMIN` preservado: sem atribuição 403 → atribuição ativa 200 → última expirada 403 → reativada 200 → removida 403.
- Seed real da função contra fixture local: cookie anterior negado 307; novo login 200 e acesso ADMIN 200. Repetido com nova senha/reseed: cookie anterior 307, novo login e ADMIN 200. Nenhuma senha/cookie foi registrado.
- Isolamento de seis renderizações concorrentes de dois titulares continuou passando. Consultas de sessão não leem passwordHash; somente o endpoint de login lê o hash, como esperado.
- Typecheck, ESLint dos arquivos alterados e build Vinext passaram localmente. As regressões estão no workflow Staging Runtime Gate para execução no novo head.
- [Resultados do workerd](evidence/2026-10-22/worker-security-regression.json) e [validação isolada](evidence/2026-10-22/review-security-validation.json).

Esses resultados não são exploração nem teste de privilégios no banco real. O preview continua no código `7538400`, deployment `101b85d7`; seu smoke aprovado anteriormente não valida estas novas correções.

## P2 — evidência atual de dependências

Nova coleta em Windows, Node 24.19.0/npm 11.6.2, usando os lockfiles do head revisado e a base de advisories disponível na coleta:

| Escopo | High | Moderate | Critical | Total |
|---|---:|---:|---:|---:|
| Raiz completa | 15 | 6 | 0 | 21 |
| Grafo raiz com omit=dev | 10 | 4 | 0 | 14 |
| Mobile completo | 17 | 3 | 0 | 20 |

Os três comandos retornaram exit 1 por achados. Raiz/mobile concordam com os resumos de instalação do [job 119768691597](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/actions/runs/39762151776/job/119768691597). O artifact CI não foi baixado; os JSON anexados são uma coleta nova, com comandos, hashes de lockfile e ambiente no [resumo](evidence/2026-10-22/dependency-review-summary.json).

[JSON raiz](evidence/2026-10-22/npm-audit-root.json) · [JSON omit=dev](evidence/2026-10-22/npm-audit-runtime.json) · [JSON mobile](evidence/2026-10-22/npm-audit-mobile.json).

As contagens históricas de 16/10 (raiz 20/mobile 25) foram preservadas como snapshots, não são os números atuais. Os totais contam pacotes afetados no grafo e incluem cadeias transitivas; não equivalem a CVEs únicos ou exploração comprovada. omit=dev ainda inclui ferramentas de build trazidas por dependências de produção e não descreve exatamente o bundle Worker publicado.

| Grupo | Alcance e encaminhamento |
|---|---|
| Vite e plugins | Há advisories de servidor dev/middleware/editor; conferir alcance no fluxo de desenvolvimento/build e testar versão corrigida compatível. Não inferir exposição do Worker só pelo grafo. |
| sharp/libvips/libheif/librsvg | O Worker usa alias stub; ferramentas Node de mídia continuam exigindo triagem. Validar atualização em mudanças próprias. |
| braces/micromatch, PostCSS e deepmerge-ts | Mapear entradas e caminhos utilizados por Tailwind/Prisma/vinext. As sugestões de majors exigem migração/testes; não usar audit fix --force. |
| fflate/satori/OG | Confirmar uso de descompactação e caminhos de imagem/OG antes de concluir alcançabilidade. |
| Expo/Metro/React Native, image-size, node-forge e uuid | Separar toolchain de código do app; validar correções compatíveis e QA mobile. Não aplicar downgrades sugeridos automaticamente. |

**Nenhum risco residual foi aceito como exceção de release.** TASK-131 permanece aberta. O workflow Dependency Audit Evidence coleta também omit=dev e publica a tabela no resumo. `|| true` permite coletar achados; um novo validador falha se faltar JSON/metadata ou houver erro de coleta. Check verde comprova coleta válida, não ausência de vulnerabilidades nem autorização de release.

## Governança e próximos gates

Ruleset `25636151` active em `refs/heads/main`, sem bypass, com uma aprovação, revisão após último push, resolução de conversas e quatro checks obrigatórios. `main.protected=true`; nenhuma regra foi modificada nesta correção. [Evidência atual](evidence/2026-10-22/governance-review.json). A configuração ativa não é uma aprovação do PR.

Próximos gates: CI do novo head, revisão por outra identidade habilitada e inventário de permissões antes de publicar estas mudanças. Continuam pendentes segurança residual, estabilidade/isolates, backup real/restore, rollback integral e QA mobile/a11y. O 503 do principal é a última medição registrada; não foi revalidado neste follow-up.

Sem alteração de banco real, envio de credenciais, contratação ou mudança de plano.
