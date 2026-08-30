# Checklist de publicacao mobile e piloto

## Antes do teste com usuarios

- Rodar `npm run typecheck`.
- Rodar `npm run build`.
- Rodar `npm run test:smoke` com servidor local ativo.
- Rodar `npm run test:walking`.
- Rodar `npm run test:walking:auth` com servidor local ativo.
- Rodar `npm run test:mobile-gps`.
- Rodar `cd mobile && npm run typecheck`.
- Testar no celular via Expo Go.
- Na Caminhada Inteligente, abrir configuracao com GPS ligado e confirmar prompt de localizacao do WebView.
- Negar localizacao uma vez e confirmar fallback para temporizador.
- Permitir localizacao uma vez e confirmar que a rota aparece no mapa local simplificado.
- Confirmar que imagens das fichas carregam rapido.
- Confirmar que o timer de respiracao esta legivel.
- Confirmar que o botao de concluir fica acessivel no mobile.
- Confirmar que risco textual mostra mensagem de emergencia e nao recomenda pratica comum.

## Staging HTTPS

- Criar projeto web em Vercel ou provedor equivalente.
- Configurar `DATABASE_URL`, `JWT_SECRET`, `ADMIN_EMAIL`, `OPENAI_API_KEY`, `COOKIE_SECURE=true`.
- Usar PostgreSQL antes de abrir para usuarios fora do teste local.
- Rodar seed minimo em ambiente de staging.
- Validar cadastro, login, check-in e exercicios na URL HTTPS.

## APK interno

- Instalar EAS CLI.
- Fazer login Expo.
- Configurar URL HTTPS no app mobile.
- Rodar `cd mobile && npm run build:apk`.
- Instalar APK em celular Android de teste.
- Validar WebView, cookies, login persistente, haptics e notificacoes.
- Validar permissao de localizacao precisa/aproximada e atividade fisica no APK.
- Validar exportacao Health Connect de uma caminhada concluida quando o aparelho suportar.

## Piloto com 5 a 10 usuarios

- Criar formulario simples de feedback.
- Observar abandono no cadastro, onboarding, check-in e primeira ficha.
- Registrar textos confusos e exercicios mais usados.
- Ajustar antes de ampliar B2B, parceiros ou monetizacao.

## Pendencias propositalmente fora desta etapa

- Integracao real com pagamento.
- Monetizacao por videos.
- Dashboard B2B real.
- Relatorios PDF.
- Integracoes Wellhub/TotalPass/Spotify/Instagram.
- Exclusao automatica de conta e dados.
