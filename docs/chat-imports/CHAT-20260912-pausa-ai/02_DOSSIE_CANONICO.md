# DOSSIÊ CANÔNICO — PAUSA AI

## Metadados

- Project ID: `PROJ-PAUSA-AI`
- Chat migration ID: `CHAT-20260912-pausa-ai`
- Status do dossiê: `partial`
- Fonte de verdade técnica: repositório `tupiniquimtechsolution-blip/Pausa_AI`

## Missão do projeto

Pausa AI é um produto full-stack de bem-estar preventivo para pessoas e empresas. O núcleo atual prioriza uso mobile e pequenas pausas para reduzir sobrecarga cotidiana, com check-ins, recomendações, exercícios leves, Corpo & Movimento, Yoga, rotina e histórico.

O produto não deve ser apresentado como terapia, diagnóstico ou substituto de atendimento médico/psicológico.

## Arquitetura atual

- Next.js 16 / App Router / TypeScript
- React 19
- Tailwind CSS
- Prisma 6
- SQLite em desenvolvimento
- Expo/WebView em `mobile/`
- JWT assinado em cookie httpOnly
- bcryptjs para senha
- Zod para validação
- OpenAI opcional; fallback local quando ausente/falha
- Resend preparado para e-mail transacional

## Governança Multi-LLM

`AGENTS.md` é o contrato canônico do projeto.

A skill universal é `.agents/skills/tupiniquim-toolbox/SKILL.md`.

Agentes devem validar estado real, preservar arquitetura e escopo, aplicar segurança, executar checks e registrar evidências. Dependências externas nunca são adotadas automaticamente apenas por constarem no Toolbox.

## Requisitos de migração de conhecimento recuperados

A base de conhecimento deve:

- preservar raw sanitizado, extrações, dossiês, Import Packs e current state;
- ser reutilizável por humanos, RAG, busca, SQLite, banco vetorial e agentes;
- usar IDs estáveis;
- preservar prompts, decisões, comandos, erros, correções, arquivos, links e relações;
- separar `current`, `historical`, `superseded`, `abandoned` e `unknown`;
- nunca resolver conflitos silenciosamente;
- nunca publicar secrets ou dados pessoais/sensíveis no repositório público.

A estrutura `docs/knowledge/00_RAW_CHATS` até `08_LOGS` foi criada nesta branch.

## Estado do MVP

O README atual prioriza:

- landing, cadastro e login;
- onboarding;
- dashboard;
- check-in;
- exercícios de foco, energia, sono, felicidade e movimento;
- Yoga de bolso, mobilidade, alongamento, caminhada e casa leve;
- histórico;
- perfil.

Superfícies B2B/admin existem, mas dados empresariais reais permanecem sujeitos a feature flag e requisitos de agregação/privacidade; demo/mock é o padrão documentado.

## Segurança e privacidade

Controles existentes incluem autenticação server-side, hash de senha, validação, headers de segurança, rate-limit, proteções de reset de senha, guards de mídia/conteúdo público, exportação/exclusão de titular e auditoria técnica em fluxos de privacidade.

O projeto mantém `SECURITY.md`, checklist LGPD e production-readiness.

## Gates técnicos

O `package.json` possui uma suíte extensa de gates locais.

Nesta branch foram adicionados:

- CI remoto;
- CodeQL;
- Dependabot;
- CODEOWNERS;
- template de PR com checklist de segurança/privacidade;
- issue template que proíbe dados sensíveis.

## Pendências para produção

Continuam como gates reais, entre outros:

- PostgreSQL gerenciado;
- staging HTTPS;
- secrets reais fora do Git;
- e-mail transacional real;
- rate limiting distribuído quando necessário;
- monitoramento e alertas;
- backup/restore testado;
- plano de rollback;
- auditoria operacional ampliada;
- revisão LGPD/jurídica final;
- exportação/exclusão integral de conta validada;
- pipeline seguro de APK/mobile.

## Conflitos e limitações

### CONFLITO: preservar RAW vs repositório público

INFORMAÇÃO ANTIGA/REQUISITO: preservar raw chats.

INFORMAÇÃO NOVA/RESTRIÇÃO: `Pausa_AI` é público e sua política proíbe dados sensíveis/históricos de bem-estar.

RESOLUÇÃO: somente RAW sanitizado pode ser versionado. Export bruto privado deve permanecer fora do repositório público.

STATUS: `resolved_by_security_precedence`

### CONFLITO: chat antigo fornecido vs conteúdo recuperável

INFORMAÇÃO: foi fornecido um URL de conversa ChatGPT.

EVIDÊNCIA: o URL é do formato privado `/c/...`; fetch externo não conseguiu obter as mensagens.

RESOLUÇÃO: registrar migração como parcial e não inventar conteúdo ausente.

STATUS: `open`

### CONFLITO: auditoria anterior sem CI vs branch atual

INFORMAÇÃO ANTIGA: auditoria de 2026-09-08 registrava ausência de CI remota.

INFORMAÇÃO NOVA: esta branch adiciona CI, CodeQL e Dependabot.

RESOLUÇÃO: ausência de CI permanece verdadeira para a baseline `main` até o PR ser mesclado; a correção existe apenas nesta branch.

STATUS: `remediated_pending_merge`

## Estado da migração

O conteúdo exato da conversa antiga ainda não foi comparado com este dossiê.

`MIGRATION_STATUS: PARTIAL`
