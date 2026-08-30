# Relatorio completo - Estrutura e fase do projeto Pausa AI

Data: 29/05/2026
Fase atual: MVP mobile-first de bem-estar mental preventivo, com retorno gradual de Corpo & Movimento leve
Status: Nucleo funcional validado localmente, preparado para QA em celular fisico e publicacao controlada

## 1. Visao geral

O Pausa AI esta concentrado em uma experiencia simples para testar com usuarios reais no celular:

- check-in rapido;
- leitura de bem-estar do dia;
- exercicios guiados;
- reducao de sobrecarga por telas;
- apoio preventivo para ansiedade do dia a dia;
- praticas por Foco, Energia, Sono, Felicidade e Corpo & Movimento leve.

O app segue 100% gratuito para uso individual e sem Premium B2C.

## 2. Posicionamento atual

Promessa da fase atual:

Ajudar a pessoa a fazer pequenas pausas guiadas para lidar melhor com foco baixo, excesso de telas, baixa energia, sono ruim, humor sensivel e tensao leve do corpo.

O produto nao deve ser comunicado como terapia, app clinico, diagnostico, promessa de cura ou substituto de atendimento profissional.

## 3. Fluxo principal ativo

Fluxo principal:

1. Landing page.
2. Cadastro.
3. Login.
4. Onboarding.
5. Dashboard.
6. Check-in.
7. Exercicios.
8. Corpo & Movimento leve com trilhas gratuitas.
9. Ficha detalhada do exercicio.
10. Historico.
11. Perfil.

Navegacao autenticada visivel:

- Hoje;
- Check-in;
- Exercicios;
- Movimento;
- Historico;
- Perfil.

Fora da navegacao principal:

- Beneficios;
- Insights;
- Empresas;
- Admin;
- parceiros;
- treinos fisicos avancados;
- integracoes externas.

## 4. Biblioteca atual de exercicios

A tela `/app/missoes` e a biblioteca principal. Ela possui cinco abas:

- Foco: 7 exercicios;
- Energia: 7 exercicios;
- Sono: 7 exercicios;
- Felicidade: 7 exercicios;
- Corpo & Movimento: hub visual gratuito com Yoga de bolso, mobilidade, alongamentos, caminhada e casa leve.

Total visivel no nucleo atual: biblioteca curada de exercicios mentais e corporais leves, com imagem propria para cada ficha instrucional cadastrada.

O banco tambem preserva a biblioteca cientifica mais ampla com 150 exercicios e rotas avancadas, mas o MVP mobile mostra apenas o conjunto curado.

## 5. Motor inteligente de check-in

O motor considera:

- score de foco;
- score de humor;
- score de estresse;
- score de energia;
- score de sono;
- tags manuais;
- temas detectados na observacao opcional;
- historico dos ultimos 3 check-ins;
- risco textual como prioridade maxima.

Regras importantes:

- tags manuais tem peso maior que tags detectadas;
- padroes recentes podem ajustar a prioridade;
- sono ruim recorrente pode priorizar Sono;
- cansaco e corpo tenso puxam Energia;
- sem vontade e desanimo puxam Felicidade;
- risco textual interrompe recomendacoes comuns e mostra mensagem de emergencia.

A IA, quando configurada, apenas reescreve o texto final; ela nao muda risco, area, tags ou exercicio escolhido pelo motor local.

## 6. Fichas instrucionais

Cada exercicio possui ficha em `/app/exercicios/[slug]` com:

- imagem;
- objetivo;
- duracao ou volume;
- como fazer;
- postura;
- respiracao;
- erros comuns;
- quando fazer;
- quando evitar;
- cuidados;
- modo rapido;
- modo completo;
- botao de conclusao fixo no mobile;
- fechamento pos-pratica com sugestao leve.

O timer de respiracao usa:

1. Inspirar por 4 segundos.
2. Segurar por 4 segundos.
3. Expirar por 6 segundos.

Tambem existe seletor de 3, 5 ou 8 ciclos e circulo colorido com tres fases.

## 7. Imagens e performance

As imagens do nucleo principal estao em `public/exercises/`.

Estado atual:

- todas as imagens dos exercicios instrucionais cadastrados existem em `public/exercises/`;
- imagens antigas grandes foram alvo de otimizacao;
- o componente de imagem continua com placeholder seguro caso algum arquivo falte.

## 8. Mobile e publicacao

O projeto possui app companion Expo em `mobile/`, com WebView para o app web.

Preparado:

- Expo Go para teste local;
- `mobile/eas.json`;
- package Android `com.pausaai.mobile`;
- assets mobile basicos;
- scripts `build:apk` e `build:android`;
- ponte web -> Expo para feedback nativo;
- abstracao nativa para haptics e notificacoes.

Ainda depende de ambiente externo:

- celular fisico para QA final;
- URL HTTPS publica para staging;
- conta Expo/EAS para APK;
- rede externa para build cloud;
- PostgreSQL antes de producao publica.

## 9. Areas preservadas

Continuam no projeto, mas fora da prioridade do usuario comum:

- B2B;
- landing de empresas;
- piloto empresarial;
- dashboard empresarial demo;
- admin de leads;
- parceiros;
- beneficios;
- insights;
- Corpo & Movimento avancado e modalidades de maior energia;
- treinos funcionais;
- monetizacao por videos.

## 10. Validacao esperada

Checklist no celular fisico:

1. Abrir Expo Go.
2. Configurar URL com IP da maquina ou URL HTTPS.
3. Criar conta.
4. Completar onboarding.
5. Fazer check-in.
6. Ver resultado personalizado.
7. Abrir Foco.
8. Abrir Energia.
9. Abrir Sono.
10. Abrir Felicidade.
11. Abrir Corpo & Movimento.
12. Abrir ficha.
13. Usar timer de respiracao.
14. Concluir pratica.
15. Conferir historico.
16. Conferir perfil.

## 11. Proximos passos

Prioridade imediata:

- QA real no celular;
- smoke tests do fluxo critico;
- staging HTTPS;
- APK interno via EAS;
- revisao LGPD operacional;
- piloto com 5 a 10 usuarios.

Depois do piloto:

- retomar B2B real;
- relatorio PDF;
- dashboard por empresa;
- integracoes externas;
- monetizacao por videos.
