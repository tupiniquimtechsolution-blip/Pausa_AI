# Changelog — Pausa AI 2026.07.25 RC1

Release candidate: `pausa-ai-2026.07.25-rc.1`
Data de consolidação: 26/07/2026
Estado: não implantada; sem merge, push, deploy ou ativação de produção

Gate local final: `npm run test:w9` aprovado em 23/23 etapas (940,2 s), incluindo build isolado com 122/122 unidades.

## Adicionado

- fundações de RBAC, feature flags, capacidades por plataforma, auditoria e outbox;
- nove temas oficiais, preferência do sistema e sete catálogos de idioma sob QA;
- cinco pilares: Progresso, Corpo, Mente, Rotina e Perfil;
- reservas de agenda concorrentes, política de notificações e Modo Foco persistente;
- bibliotecas governadas Corpo/Mente com Categoria → Circuito → Movimento;
- motor explicável de recomendação, feedback, notificações e resumo de Progresso;
- Pausa Activity, GPS, rotas, métricas, Health Profile, Device Connect e Data Vault;
- Biblioteca Mestre de Mídia, voz, áudio, vídeo, campanhas e share cards;
- exportação/exclusão do titular, retenção, healthcheck e rate limit persistente;
- gate automatizado de backup, restauração, rollback e migração em banco vazio.

## Alterado

- navegação e nomenclatura migradas para os cinco pilares, com aliases legados;
- página Corpo removendo instruções manuais que deveriam ser automáticas;
- recomendações agora registram fatores, versão, justificativa, alternativa e bloqueio;
- redefinição de senha revoga sessões anteriores;
- links públicos de autenticação usam `APP_BASE_URL`;
- cadastro de mídia valida arquivo, MIME, tamanho e SHA-256 antes de persistir;
- contraste secundário do tema Claro foi elevado ao nível AA;
- configuração de staging/produção exige segredo de rate limit e versão da release.

## Segurança e privacidade

- CSP e headers defensivos globais;
- cookies HTTP-only/secure, issuer/audience/JTI de sessão;
- chaves de rate limit armazenadas somente como hash;
- logs estruturados com redação de campos sensíveis;
- campaigns sem parâmetros ou templates com dados pessoais/saúde/localização;
- mídia e vídeo invisíveis sem licença, localização e aprovações;
- conta e dados exportáveis/elimináveis com auditoria residual anonimizada.

## Dados e migrations

1. `20260725160000_baseline`
2. `20260725192501_w1_foundations`
3. `20260725213000_w2_critical_stabilization`
4. `20260725230000_w3_navigation_rollout`
5. `20260726054409_w4_content_library`
6. `20260726055045_w5_adaptive_recommendations`
7. `20260726055827_w6_activity_data_vault`
8. `20260726060555_w7_media_governance`
9. `20260726070000_w8_hardening`

Todas são expansivas. Nenhuma tabela de negócio foi removida.

## Compatibilidade

- aliases de Movimento, Missões, Histórico, Yoga e Caminhada são preservados por um ciclo;
- sessões emitidas antes do novo contrato JWT podem exigir novo login;
- SQLite permanece apenas no ambiente local auditado;
- staging/produção PostgreSQL dependem do plano P1-EXT-003;
- flags de produção permanecem desligadas.

## Oculto, desligado ou externo

- vídeos não publicados;
- provedores externos de mídia;
- autopublicação social;
- monetização/cobrança;
- dashboard B2B real;
- idiomas diferentes de `pt-BR`;
- Device Connect real;
- voz em background uniforme;
- novos assets REF 018–038, que ainda passarão pela bateria de produção.

## Removido

Nenhuma remoção física de modelo/tabela. Foram retirados apenas blocos de UI manuais obsoletos e entradas antigas do menu principal, mantendo aliases de compatibilidade.

## Validação corretiva de 28/07/2026

- corrigida a navegação de login para preservar a origem atual em localhost e LAN;
- substituído o fluxo aprimorado por envio JSON, com e-mail preservado, senha limpa e mensagens específicas;
- mantido fallback HTML com redirecionamentos relativos;
- validada a recuperação MASTER em cópia isolada, sem alterar a senha real;
- migrados HUD, banners, navegação, cartões, botões, campos, badges, alertas e toast para tokens semânticos;
- adicionados contratos automáticos de contraste para os nove temas;
- gate W9 elevado a 25 etapas com regressão de autenticação e temas;
- gate final aprovado em 419,2 s, build 122/122, 9 migrations e restauração íntegra;
- auditoria online: 0 críticas e 3 altas; produção permanece em NO-GO.

Detalhes e evidências: `W9_VALIDACAO_CORRETIVA_POS_RC.md`.
