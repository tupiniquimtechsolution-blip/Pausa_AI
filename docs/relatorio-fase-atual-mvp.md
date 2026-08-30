# Relatorio de fase atual - Pausa AI

Data: 29/05/2026  
Fase: MVP mobile-first focado em saude mental preventiva  
Status geral: funcional em ambiente local, com nucleo mental validado tecnicamente

## 1. Resumo executivo

O Pausa AI passou por uma reducao estrategica de escopo visivel. O projeto continua tendo uma base ampla, com B2C, B2B, admin, parceiros, movimento fisico, exercicios instrucionais e Expo Go, mas a fase atual do MVP foi reposicionada para validar primeiro uma experiencia mais simples e clara.

O foco atual e:

- ansiedade do dia a dia;
- sobrecarga por telas;
- check-in rapido;
- orientacao segura;
- exercicios guiados simples;
- teste mobile via Expo Go.

Essa decisao melhora a clareza do produto, reduz dispersao funcional e permite testar com usuarios reais. Corpo & Movimento voltou de forma controlada, como trilhas leves e gratuitas, enquanto B2B, parceiros, APK final e monetizacao seguem como camadas separadas.

## 2. Posicionamento da fase atual

Nome do produto:

Pausa AI

Tagline:

Pequenas pausas para uma mente menos sobrecarregada.

Posicionamento atual:

Um app gratuito de bem-estar mental preventivo para ajudar pessoas a fazer check-ins, reduzir sobrecarga por telas e praticar pausas simples em momentos de ansiedade do dia a dia.

O que o produto nao e:

- nao e terapia;
- nao faz diagnostico;
- nao substitui psicologo, medico, psiquiatra ou emergencia;
- nao promete cura;
- nao deve ser vendido como app clinico.

## 3. Escopo visivel do MVP

Nesta fase, o usuario comum deve enxergar apenas o fluxo essencial:

- Landing page;
- cadastro;
- login;
- onboarding;
- dashboard;
- check-in;
- exercicios;
- movimento leve;
- historico;
- perfil.

A navegacao principal autenticada foi reduzida para:

- Hoje;
- Check-in;
- Exercicios;
- Movimento;
- Historico;
- Perfil.

Essa reducao deixa o produto mais direto e mais adequado para teste em celular.

## 4. Exercicios principais da fase

### 4.1 Respiracao 4-4-6

Objetivo:

Ajudar o usuario a desacelerar em momentos de ansiedade do dia a dia, estresse ou agitacao.

Formato:

- ficha instrucional;
- duracao sugerida de 3 minutos;
- orientacao por fases: inspirar, segurar e expirar;
- linguagem acolhedora;
- aviso para nao forcar a respiracao.

Uso esperado:

Quando o usuario relata estresse, agitacao, mente acelerada ou necessidade de uma pausa curta antes de continuar.

### 4.2 Pausa sem tela

Objetivo:

Reduzir estimulos digitais, descansar a atencao e interromper o impulso automatico de checar notificacoes ou alternar entre aplicativos.

Formato:

- ficha instrucional;
- duracao sugerida de 5 minutos;
- orientacao para afastar telas;
- foco em olhos, corpo e atencao;
- linguagem pratica, sem julgamento.

Uso esperado:

Quando o usuario relata cansaco mental, dispersao, dificuldade de foco ou uso excessivo de telas.

## 5. Funcionalidades preservadas por rota direta

As seguintes areas continuam no projeto, mas nao devem competir com a experiencia diaria agora:

- `/app/beneficios`;
- `/app/insights`;
- `/empresas`;
- `/empresas/piloto`;
- `/empresas/demo`;
- `/precos`;
- `/admin`;
- `/admin/leads`;
- `/admin/partners`.

Essas rotas continuam uteis como base futura, mas nao devem competir com a experiencia principal do MVP mobile.

## 6. Matriz de prioridade

| Camada | Status | Conteudo |
| --- | --- | --- |
| P0 | Ativo no MVP mobile | Landing, cadastro, login, onboarding, dashboard, check-in, exercicios, movimento leve, historico e perfil |
| P1 | Ativo no nucleo B2C | Astral do dia, recomendacao, XP, respiracao 4-4-6, pausa sem tela e Corpo & Movimento leve |
| P2 | Disponivel por rota direta | Insights, beneficios, empresas, precos e admin |
| P3 | Oculto temporariamente | Parceiros, social buttons, treinos fisicos avancados e integracoes externas |
| P4 | Futuro | APK final, dashboard B2B real, relatorios PDF, integracoes externas e monetizacao |

## 7. Estado tecnico atual

Stack:

- Next.js 16;
- React 19;
- TypeScript;
- Tailwind CSS;
- Prisma ORM;
- SQLite local;
- JWT em cookie httpOnly;
- bcryptjs;
- Zod;
- Recharts;
- OpenAI opcional;
- Expo Go com WebView.

Ambiente local:

- Web local: `http://localhost:3000`;
- Web na rede local: `http://192.168.5.20:3000`;
- Expo Go: `exp://192.168.5.20:8081`;
- Banco: `prisma/dev.db`.

Status de validacao recente:

- `npm run typecheck`: aprovado;
- `mobile npm run typecheck`: aprovado;
- `npm run build`: aprovado;
- cadastro/login corrigidos apos criacao do `.env`;
- fluxo de teste validado com cadastro, onboarding, check-in e paginas autenticadas;
- `/app/missoes` validado como rota funcional;
- imagens de Respiracao 4-4-6 e Pausa sem tela servindo com status `200`.

## 8. Riscos e pontos de atencao

### Produto

- O projeto ainda possui muitas funcionalidades implementadas, o que pode gerar dispersao se voltarem cedo para a navegacao principal.
- O usuario deve entender rapidamente que o foco atual e ansiedade/telas, nao fitness, B2B ou dashboard corporativo.
- A linguagem precisa continuar preventiva e nao clinica.

### Tecnico

- O build no Windows pode falhar se o servidor dev estiver segurando o arquivo do Prisma Client. Solucao atual: parar a porta `3000`, rodar build e religar o servidor.
- As imagens dos exercicios instrucionais cadastrados existem em `public/exercises/`; o placeholder segue como seguranca caso novas fichas sejam adicionadas sem arquivo.
- O APK final ainda nao foi gerado. O teste mobile atual usa Expo Go.

### Operacional

- Para testar no celular, o usuario precisa trocar `localhost` pelo IP da maquina quando usar Expo Go.
- Em rede corporativa, Expo Go por LAN pode depender das politicas da rede.
- EAS Build para APK exige internet, login Expo e upload do projeto mobile para a Expo.

## 9. Proxima fase recomendada

### Fase 1 - Validacao do nucleo mental

Prioridade imediata:

1. Testar cadastro, login e onboarding no celular.
2. Fazer check-in real.
3. Validar se a recomendacao leva aos exercicios certos.
4. Abrir e completar Respiracao 4-4-6.
5. Abrir e completar Pausa sem tela.
6. Validar historico e perfil.

### Fase 2 - Polimento de UX

Depois da validacao inicial:

- revisar contraste e tipografia;
- ajustar textos da landing para ansiedade/telas;
- reduzir ainda mais ruidos visuais;
- criar imagens dos dois exercicios principais;
- melhorar feedback de conclusao de exercicio.

### Fase 3 - Mobile e distribuicao

Depois do fluxo estar validado:

- preparar EAS Build;
- definir package Android;
- gerar APK de teste;
- avaliar deploy web em HTTPS;
- configurar URL padrao da WebView para ambiente publicado.

### Fase 4 - Retomada de expansoes

Somente depois do nucleo validado:

- Corpo & Movimento avancado;
- biblioteca ampliada;
- B2B comercial;
- parceiros;
- dashboards empresariais;
- relatorios;
- monetizacao.

## 10. Criterios de aceite da fase atual

A fase atual pode ser considerada bem-sucedida quando:

- um usuario consegue criar conta pelo celular;
- consegue passar pelo onboarding;
- consegue fazer check-in;
- entende a recomendacao recebida;
- acessa um exercicio de ansiedade ou telas;
- completa a pratica;
- encontra seu historico;
- nao se depara com B2B, admin, parceiros ou treino fisico no fluxo principal;
- o app nao apresenta linguagem clinica, diagnostica ou promessa de cura.

## 11. Conclusao

O Pausa AI esta em um ponto importante de maturidade: a base tecnica e ampla, mas a melhor decisao de produto agora e concentrar a experiencia em um nucleo menor, mais compreensivel e mais testavel.

A fase atual deve validar se o usuario percebe valor em uma promessa simples:

Fazer uma pausa guiada para lidar melhor com ansiedade do dia a dia e sobrecarga por telas.

Se esse nucleo funcionar bem, as demais camadas do projeto podem voltar com mais seguranca, sem comprometer a clareza do MVP.
