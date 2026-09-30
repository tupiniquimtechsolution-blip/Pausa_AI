# Pausa AI

> Plataforma de bem-estar preventivo que transforma o estado e o contexto atual do usuário em pequenas ações viáveis naquele momento, registra o resultado e utiliza o histórico para tornar as próximas recomendações mais contextuais.

**Estado da release:** consulte [docs/project/RELEASE_STATUS.md](docs/project/RELEASE_STATUS.md).  
**Baseline atual:** [docs/project/CURRENT_STATE.md](docs/project/CURRENT_STATE.md).  
**Arquitetura Cloud:** [ADR-001](docs/architecture/ADR-001-cloud-runtime-database.md).

## O problema que o Pausa AI resolve

Pessoas sob sobrecarga por telas, estresse, ansiedade cotidiana, baixa energia, sono ruim, dor leve ou dificuldade de foco muitas vezes sabem que precisam fazer uma pausa, mas não sabem qual ação é adequada naquele momento.

O Pausa AI organiza esse contexto e transforma-o em uma próxima ação prática.

Fluxo central:

```text
estado → interpretação → recomendação → ação → registro → histórico → nova recomendação
```

O valor do produto não está em possuir muitos exercícios. Está em ajudar o usuário a entender **o que faz sentido fazer agora**.

O Pausa AI é um produto de bem-estar preventivo. Não realiza diagnóstico e não substitui atendimento médico, psicológico ou de emergência.

## Como funciona

O check-in e outros sinais do produto podem considerar contexto como sono, energia, disposição, cansaço, estresse, ansiedade, humor, foco, dor, tempo disponível, rotina, histórico e preferências.

O motor de recomendação combina regras locais explicáveis e versionadas com IA generativa opcional. Quando a IA externa não está configurada ou não responde, o produto continua funcional por regras locais.

O fluxo de experiência conecta:

- autenticação e onboarding;
- check-in;
- recomendação contextual;
- Corpo e Mente;
- respiração, foco, relaxamento, mobilidade, caminhada e yoga;
- agenda e rotina;
- atividade, progresso e histórico;
- notificações;
- dados de saúde e dispositivos;
- Data Vault e privacidade;
- conteúdo e mídia governados;
- experiência mobile via Expo/WebView.

## Arquitetura

O projeto é um **monólito modular full-stack**.

```text
Web / Mobile WebView
        ↓
Next.js App Router
        ↓
Route Handlers + serviços de domínio
        ↓
Auth / RBAC / Recommendation Engine / Activity / Data Vault
        ↓
Prisma
        ↓
SQLite local
PostgreSQL gerenciado em staging/produção
```

O mobile utiliza Expo/React Native como shell para a aplicação web e possui uma ponte nativa para capacidades como notificações, haptics, calendário, alarmes, configurações de foco e integrações de saúde quando suportadas.

## Pausa AI Core

O núcleo do produto deve permanecer independente de fornecedores externos.

```text
PAUSA AI CORE
├── saúde
├── atividades
├── bem-estar
├── GPS
├── métricas
├── histórico
├── recomendações
└── sincronização

CONNECTORS OPCIONAIS
├── Health Connect
├── Apple Health
├── Strava
├── smartwatches
├── Spotify
├── YouTube
└── outros
```

Integrações externas enriquecem o produto, mas não devem ser requisitos para seu funcionamento básico.

## Estado técnico atual

Baseline levantado em 28/09/2026:

- Next.js 16 / App Router;
- React 19;
- TypeScript;
- Tailwind CSS;
- Prisma 6.19.3;
- SQLite local;
- 54 páginas;
- 81 rotas de API;
- 85 models Prisma;
- 9 migrations;
- autenticação própria com JWT e bcrypt;
- RBAC persistido;
- rate limiting persistente;
- feature flags, audit log e outbox;
- motor de recomendação versionado;
- Expo/React Native/WebView.

Os números históricos existentes em documentos anteriores são preservados como snapshots, não como inventário atual.

## Estrutura principal do repositório

```text
app/          páginas, layouts e Route Handlers
components/   componentes compartilhados
lib/          serviços e regras de domínio
prisma/       schema, migrations e seed
mobile/       shell Expo/React Native/WebView
scripts/      automação, gates, auditorias e manutenção
public/       assets públicos
docs/         arquitetura, produto, relatórios e histórico
```

## Desenvolvimento local

Crie um `.env` baseado em `.env.example`.

```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="change-this-secret"
RATE_LIMIT_PEPPER="change-this-rate-limit-pepper"
COOKIE_SECURE="false"
APP_BASE_URL="http://localhost:3000"
RELEASE_VERSION="development"
```

Nunca reutilize os valores de exemplo em staging ou produção.

Instalação e bootstrap:

```bash
npm install
npx prisma generate
npx prisma migrate deploy
npm run db:seed
npm run dev
```

Aplicação local:

`http://localhost:3000`

## Qualidade

Principais gates disponíveis:

```bash
npm run typecheck
npm run lint
npm run build
npm run test:smoke
npm run test:walking
npm run test:auth:regression
npm run test:w8
npm run test:w8:database
npm run test:w9
```

Os relatórios W0–W9 registram gates históricos, mas uma release nova exige reexecução contemporânea.

## Banco de dados

SQLite continua sendo o banco de desenvolvimento local.

A direção de staging/produção é PostgreSQL gerenciado. A retomada atual está validando **Supabase PostgreSQL** como provedor e **Cloudflare Workers** como runtime web.

Não execute conversão destrutiva do schema. A migração deve preservar histórico, ser testável e possuir rollback.

## Cloudflare

A direção de deploy é Cloudflare Workers.

Para Next.js 16, a estratégia atual é validar primeiro `vinext`, mantendo o Next.js original funcional enquanto a compatibilidade é testada.

Nenhuma publicação é considerada concluída até que existam:

- build Cloudflare aprovado;
- Worker real;
- banco staging;
- secrets;
- HTTPS;
- healthcheck;
- smoke autenticado;
- persistência verificada.

## Segurança e privacidade

O projeto inclui mecanismos para:

- JWT e cookies httpOnly;
- revogação por `sessionVersion`;
- RBAC;
- rate limit persistente;
- proteção de redirects;
- logs/auditoria;
- Data Vault;
- consentimentos;
- exportação e exclusão de dados;
- governança de mídia.

A implementação técnica não equivale a certificação jurídica LGPD.

Consulte também [SECURITY.md](SECURITY.md).

## Mobile

O shell mobile está em `mobile/`.

Arquitetura:

```text
Expo / React Native
        ↓
WebView
        ↓
Pausa AI Web
        ↓
Native Bridge
```

Durante desenvolvimento em dispositivo físico, a URL pode apontar para o host local. Em builds de staging/release, a WebView deverá apontar para a URL HTTPS publicada.

## Release Green

A entrega atual utiliza os gates:

```text
G0  Inventário
G1  Documentação
G2  Repositório
G3  Código
G4  Dados
G5  Segurança
G6  Testes
G7  Cloud
G8  Staging
G9  Release Candidate
G10 Release Green
```

**Release Green não é sinônimo de build aprovado.**

É necessário comprovar documentação, código, migrations, dados, segurança, testes, staging, cloud, backup/restore e rollback.

Status vivo: [docs/project/RELEASE_STATUS.md](docs/project/RELEASE_STATUS.md).

## Documentação histórica

O repositório possui relatórios de evolução, incluindo a série W0–W9, relatórios de continuidade, readiness, LGPD e produção de mídia. Esses documentos são preservados como evidência histórica e não substituem o estado atual descrito em `docs/project/`.
