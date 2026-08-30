# Situacao atual do projeto Pausa AI

Data: 29/05/2026  
Status: MVP funcional avancado em ambiente local

## 1. Resumo executivo

O Pausa AI esta em uma fase de MVP avancado, com base tecnica full-stack implementada e com posicionamento evoluido de um app simples de check-in para uma plataforma gratuita de bem-estar preventivo para pessoas, com potencial de monetizacao B2B.

O produto ja possui fluxo B2C, autenticacao, check-ins, recomendacoes com fallback local, biblioteca de missoes, area Corpo & Movimento, sistema de XP/niveis, paginas comerciais B2B, administracao de leads e app companion via Expo Go.

No momento, o B2C deve permanecer 100% gratuito. A monetizacao recomendada segue pelo B2B: pilotos corporativos, dashboards anonimos, relatorios e acoes preventivas para empresas.

## 2. Situacao tecnica atual

Stack principal:

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Prisma ORM
- SQLite local
- JWT em cookie httpOnly
- bcryptjs
- Zod
- Recharts
- OpenAI opcional via `OPENAI_API_KEY`
- Expo Go com WebView como app mobile companion

Ambiente local:

- Web: `http://localhost:3000`
- Web na rede local: `http://192.168.5.20:3000`
- Expo Go: `exp://192.168.5.20:8081`
- Banco local: `prisma/dev.db`

## 3. Problema identificado em cadastro/login

Foi identificado que cadastro e login estavam falhando porque o servidor Next.js havia sido iniciado sem a variavel de ambiente `DATABASE_URL`.

Erro observado:

```text
Environment variable not found: DATABASE_URL
```

Impacto:

- `POST /api/auth/register` retornava erro 500.
- `POST /api/auth/login` retornava erro 500.
- O Prisma nao conseguia acessar o banco SQLite.

Correcao aplicada:

- Criado arquivo `.env` local com as variaveis necessarias.
- Servidor Next.js reiniciado carregando `.env`.
- Cadastro e login testados diretamente via API.

Resultado do teste:

- Cadastro: `200`
- Login: `200`
- Redirecionamento esperado: `/app/onboarding`

## 4. Funcionalidades implementadas

### B2C gratuito

- Landing page publica.
- Cadastro e login.
- Sessao com cookie httpOnly.
- Onboarding.
- Dashboard do usuario.
- Check-in diario.
- Deteccao de risco textual.
- Recomendacao com IA opcional ou fallback local.
- Historico.
- Insights semanais.
- Perfil editavel.
- Sistema de XP e niveis.
- Biblioteca de missoes.
- App 100% gratuito para uso individual.

### Biblioteca e personalizacao

- Biblioteca estruturada por areas:
  - Foco
  - Antiestresse
  - Energia
  - Humor
  - Sono
- Estrutura de "Astral do dia".
- Recomendacao por estado atual do usuario.
- Reducao de intensidade em dias de baixa energia, sono ruim ou estresse alto.
- Linguagem preventiva, sem diagnostico clinico.

### Corpo & Movimento

- Rota `/app/movimento`.
- Modalidades e filtros por tipo de atividade.
- Funcional em Casa.
- Yoga leve.
- Alongamentos.
- Pular corda.
- Luta sombra leve.
- Cardio leve.
- Avisos de seguranca para atividade fisica.
- Estrutura de exercicios instrucionais.

### Fichas instrucionais

- Modelo `ExerciseInstruction`.
- Rota `/app/exercicios/[slug]`.
- Imagem por `imageKey`.
- Placeholder quando a imagem ainda nao existe.
- Campos instrucionais:
  - objetivo;
  - como fazer;
  - postura;
  - respiracao;
  - erros comuns;
  - cuidados;
  - quando fazer;
  - quando evitar;
  - series/repeticoes ou duracao.

### B2B e comercial

- Pagina `/empresas`.
- Pagina `/empresas/piloto`.
- Pagina `/empresas/demo`.
- Pagina `/precos` reposicionada com B2C gratuito e B2B pago.
- Formulario de lead B2B.
- Admin protegido por `ADMIN_EMAIL`.
- Listagem de leads.
- Detalhe de lead.
- Atualizacao de status.
- Observacoes e proximo contato.
- Mensagens comerciais copiaveis.
- Dashboard empresarial demonstrativo com dados anonimos/mockados.

### Beneficios e parceiros

- Rota `/app/beneficios`.
- Estrutura para parceiros como Wellhub, TotalPass, academias locais e personal trainers.
- Linguagem de integracao futura, sem prometer API ativa.
- Estrutura administrativa para parceiros.

### Mobile

- Projeto Expo em `mobile/`.
- App companion via WebView.
- Teste via Expo Go.
- QR/link local para celular.
- Ainda nao ha APK final gerado.

## 5. Posicionamento atual recomendado

Nome:

Pausa AI

Tagline:

Pequenas pausas para uma mente menos sobrecarregada.

Posicionamento B2C:

Um app gratuito para cuidar da mente, do corpo e da rotina com pequenas missoes diarias.

Posicionamento B2B:

Uma plataforma simples para empresas acompanharem sinais de bem-estar da equipe com dados anonimos e acoes preventivas.

Pilares do produto:

1. Check-in diario.
2. Missoes leves.
3. Corpo & Movimento.
4. Visao anonima para empresas.

## 6. Cuidados de linguagem e compliance

O projeto deve continuar evitando:

- diagnosticos;
- promessa de cura;
- linguagem clinica definitiva;
- substituicao de psicologo, medico, terapeuta ou psiquiatra;
- exibicao de dados individuais no B2B.

Linguagens recomendadas:

- "astral do dia";
- "perfil do momento";
- "leitura de bem-estar";
- "orientacao personalizada";
- "parece que";
- "pode ser util observar".

Em risco textual, o app deve preservar a mensagem de acolhimento e emergencia, incluindo CVV 188 no Brasil.

## 7. Pendencias e riscos atuais

### Alta prioridade

- Validar cadastro, login e onboarding manualmente no navegador apos a correcao do `.env`.
- Rodar `npm run typecheck`.
- Rodar `npm run build`.
- Verificar se todas as migrations e seeds estao alinhadas ao banco local.
- Validar as fichas instrucionais no fluxo real do usuario.
- Revisar contraste visual em modo claro e escuro.

### Media prioridade

- Revisar textos duplicados ou internos que possam estar aparecendo para o usuario.
- Melhorar a consistencia visual da area Corpo & Movimento.
- Refinar filtros da biblioteca de missoes e exercicios.
- Validar o app via Expo Go em celular real.
- Criar imagens reais para os 36 `imageKeys` prioritarios.

### Futuro

- Gerar APK via EAS Build ou build local Android.
- Publicar web em ambiente HTTPS.
- Trocar SQLite por PostgreSQL em producao.
- Implementar pagamentos ou contrato B2B.
- Criar relatorios PDF.
- Criar dashboard B2B real por empresa.
- Revisao LGPD formal.
- Integracoes reais com Wellhub, TotalPass ou parceiros locais.

## 8. Situacao do APK e Expo Go

O app pode ser testado hoje via Expo Go, usando o servidor Expo local.

Para gerar APK final, existem dois caminhos:

1. EAS Build na nuvem:
   - exige internet;
   - exige login Expo;
   - faz upload do projeto mobile para a Expo;
   - gera APK instalavel.

2. Build local:
   - exige Java/JDK;
   - exige Android SDK;
   - exige configuracao Android local;
   - nao depende de upload, mas e mais pesado para a maquina.

No ambiente atual, Java/Android SDK nao estavam disponiveis. Por isso, o caminho mais viavel para teste imediato e Expo Go.

## 9. Recomendacao de proxima fase

Antes de expandir novas funcionalidades, recomenda-se estabilizar:

1. Autenticacao e banco local.
2. Onboarding completo.
3. Check-in + Astral do dia.
4. Biblioteca de exercicios instrucionais.
5. Corpo & Movimento.
6. Expo Go em celular real.
7. Typecheck e build.

Depois disso, seguir para:

- kit comercial B2B;
- proposta PDF;
- modelo de relatorio do piloto;
- dashboard empresarial real;
- APK ou publicacao em loja.

## 10. Conclusao

O Pausa AI ja possui uma base de produto robusta para MVP. A falha atual de cadastro/login era de ambiente, nao de arquitetura: faltava `DATABASE_URL` no servidor em execucao.

Com o `.env` criado e o servidor reiniciado, o fluxo de cadastro/login voltou a funcionar via API. A proxima etapa deve ser validacao manual da experiencia completa no navegador e no Expo Go, seguida de typecheck/build para estabilizar a entrega.
