# Pausa AI

Pequenas pausas para uma mente menos sobrecarregada.

## Prioridade atual do MVP

Nesta fase, a experiencia principal do Pausa AI esta focada em saude mental preventiva, especialmente ansiedade do dia a dia e sobrecarga por telas.

Fluxo visivel prioritario:

- Landing, cadastro e login
- Onboarding
- Dashboard
- Check-in
- Exercicios para foco, energia, sono, felicidade e Corpo & Movimento leve
- Corpo & Movimento com trilhas gratuitas de Yoga de bolso, mobilidade, alongamentos, caminhada e casa leve
- Historico
- Perfil

Matriz de prioridade:

| Camada | Status | Funcionalidades |
| --- | --- | --- |
| P0 | Ativo no MVP mobile | Landing, cadastro, login, onboarding, dashboard, check-in, exercicios, Corpo & Movimento leve, historico e perfil |
| P1 | Ativo no nucleo B2C | Astral do dia, recomendacao, XP, respiracao 4-4-6, pausa sem tela, Yoga de bolso, mobilidade e alongamentos leves |
| P2 | Disponivel por rota direta | Insights, beneficios, empresas, precos e admin |
| P3 | Oculto temporariamente | Parceiros, social buttons, treinos fisicos avancados e integracoes externas |
| P4 | Futuro | APK final, dashboard B2B real, relatorios PDF e monetizacao |

Veja tambem `docs/prioridade-mvp-saude-mental.md`, `docs/retorno-corpo-movimento.md` e `docs/yoga-rotina-android-first.md`.

O Pausa AI é um MVP full-stack de bem-estar preventivo para pessoas e empresas. Ele permite cadastro, login, onboarding, check-ins, recomendações com IA opcional ou fallback local, histórico completo, missões desbloqueadas por nível, insights semanais, geração de leads B2B, painel admin e dashboard empresarial demonstrativo com dados anônimos e consolidados.

## Stack

- Next.js 16 com App Router e TypeScript
- Tailwind CSS
- Prisma ORM
- SQLite em desenvolvimento
- Cookies httpOnly com JWT assinado
- bcryptjs para hash de senha
- Zod para validação
- Recharts para gráficos
- date-fns para datas
- lucide-react para ícones
- OpenAI opcional via `OPENAI_API_KEY`

## Produto 100% Gratuito

O app B2C não possui assinatura paga. A evolução acontece por níveis:

- Check-in: `+10 XP`
- Missão concluída: `+20 XP`
- Streak de 3 dias: `+15 XP`
- Streak de 7 dias: `+40 XP`

Novas missões são desbloqueadas por nível. Atividades físicas são leves a moderadas, como yoga simples, mobilidade, alongamento, caminhada indoor e treino em casa de baixo impacto. Monetização por vídeos fica para uma etapa futura e não bloqueia recursos nesta versão.

## Configuração

Crie um arquivo `.env` baseado em `.env.example`:

```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="change-this-secret"
OPENAI_API_KEY=""
ADMIN_EMAIL="admin@pausaai.com"
COOKIE_SECURE="false"
```

Para staging/producao, nao reutilize esses placeholders. Use PostgreSQL gerenciado, `JWT_SECRET` longo e aleatorio, `COOKIE_SECURE=true`, `APP_BASE_URL` HTTPS e secrets fora do Git. O arquivo `prisma.config.ts` substitui `package.json#prisma` e carrega `.env` local para os comandos Prisma.

Instale as dependências:

```bash
npm install
```

Gere o Prisma Client:

```bash
npx prisma generate
```

Crie o banco local:

```bash
npm run db:push
```

Se o engine do Prisma falhar no Windows local, use:

```bash
npx prisma db execute --schema prisma/schema.prisma --file prisma/init.sql
```

Para atualizar um banco antigo do MVP anterior para o sistema gratuito com níveis:

```bash
npx prisma db execute --schema prisma/schema.prisma --file prisma/free-levels-migration.sql
```

Para atualizar um banco local antigo com Yoga instrucional e Rotina Android-first:

```bash
npx prisma db execute --schema prisma/schema.prisma --file prisma/yoga-routine-android-first-migration.sql
```

Rode o seed:

```bash
npm run db:seed
```

Reconcilie os videos reais existentes depois do seed:

```bash
npm run videos:reconcile
```

Ordem curta para reconstruir o ambiente local sem versionar `prisma/dev.db`:

```bash
npm install
cp .env.example .env
npx prisma generate
npm run db:push
npm run db:seed
npm run videos:reconcile
npm run typecheck
npm run build
npm run lint
```

No Windows PowerShell deste projeto, prefira os equivalentes com `npm.cmd` e `npx.cmd`.

Inicie o app:

```bash
npm run dev
```

Acesse `http://localhost:3000`.

## Login Admin de Teste

- E-mail: `admin@pausaai.com`, ou o valor de `ADMIN_EMAIL`
- Senha: `admin12345`

## Funcionalidades

- Landing B2C em `/`
- Landing B2B e formulário de lead em `/empresas`
- Cadastro em `/cadastro`
- Login em `/login`
- Página gratuita em `/precos`
- Onboarding em `/app/onboarding`
- Dashboard com nível, XP e próximo desbloqueio em `/app`
- Check-in em `/app/checkin`
- Resultado em `/app/checkin/resultado/[id]`
- Rotina, alarmes, tarefas e modo sem redes assistido em `/app/rotina`
- Yoga instrucional em `/app/movimento?aba=yoga` e detalhes em `/app/yoga/[slug]`
- Exercicios de foco, energia, sono, felicidade e Corpo & Movimento em `/app/missoes`
- Recuperacao de senha em `/esqueci-senha`
- Corpo & Movimento ativo em `/app/movimento`, com retorno visual por trilhas gratuitas: Yoga de bolso, mobilidade, alongamentos, caminhada e casa leve
- Histórico completo em `/app/historico`
- Insights semanais preservados por rota direta em `/app/insights`
- Perfil em `/app/perfil`
- Admin em `/admin`
- Leads em `/admin/leads`
- Dashboard empresarial demo em `/admin/dashboard-empresas`
- Ambiente de teste mobile em `/mobile-preview`

## IA e Fallback

Se `OPENAI_API_KEY` estiver configurada, o app tenta gerar a orientação com IA. Se a chave estiver vazia ou a chamada falhar, o app usa fallback local por regras:

- Risco detectado: mensagem de emergência e CVV 188 no Brasil
- Estresse alto: respiração 4-4-6
- Sono baixo: ritual de sono sem tela
- Energia baixa: pausa leve com água e alongamento
- Humor baixo: diário de descarrego mental
- Caso geral: gratidão rápida ou organização leve

## Polimento do nucleo mobile

A sprint atual adiciona:

- peso maior para tags manuais no motor de check-in;
- influencia dos ultimos 3 check-ins na recomendacao;
- micro-feedback visual durante o check-in;
- timer de respiracao por 3, 5 ou 8 ciclos;
- fichas com modo rapido e modo completo;
- fechamento pos-pratica com sugestao leve para o proximo dia;
- historico com streak e resumo semanal;
- perfil com dados simples de uso;
- onboarding redirecionando para o primeiro check-in;
- recuperacao de senha com token local e envio real de e-mail preparado para etapa futura;
- rotina com lembretes de dormir/acordar, lista de tarefas e modo sem redes assistido.

Haptics e notificacoes nativas ficam para a fase APK/app mobile. A ponte web -> Expo e a abstracao nativa estao preparadas para funcionar quando o app tiver os pacotes nativos instalados. Veja `docs/fase-apk-haptics-notificacoes.md`.

Alarmes reais do sistema e bloqueio automatico de redes sociais dependem das permissoes e APIs nativas do celular. A implementacao atual usa notificacoes locais, tarefas e atalho assistido para configuracoes de Foco/Tempo de Uso/Bem-estar Digital. Veja `docs/rotina-alarmes-e-modo-sem-redes.md`.

O APK local de teste fica em `mobile/android/app/build/outputs/apk/release/app-release.apk`. Para testes na rede local, o Android esta configurado com `usesCleartextTraffic=true`, permitindo carregar `http://IP_DA_MAQUINA:3000` enquanto o staging HTTPS ainda nao existir.

## Publicacao e validacao mobile

O projeto esta preparado para sair do MVP local para teste com usuarios reais em etapas:

1. Validar o fluxo completo no celular fisico via Expo Go.
2. Otimizar imagens e performance das fichas.
3. Rodar smoke tests automatizados do fluxo critico.
4. Publicar staging web em HTTPS.
5. Configurar a WebView mobile para a URL HTTPS.
6. Gerar APK interno via EAS.
7. Ativar haptics e notificacoes nativas no app mobile.

Itens que dependem de ambiente externo:

- Publicacao HTTPS exige provedor como Vercel e variaveis reais.
- APK exige Expo/EAS, login Expo e rede externa, ou Android SDK local.
- PostgreSQL deve substituir SQLite antes de producao publica.
- Envio real de e-mail, dashboard B2B real, relatorios PDF, monetizacao por videos e revisao LGPD formal continuam como proximas fases.

## Segurança e Privacidade

O Pausa AI não é terapia, não faz diagnóstico e não substitui psicólogo, médico, psiquiatra, plano de saúde ou atendimento de emergência.

O dashboard empresarial nunca mostra respostas individuais. Ele exibe apenas médias, tendências e dados consolidados/mockados no MVP.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run typecheck
npm run test:smoke
npm run db:push
npm run db:seed
npm run catalog:reconcile
npm run catalog:check
npm run catalog:sync
```

`catalog:reconcile` cruza o catalogo fisico/yoga com os arquivos reais de `public/instructional-images`, atualiza os vinculos e regenera o relatorio de pendencias. `catalog:sync` grava no Prisma tanto os vinculos visuais quanto os itens ativos, arquivados por falta de imagem e aguardando revisao.

## Ambiente Mobile via Expo Go

O projeto inclui um app companion em `mobile/` para testar o Pausa AI no Expo Go. Ele renderiza o app web local em uma WebView e oferece atalhos para as principais rotas.

```bash
cd mobile
npm install
npm run start:lan
```

Em celular físico, troque a URL dentro do app mobile de `http://localhost:3000` para o IP da máquina, por exemplo:

```text
http://192.168.0.10:3000
```

Em emulador Android, use normalmente `http://10.0.2.2:3000`. Em novo APK interno, revise `mobile/app.json` em `expo.extra.defaultWebBaseUrl` para apontar para staging HTTPS ou para o IP LAN atual de teste antes do build. Nao reutilize IP antigo embutido no nome de APK como se fosse sempre atual.

Se LAN não funcionar na rede corporativa, `npm run start:tunnel` usa os serviços do Expo e rede externa.

## Próximos Passos

- QA completo no celular fisico via Expo Go
- Publicacao web staging em HTTPS
- APK interno via EAS
- Haptics e notificacoes nativas no app mobile
- Monetização futura com vídeos no app
- PostgreSQL em produção
- E-mails transacionais
- Ativar envio real de e-mail para recuperacao de senha
- Dashboard B2B real com empresas e setores
- Exportação de relatórios em PDF
- Revisão LGPD
- Ampliar testes automatizados de API e fluxos criticos
