# Relatorio de handoff e continuidade - Pausa AI

Data de referencia: 10/06/2026  
Workspace local: `C:\Users\rodrigo.filho\Documents\Pausa AI`  
Objetivo deste arquivo: permitir que outro Codex, outro agente ou uma pessoa tecnica continue o projeto sem depender do historico desta conversa.

## 1. Resumo executivo

O Pausa AI e um MVP full-stack de bem-estar preventivo, mobile-first, com foco em pequenas pausas guiadas para saude mental, rotina e retorno leve ao movimento. O produto B2C esta posicionado como 100% gratuito; monetizacao futura fica mais alinhada ao B2B, relatorios, pilotos corporativos e conteudo em video.

Estado atual observado em 10/06/2026:

- App web Next.js rodando localmente em `http://localhost:3000`.
- Porta `3000` ouvindo em `0.0.0.0:3000`, PID `4324`.
- IP LAN atual detectado: `192.168.5.20`; URL de teste na rede: `http://192.168.5.20:3000`.
- Home respondeu `200`.
- `/api/videos` respondeu `200` com registros planejados.
- Banco SQLite local: `prisma/dev.db`.
- Projeto tem `.git`, mas o branch `master` nao tem commits; o `git status` esta cheio de arquivos nao rastreados. Nao assumir historico Git confiavel.

## 2. Stack e comandos principais

Stack web:

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS
- Prisma ORM
- SQLite em desenvolvimento
- JWT em cookie httpOnly
- bcryptjs
- Zod
- Recharts
- date-fns
- lucide-react
- OpenAI opcional via `OPENAI_API_KEY`
- `@react-pdf/renderer` para PDFs locais

Stack mobile:

- Expo
- React Native
- WebView
- `expo-haptics`
- `expo-notifications`
- `expo-calendar`
- `react-native-health-connect`
- `expo-intent-launcher`

Comandos Windows recomendados:

```powershell
npm.cmd install
npm.cmd run db:push
npm.cmd run db:seed
npm.cmd run typecheck
npm.cmd run build
npm.cmd run start
```

Servidor local com variaveis explicitas, quando necessario:

```powershell
$env:DATABASE_URL='file:./dev.db'
$env:JWT_SECRET='local-test-secret'
$env:ADMIN_EMAIL='admin@pausa.ai'
$env:COOKIE_SECURE='false'
npm.cmd run start
```

Scripts disponiveis no `package.json`:

- `dev`: `next dev`
- `build`: `prisma generate && next build`
- `start`: `next start`
- `db:push`: `prisma db push`
- `db:seed`: `tsx prisma/seed.ts`
- `assets:instructional`: gera assets instrucionais
- `assets:movement-premium`: gera assets premium de movimento
- `assets:premium-apply`: aplica familias premium
- `assets:human-photos`: aplica artes finais baseadas em pessoas reais/sinteticas
- `docs:stretching-pdf`: gera o PDF detalhado de alongamentos
- `videos:sprint`: gera sprint de metadados/roteiros/thumbs de videos
- `videos:frames:plan`: planeja frames
- `videos:frames:final-art`: gera artes finais de frames
- `videos:frames:import-sheet`: importa frames de contact sheet
- `videos:render`: tenta renderizar videos a partir de frames
- `test:smoke`: smoke tests principais
- `test:walking`, `test:walking:auth`, `test:mobile-gps`: checks especificos
- `typecheck`: `tsc --noEmit`

## 3. Variaveis de ambiente

Arquivo exemplo: `.env.example`.

Chaves esperadas:

```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="change-this-secret"
OPENAI_API_KEY=""
ADMIN_EMAIL="admin@pausaai.com"
NEXT_PUBLIC_INSTAGRAM_URL="https://instagram.com/pausaai"
NEXT_PUBLIC_SPOTIFY_URL=""
COOKIE_SECURE="false"
APP_BASE_URL="http://localhost:3000"
CRON_SECRET=""
RESEND_API_KEY=""
RESEND_FROM_EMAIL="Pausa AI <onboarding@resend.dev>"
B2B_REAL_DASHBOARD_ENABLED="false"
```

O `.env` local existe, mas em 10/06/2026 so foram vistos estes nomes de chave nele:

- `DATABASE_URL`
- `JWT_SECRET`
- `OPENAI_API_KEY`
- `ADMIN_EMAIL`
- `NEXT_PUBLIC_INSTAGRAM_URL`
- `NEXT_PUBLIC_SPOTIFY_URL`

Para rodar producao local com `next start`, garanta pelo menos `DATABASE_URL`, `JWT_SECRET`, `ADMIN_EMAIL` e `COOKIE_SECURE=false`.

## 4. Estrutura de pastas

Raiz do projeto:

- `app/`: rotas Next.js, telas publicas, telas autenticadas e APIs.
- `components/`: componentes reutilizaveis da UI web.
- `lib/`: regras de negocio, dados, motores locais, conteudos e servicos.
- `mobile/`: app Expo/WebView companion.
- `prisma/`: schema, banco SQLite, seeds e SQLs de migracao.
- `public/`: assets servidos pelo app, imagens, videos, frames e APKs.
- `scripts/`: geradores, validadores e ferramentas de lote.
- `docs/`: documentacao, roteiros, relatorios e handoffs.
- `.next/`: build local gerado.
- `node_modules/`: dependencias instaladas.

Rotas atuais:

- 91 arquivos de rota/layout detectados em `app/`.
- 50 rotas de API em `app/api`.
- 38 paginas `page.tsx`.
- 3 layouts.

Entradas de produto mais importantes:

- Landing: `app/page.tsx`
- Cadastro: `app/cadastro/page.tsx`
- Login: `app/login/page.tsx`
- App autenticado: `app/app/page.tsx`
- Check-in: `app/app/checkin/page.tsx`
- Resultado de check-in: `app/app/checkin/resultado/[id]/page.tsx`
- Exercicios/missoes: `app/app/missoes/page.tsx`
- Ficha de exercicio: `app/app/exercicios/[slug]/page.tsx`
- Corpo e Movimento: `app/app/movimento/page.tsx`
- Caminhada: `app/app/movimento/caminhada/*`
- Yoga: `app/app/yoga/[slug]/page.tsx`
- Rotina: `app/app/rotina/page.tsx`
- Agenda: `app/app/agenda/page.tsx`
- Historico: `app/app/historico/page.tsx`
- Perfil: `app/app/perfil/page.tsx`
- Admin: `app/admin/*`
- Empresas/B2B: `app/empresas/*`
- Mobile preview: `app/mobile-preview/page.tsx`

APIs importantes:

- Auth: `app/api/auth/*`
- Check-ins: `app/api/checkins/route.ts`
- Missoes: `app/api/missions/route.ts`
- Exercicios: `app/api/exercises/route.ts`
- Fichas instrucionais: `app/api/exercise-instructions/session/route.ts`
- Videos planejados: `app/api/videos/route.ts`, `app/api/videos/[slug]/route.ts`
- Yoga: `app/api/yoga/*`
- Caminhada: `app/api/walking/*`
- Agenda: `app/api/agenda/*`
- Rotina: `app/api/routine/*`
- Relatorios semanais: `app/api/reports/weekly/route.ts`
- Plano semanal: `app/api/plan/weekly/route.ts`
- Health snapshot: `app/api/health/snapshot/route.ts`
- B2B: `app/api/b2b/dashboard/route.ts`
- Admin/leads/parceiros: `app/api/admin/*`, `app/api/leads/route.ts`, `app/api/partners/*`

## 5. Banco de dados e seeds

Schema: `prisma/schema.prisma`  
Banco local: `prisma/dev.db`  
Seed: `prisma/seed.ts`  
Tamanho do banco em 10/06/2026: `1.515.520` bytes  
Tabelas detectadas: 40

Contagens atuais no SQLite local:

| Tabela | Registros |
| --- | ---: |
| User | 14 |
| Profile | 12 |
| Checkin | 30 |
| Mission | 22 |
| MissionCompletion | 11 |
| Exercise | 151 |
| ExerciseInstruction | 207 |
| ExerciseInstructionSession | 18 |
| InstructionalVideo | 138 |
| WorkoutRoutine | 29 |
| WorkoutSession | 2 |
| YogaPractice | 30 |
| YogaSequence | 6 |
| Achievement | 18 |
| UserAchievement | 4 |
| WeeklyPlan | 1 |
| Company | 1 |
| CompanyMetricMock | 7 |
| Partner | 4 |
| InboxItem | 1 |
| SocialDowntime | 1 |

Tabelas preparadas mas vazias no snapshot atual incluem agenda, lembretes, metas de caminhada, sessoes de caminhada, snapshots de saude, leads B2B, interesses de parceiro, foco e filas de sincronizacao.

Arquivos SQL de migracao importantes:

- `prisma/init.sql`
- `prisma/free-levels-migration.sql`
- `prisma/commercial-phase-migration.sql`
- `prisma/profile-routine-migration.sql`
- `prisma/routine-migration.sql`
- `prisma/scientific-library-migration.sql`
- `prisma/exercise-instructions-migration.sql`
- `prisma/sprint-mobile-polish-migration.sql`
- `prisma/yoga-routine-android-first-migration.sql`
- `prisma/feature-expansion-migration.sql`
- `prisma/agenda-inteligente-migration.sql`
- `prisma/walking-intelligence-migration.sql`

No Windows, se o Prisma falhar com lock em `query_engine-windows.dll.node`, procure processos `node.exe`/`next start` rodando antes de regenerar client ou aplicar `db:push`.

## 6. Funcionalidades ja implementadas

### Nucleo B2C

- Landing publica.
- Cadastro e login.
- Sessao por cookie httpOnly/JWT.
- Onboarding.
- Dashboard autenticado.
- Check-in diario com scores e tags.
- Deteccao de risco textual com priorizacao.
- Recomendacao local com IA opcional.
- Historico.
- Perfil.
- XP, niveis, missoes e conquistas.
- Biblioteca de exercicios por foco, energia, sono, felicidade e corpo/movimento.

### Motor de check-in

O motor usa:

- foco;
- humor;
- estresse;
- energia;
- sono;
- tags manuais;
- texto opcional;
- historico recente;
- risco textual como prioridade maxima.

A IA, quando configurada, deve ser tratada como camada de redacao/ajuste de texto. A decisao principal de area, risco e exercicio continua local.

### Corpo e Movimento

Rota principal: `app/app/movimento/page.tsx`.

Areas ativas:

- Yoga de bolso.
- Mobilidade.
- Alongamentos.
- Caminhada.
- Casa leve/funcional.
- Pausas de trabalho/telas.

Dados e regras importantes:

- `lib/stretching-exercises.ts`: base detalhada de 85 alongamentos.
- `lib/exercise-instruction-data.ts`: sementes de fichas instrucionais.
- `lib/yoga-data.ts` e rotas `app/api/yoga/*`: praticas e sequencias de yoga.
- Caminhada tem rotas dedicadas em `app/app/movimento/caminhada/*` e APIs em `app/api/walking/*`.

### Rotina, notificacoes e modo sem redes

Rota: `app/app/rotina/page.tsx`.

Foi implementado/preservado:

- lembretes;
- tarefas;
- modo sem redes assistido;
- mensagens de permissao mais claras;
- ponte mobile para haptics/notificacoes;
- documentacao em `docs/rotina-alarmes-e-modo-sem-redes.md`.

Importante: o modo sem redes e assistido, nao bloqueio automatico completo de apps. Para UX, sempre explicar o caminho de recuperacao/permissao, nao apenas "permissao nao concedida".

### Agenda inteligente

Rota: `app/app/agenda/page.tsx`.

Arquivos-chave:

- `lib/agenda/schedule-ai-service.ts`
- `lib/agenda/agenda-service.ts`
- `app/api/agenda/*`
- `components/agenda-view.tsx`
- `components/smart-input.tsx`
- `components/event-preview-card.tsx`
- `components/week-view.tsx`
- `components/inbox-panel.tsx`
- `components/conflict-alert.tsx`
- `components/permission-banner.tsx`

Foi criada base local de agenda com parser em portugues, timezone `America/Sao_Paulo`, modelos Prisma e APIs. Ela deve coexistir com rotina antiga, nao substituir `RoutineReminder`, `RoutineTask` e `SocialDowntime` sem plano de migracao.

### Health Connect, progresso e relatorios

Foram adicionadas/planejadas superficies para:

- snapshot de saude em `app/api/health/snapshot/route.ts`;
- plano semanal em `app/api/plan/weekly/route.ts`;
- relatorio semanal em `app/api/reports/weekly/route.ts`;
- conquistas em `Achievement` e `UserAchievement`;
- integracao mobile com `react-native-health-connect`.

Parte disso e estrutura/dados locais. Validar no celular fisico antes de tratar como integracao final de producao.

### B2B, empresas e admin

Rotas:

- `app/empresas/page.tsx`
- `app/empresas/demo/page.tsx`
- `app/empresas/piloto/page.tsx`
- `app/admin/page.tsx`
- `app/admin/leads/page.tsx`
- `app/admin/leads/[id]/page.tsx`
- `app/admin/dashboard-empresas/page.tsx`
- `app/admin/partners/page.tsx`

Estado:

- B2B real deve ficar atras de feature flag.
- Demo B2B deve continuar visivel como experiencia primaria enquanto `B2B_REAL_DASHBOARD_ENABLED=false`.
- Dashboard empresarial nao deve mostrar dados individuais.
- Linguagem deve ser anonima/consolidada.

## 7. Mobile e APK

Pasta mobile: `mobile/`.

Arquivos-chave:

- `mobile/App.tsx`
- `mobile/nativeFeedback.ts`
- `mobile/app.json`
- `mobile/eas.json`
- `mobile/package.json`
- `mobile/android/`

Scripts mobile:

```powershell
cd mobile
npm.cmd install
npm.cmd run start:lan
npm.cmd run start:tunnel
npm.cmd run typecheck
npm.cmd run build:apk
npm.cmd run build:android
```

APKs salvos em:

- `public/apk/`

Arquivos APK detectados:

- `public/apk/pausa-ai-0.1.2-vc3-192.168.15.10-release.apk`
- `public/apk/pausa-ai-0.1.3-vc4-192.168.15.10-loginfix-release.apk`
- `public/apk/pausa-ai-0.1.4-vc5-192.168.15.10-login-native-redirect-release.apk`
- `public/apk/pausa-ai-0.1.5-vc6-192.168.15.7-login-native-redirect-release.apk`
- `public/apk/pausa-ai-0.1.6-vc7-192.168.5.20-android14-oneui6.1-release.apk`

Total APKs em `public/apk`: 5  
Mais recente: `pausa-ai-0.1.6-vc7-192.168.5.20-android14-oneui6.1-release.apk`

Para compartilhar APK na rede local:

1. Verificar IP atual com `ipconfig`.
2. Confirmar servidor em `0.0.0.0:3000`.
3. Montar URL com o IP atual, nao com IP antigo no nome do arquivo.
4. Testar com `Invoke-WebRequest`/HEAD.

Exemplo com IP atual deste snapshot:

```text
http://192.168.5.20:3000/apk/pausa-ai-0.1.6-vc7-192.168.5.20-android14-oneui6.1-release.apk
```

Se o IP mudar, atualizar a URL.

## 8. Videos planejados e videos reais

Fonte de planejamento:

- `lib/instructional-video-planning.ts`
- `prisma/seed.ts`
- modelo Prisma `InstructionalVideo`
- APIs `app/api/videos/route.ts` e `app/api/videos/[slug]/route.ts`

Estado atual:

- 138 videos planejados em banco/metadados.
- 116 videos para `EXERCISE_INSTRUCTION`.
- 22 videos para `MISSION`.
- 138 metadados JSON em `public/videos/metadata`.
- 138 thumbnails em `public/videos/thumbs`.
- 22 arquivos MP4 reais em `public/videos`.
- 1.124 frames JPG em `public/videos/frames`.

Locais:

- MP4s reais: `public/videos/*.mp4`
- Metadados individuais: `public/videos/metadata/*.json`
- Thumbnails: `public/videos/thumbs/*.jpg`
- Frames: `public/videos/frames/<slug>/<slug>-NN.jpg`
- Manifesto mestre: `public/videos/video-manifest.json`
- Indice do lote: `public/videos/video-production-index.json`
- Roteiros: `docs/video-production/roteiros.md`
- Checklist: `docs/video-production/checklist-videos.csv`
- Plano de frames: `docs/video-production/frame-production-plan.md`
- CSV de frames: `docs/video-production/frame-production-plan.csv`
- Relatorio final de frames: `docs/video-production/final-frame-art-report.json`
- Resumo da sprint: `docs/video-production/resumo-sprint.md`

Resumo da sprint de videos:

- Total: 138
- Corpo & Movimento: 116
- Missoes classicas: 22
- Ondas: onda 1 = 11, onda 2 = 22, onda 3 = 88, onda 4 = 17
- Categorias: 89 alongamentos regionais, 8 mobilidade, 7 pausas de trabalho/telas, 4 yoga fisico, 2 caminhada, 2 cardio leve, 2 funcional, 1 luta sombra, 1 pular corda, 22 missoes classicas

Regra importante:

- O app nao deve fingir que existe MP4 final so porque existe registro planejado.
- `components/instructional-video-block.tsx` deve manter fallback honesto quando o arquivo ainda nao existe.
- Exercicios usam slug simples: `/videos/<slug>.mp4`.
- Missoes usam prefixo: `/videos/missao-<slug>.mp4`.

## 9. Artes e imagens

Diretorios principais:

- Exercicios: `public/exercises`
- Caminhada: `public/walking`
- Yoga: `public/yoga`
- Frames de video: `public/videos/frames`
- Masters humanos: `public/art-masters`
- Relatorios de arte: `docs/art-production`

Contagens atuais:

| Grupo | Caminho | Quantidade |
| --- | --- | ---: |
| Imagens de exercicios | `public/exercises` | 1084 PNG |
| Imagens de caminhada | `public/walking` | 36 PNG |
| Imagens de yoga | `public/yoga` | 216 PNG |
| Frames de video | `public/videos/frames` | 1124 JPG |
| MP4s reais | `public/videos` | 22 MP4 |
| Metadados de video | `public/videos/metadata` | 138 JSON |
| Thumbnails de video | `public/videos/thumbs` | 138 JPG |
| APKs | `public/apk` | 5 APK |
| Art masters | `public/art-masters` | 8 PNG |

Trabalho recente de artes:

- Foram criados 8 masters humanos em `public/art-masters`.
- Script principal: `scripts/apply-human-photo-assets.ts`.
- Comando: `npm.cmd run assets:human-photos`.
- Relatorio: `docs/art-production/human-photo-assets-report.json`.
- Contact sheet de QA: `docs/art-production/human-photo-assets-contact.jpg`.

Resumo do relatorio de artes humanas:

- Politica: artes finais baseadas em pessoa, sem placeholder/vetor simplificado.
- Total atualizado: 2460 arquivos.
- Renderizados:
  - `exercise`: 624
  - `walking`: 36
  - `yoga`: 216
  - `video-frame`: 981
- Pulados por ja estarem em padrao humano:
  - `exercise`: 460
  - `video-frame`: 143

Masters atuais:

- `public/art-masters/human-breathing.png`
- `public/art-masters/human-focus.png`
- `public/art-masters/human-functional.png`
- `public/art-masters/human-sleep.png`
- `public/art-masters/human-stretch.png`
- `public/art-masters/human-walking.png`
- `public/art-masters/human-yoga-energy.png`
- `public/art-masters/human-yoga-light.png`

Observacao: antes de finalizar qualquer proxima rodada de arte, conferir visualmente uma amostra real. O usuario rejeitou imagens simplificadas com bonecos/placeholder e pediu pessoas bem feitas.

## 10. PDF de alongamentos

Foi gerado um PDF com a lista detalhada de alongamentos.

Arquivos:

- PDF final: `docs/alongamentos-detalhados-pausa-ai.pdf`
- Script gerador: `scripts/export-stretching-pdf.tsx`
- Comando: `npm.cmd run docs:stretching-pdf`
- Fonte de dados: `lib/stretching-exercises.ts`

Conteudo:

- 85 alongamentos.
- 17 regioes corporais.
- Funcao de cada alongamento.
- Como executar.
- Tempo, series, musculos, articulacoes.
- Indicacoes.
- Contraindicacoes/cuidados.
- Erros comuns.
- Variacoes facil/progressao.
- Sinais de alerta.

Validacao feita:

- PDF com 49 paginas.
- 85 blocos "Como executar".
- 85 blocos de sinais de alerta.
- `npm.cmd run typecheck` passou apos criacao do script.

## 11. Documentacao existente

Documentos de alto valor:

- `README.md`: visao geral, stack, setup e funcionalidades.
- `docs/prioridade-mvp-saude-mental.md`: foco atual do MVP.
- `docs/retorno-corpo-movimento.md`: direcao de Corpo & Movimento.
- `docs/yoga-rotina-android-first.md`: yoga e rotina mobile-first.
- `docs/rotina-alarmes-e-modo-sem-redes.md`: limites e UX de rotina/modo sem redes.
- `docs/caminhada-inteligente-roadmap.md`: roadmap de caminhada.
- `docs/checklist-publicacao-mobile.md`: checklist mobile/publicacao.
- `docs/fase-apk-haptics-notificacoes.md`: fase APK/haptics/notificacoes.
- `docs/situacao-atual-projeto-pausa-ai.md`: relatorio de 29/05/2026, parcialmente desatualizado.
- `docs/relatorio-completo-estrutura-e-fase.md`: relatorio de 29/05/2026, parcialmente desatualizado.
- `docs/relatorio-fase-atual-mvp.md`: fase do MVP.
- `docs/planejamento-videos-pausa-ai.md`: plano de videos.
- `docs/video-production/*`: sprint de videos, roteiros, checklist e frames.
- `docs/art-production/*`: relatorio e contact sheet das artes finais.
- `docs/alongamentos-detalhados-pausa-ai.pdf`: PDF de alongamentos.

Este arquivo atual, `docs/relatorio-handoff-continuidade-pausa-ai.md`, deve ser tratado como o handoff mais recente.

## 12. Validacoes recentes

Valido em 10/06/2026:

- `npm.cmd run typecheck`: passou.
- `npm.cmd run docs:stretching-pdf`: passou.
- `http://localhost:3000`: `200`.
- `http://localhost:3000/api/videos`: `200`.
- PDF de alongamentos: 49 paginas e 85 blocos de execucao.
- Assets humanos: relatorio indica 2460 atualizacoes e cobertura completa dos grupos alvo.

Valido em rodadas anteriores, segundo historico de memoria:

- `db:push`, `db:seed`, `typecheck`, `build` e API de videos planejados foram usados para validar a camada `InstructionalVideo`.
- Smoke tests foram usados para agenda e fluxos principais.
- APK/link LAN foi validado com servidor local e HEAD/HTTP.

Revalidar antes de entrega externa:

```powershell
npm.cmd run db:push
npm.cmd run db:seed
npm.cmd run typecheck
npm.cmd run build
npm.cmd run test:smoke
```

Se a porta 3000 ja estiver ocupada, identificar PID:

```powershell
netstat -ano | Select-String ':3000'
Get-CimInstance Win32_Process -Filter "ProcessId = <PID>" | Select-Object ProcessId,ParentProcessId,CommandLine
```

## 13. Cuidados de produto e linguagem

Manter:

- Linguagem acolhedora, preventiva e sem julgamento.
- Produto como apoio de bem-estar, nao terapia.
- Sem diagnostico, promessa de cura ou substituicao de psicologo/medico/psiquiatra.
- Em risco textual, preservar mensagem de emergencia e CVV 188 no Brasil.
- No B2B, apenas dados anonimos, agregados e demonstrativos enquanto nao houver dashboard real.
- No modo sem redes, ser honesto: assistido, nao bloqueio automatico total.

Evitar:

- Prometer integracoes externas ativas sem validacao.
- Dizer que todos os videos existem quando ha apenas planejamento/metadados/frames.
- Reverter ou apagar assets gerados em lote sem backup.
- Trocar slugs de videos sem alinhar DB, public assets e metadados.
- Fazer limpeza agressiva no Prisma sem preservar campos/tabelas legadas.

## 14. Riscos e pendencias

Riscos tecnicos:

- Git sem commits: qualquer novo agente deve criar um baseline antes de grandes mudancas, se o usuario autorizar.
- Muitos assets grandes em `public/`; cuidado com operacoes recursivas.
- SQLite local e seeds podem divergir de outra maquina.
- Prisma no Windows pode travar se houver `node.exe` segurando engine.
- `.env` local nao contem todas as chaves do `.env.example`.
- Alguns documentos antigos sao de 29/05/2026 e estao desatualizados em relacao a agenda, videos, artes humanas e PDF de alongamentos.

Pendencias de produto/execucao:

- QA completo em celular fisico.
- Staging HTTPS.
- APK interno final via EAS ou build local reproduzivel.
- Revisao LGPD formal.
- PostgreSQL antes de producao publica.
- Envio real de e-mail com Resend.
- Dashboard B2B real atras de flag.
- Mais testes automatizados de APIs e fluxos criticos.
- Conversao dos frames/artes em MP4 final com narracao, legendas, audio e checklist.

## 15. Proximo passo recomendado

Sequencia conservadora para continuar:

1. Criar um checkpoint Git/baseline, se o usuario autorizar.
2. Rodar `npm.cmd run typecheck`.
3. Rodar `npm.cmd run build`.
4. Rodar `npm.cmd run test:smoke`.
5. Revisar visualmente `/app`, `/app/checkin`, `/app/missoes`, `/app/movimento`, `/app/agenda`, `/app/rotina` e uma ficha `/app/exercicios/[slug]`.
6. No mobile, validar WebView com `http://192.168.5.20:3000` ou IP atual.
7. Se o foco for videos, priorizar converter os 22 MP4 reais e/ou pipeline de frames para MP4 final com validacao.
8. Se o foco for publicacao, preparar staging HTTPS e atualizar `APP_BASE_URL`/mobile.
9. Se o foco for produto, limpar navegacao e fluxos para o MVP B2C antes de expandir B2B.

## 16. Prompt pronto para outro Codex

Use este prompt em outro Codex:

```text
Voce esta no projeto Pausa AI em C:\Users\rodrigo.filho\Documents\Pausa AI.
Antes de alterar qualquer coisa, leia docs/relatorio-handoff-continuidade-pausa-ai.md, README.md, package.json, prisma/schema.prisma e docs/prioridade-mvp-saude-mental.md.
O projeto e Next.js 16 + Prisma SQLite + Expo mobile companion. Use npm.cmd no Windows.
Nao assuma que o Git tem baseline: o branch master pode nao ter commits e muitos arquivos podem estar untracked.
Valide com npm.cmd run typecheck e, se mexer em comportamento, npm.cmd run build/test:smoke.
Mantenha o app B2C gratuito, linguagem preventiva sem diagnostico, e nao prometa videos/integrações que ainda nao existam.
Artes finais devem usar pessoas bem feitas; nao voltar para placeholders/bonecos vetoriais.
Videos planejados ficam em InstructionalVideo/public/videos/metadata, mas MP4 real so conta se existir em public/videos/*.mp4.
Se for trabalhar com rotina/agenda, preserve coexistencia com tabelas legadas.
Se for compartilhar APK, use public/apk, detecte o IP atual com ipconfig e confirme o servidor em 0.0.0.0:3000.
```

## 17. Checklist rapido de continuidade

- [ ] Ler este handoff.
- [ ] Conferir `git status --short`.
- [ ] Conferir `.env` e `.env.example`.
- [ ] Conferir se `prisma/dev.db` existe.
- [ ] Rodar `npm.cmd run typecheck`.
- [ ] Rodar `npm.cmd run build` antes de entregar mudancas grandes.
- [ ] Se servidor precisar estar ativo, confirmar `netstat -ano | Select-String ':3000'`.
- [ ] Se mexer em assets, verificar amostras visuais.
- [ ] Se mexer em videos, diferenciar planejado vs MP4 final.
- [ ] Se mexer em mobile, testar IP LAN atual ou staging HTTPS.

