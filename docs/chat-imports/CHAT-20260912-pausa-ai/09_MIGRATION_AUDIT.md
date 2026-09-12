# MIGRATION AUDIT

## COBERTURA

### Repositório Pausa AI

Cobertura: **alta** para o estado técnico/documental usado nesta migração.

Foram verificados diretamente `AGENTS.md`, `README.md`, `SECURITY.md`, a skill Tupiniquim Toolbox, `package.json`, o gate W8, checklists de produção/LGPD, branch metadata e documentos de auditoria/continuidade relevantes.

### Conversa antiga ChatGPT

Cobertura: **parcial/incompleta**.

O URL fornecido é privado (`/c/...`) e o conteúdo integral das mensagens não foi recuperado. A migração preserva apenas requisitos recuperáveis por contexto autorizado e fatos verificáveis no repositório.

## DADOS AUSENTES

- transcript exato da conversa antiga;
- prompts que existam somente naquele transcript;
- respostas integrais do assistente antigo;
- sequência cronológica completa;
- comandos/paths/versões citados exclusivamente no chat antigo;
- decisões, hipóteses ou opções abandonadas não presentes em fontes recuperáveis;
- pendências que existam apenas no transcript privado.

## DADOS CONFLITANTES

### RAW integral vs repositório público

Requisito de preservação de raw entra em conflito com segurança/LGPD do repositório público.

Resolução adotada: apenas RAW sanitizado pode ser versionado. Conteúdo privado fica em área local/privada ignorada ou fora do repositório.

### Ausência de CI histórica vs CI na branch

`docs/TOOLBOX_AUDIT_2026-09-08.md` registra corretamente ausência de CI na baseline de então. Esta branch adiciona CI/CodeQL/Dependabot, mas o fato histórico não deve ser reescrito e a correção só é corrente em `main` após merge.

## DADOS POSSIVELMENTE ERRADOS

- datas e detalhes recuperados apenas por contexto, não pelo transcript original, devem ser reconfirmados quando a conversa antiga ficar acessível;
- nenhum conteúdo não verificado foi promovido como mensagem verbatim do chat antigo.

## DUPLICAÇÕES

Existe sobreposição intencional entre:

- `docs/knowledge/06_PROJECTS/Pausa_AI/CURRENT_STATE.md`;
- este pacote de chat em `07_CURRENT_STATE.md`;
- checklists históricos existentes em `docs/`.

A duplicação tem finalidade distinta: estado canônico do projeto vs estado da migração vs evidência histórica. Não remover automaticamente.

## IDS PROBLEMÁTICOS

Nenhum conflito de ID conhecido nesta migração.

IDs do chat antigo que ainda não puderam ser recuperados não devem ser inventados antecipadamente.

## ITENS QUE DEVEM SER REINSERIDOS

Quando o transcript exato ficar acessível:

1. mensagens/prompts originais sanitizados;
2. decisões ausentes;
3. comandos e configurações ausentes;
4. erros e respectivas correções;
5. links/repos/arquivos mencionados somente no chat;
6. relações entre requisitos/projetos;
7. pendências e próximos passos não recuperados;
8. versões superseded/abandoned que tenham valor histórico.

## SEGURANÇA

- nenhum secret real foi intencionalmente adicionado;
- CI utiliza valores sintéticos;
- áreas `_private/` de staging de migração foram adicionadas ao `.gitignore`;
- política pública de segurança foi reforçada;
- templates proíbem dados sensíveis em issues/PRs;
- branch principal foi detectada como não protegida e isso permanece risco aberto até configuração manual de ruleset/protection;
- a instalação inicial de dependências revelou dívida de advisories e ela foi registrada na Issue #5 para triagem sem `--force` cego.

## AUTOMAÇÃO / TOOLBOX

Nesta branch foram adicionados:

- CI remoto com installs determinísticos da raiz e mobile, Prisma generate/validate, banco SQLite sintético, root/mobile typecheck, lint, W8 e build;
- CodeQL;
- Dependabot para root, mobile e GitHub Actions;
- CODEOWNERS;
- checklist de PR;
- bug-report template seguro;
- estrutura de conhecimento e prompt de migração reutilizável.

`npm run test:migration-integrity` permanece disponível como gate especializado para migrações reais e exige `SOURCE_DB` + `TARGET_DB`; não é simulado no CI genérico.

## EVIDÊNCIA DOS CHECKS DURANTE ESTA MIGRAÇÃO

- CodeQL executou com sucesso nas rodadas já concluídas.
- Uma primeira rodada de CI revelou que o typecheck raiz alcançava `mobile/` sem as dependências mobile instaladas; o workflow foi corrigido para instalar ambos os lockfiles e root/mobile typecheck passaram na rodada seguinte.
- Essa rodada seguinte revelou que `test:migration-integrity` exige dois bancos explícitos; o gate foi corretamente removido do CI genérico e mantido como gate específico de migração.
- A rodada final após esse ajuste deve ser usada como evidência de merge readiness.

## STATUS FINAL

**APROVADO COM RESSALVAS**

Ressalvas obrigatórias:

1. a conversa antiga não está integralmente acessível;
2. a migração permanece `PARTIAL`;
3. o CI final após o último ajuste precisa concluir com sucesso antes do merge;
4. a proteção de `main` ainda precisa ser configurada no GitHub;
5. a dívida de advisories de dependências precisa ser triada na Issue #5.

`MIGRATION_STATUS: PARTIAL`
