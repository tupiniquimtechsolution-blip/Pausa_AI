# Security Policy

Este projeto segue `AGENTS.md` e o Tupiniquim Toolbox.

## Reporte responsável

**Não publique vulnerabilidades exploráveis, tokens, dumps, dados pessoais, históricos de bem-estar, textos reais de check-in, dados de saúde ou rotas GPS em issues públicas.**

Quando o GitHub Private Vulnerability Reporting/Security Advisories estiver disponível para o repositório, prefira esse canal. Caso contrário, contate o proprietário do repositório por um canal privado já estabelecido antes de compartilhar detalhes sensíveis.

Um relatório seguro deve incluir somente o mínimo necessário: área afetada, impacto, passos de reprodução com dados sintéticos e versão/commit. Não anexe credenciais, banco real ou dados de titulares.

## Dados e privacidade

- minimizar coleta e retenção;
- usar dados sintéticos em testes;
- proteger endpoints de autenticação, recuperação, admin e B2B contra abuso;
- manter consentimento, acesso, oposição/remoção e retenção coerentes com a finalidade;
- não expor segredos, stack traces ou dados pessoais em produção/logs;
- nunca expor respostas individuais de bem-estar/saúde no B2B;
- tratar check-ins, texto livre, GPS, Health Connect e métricas comportamentais como superfícies de alta sensibilidade;
- manter exportação/exclusão do titular auditável sem registrar payload sensível.

## Secrets e repositório público

Nunca versionar:

- `.env` real;
- passwords;
- tokens/API keys;
- cookies/session IDs;
- private keys;
- Authorization headers;
- connection strings com credenciais;
- dumps de banco ou exports privados de chats não sanitizados.

Use placeholders em `.env.example` e variáveis protegidas do provedor para ambientes externos.

## Segurança de aplicação

Ao alterar superfícies relevantes, revisar conforme aplicável:

- autenticação/autorização server-side;
- XSS e injeção de HTML;
- CSRF;
- SQL/command injection;
- SSRF;
- path traversal;
- upload/media paths;
- CORS, cookies, HTTPS e headers;
- rate limiting e abuso;
- logs/observabilidade sem PII;
- isolamento B2B e agregação mínima;
- revogação de sessão após eventos sensíveis.

## Testes e CI

Pentest somente em alvos próprios/autorizados e sem dados reais.

Pull requests devem executar os gates de CI aplicáveis. O projeto mantém, entre outros, typecheck, lint, validação Prisma, integridade de migração, hardening W8 e build. CodeQL e Dependabot são usados como camadas adicionais e não substituem revisão humana.

Falha de gate de segurança não deve ser ignorada sem análise documentada.

## Produção

Antes de produção pública, seguir `docs/PRODUCTION_READINESS_CHECKLIST.md` e `docs/LGPD_RELEASE_CHECKLIST.md`, incluindo PostgreSQL gerenciado, HTTPS, secret management, backup/restore, monitoramento, rollback, auditoria operacional e revisão jurídica/LGPD.

## Incidentes

Em caso de possível vazamento:

1. não copie o segredo ou dado sensível para issue/log adicional;
2. revogue/rotacione credenciais afetadas;
3. preserve evidências mínimas e sanitizadas;
4. avalie impacto e dados envolvidos;
5. aplique correção em branch/PR revisado;
6. documente prevenção e rollback;
7. trate obrigações legais/regulatórias com responsável qualificado quando aplicável.
