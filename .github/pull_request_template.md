## Objetivo

Descreva a mudança e o problema real que ela resolve.

## Escopo

- [ ] Mudança limitada ao escopo declarado
- [ ] Sem exclusões/migrações irreversíveis não aprovadas
- [ ] Sem secrets, tokens, cookies, dados pessoais ou dados de bem-estar reais

## Evidências

Liste comandos, testes, screenshots ou documentos usados para validar a mudança.

## Quality gates

- [ ] `npm run typecheck`
- [ ] `npm run lint`
- [ ] `npx prisma validate` quando aplicável
- [ ] testes relevantes do `package.json`
- [ ] build quando aplicável

## Segurança e privacidade

- [ ] Entradas e autorização revisadas quando aplicável
- [ ] XSS/CSRF/injection/SSRF/path traversal avaliados quando aplicável
- [ ] Logs não expõem PII ou secrets
- [ ] Dados sintéticos usados em testes
- [ ] Impacto LGPD avaliado para check-ins, saúde, GPS, rotina, B2B ou autenticação

## Rollback

Explique como reverter a mudança com segurança.

## Riscos restantes

Liste riscos conhecidos e pendências. Não marque como concluído o que não foi verificado.
