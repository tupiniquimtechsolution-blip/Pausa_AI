# W8 — Hardening, privacidade, acessibilidade e recuperação

Data de fechamento técnico: 26/07/2026  
Decisão: **GO para montagem da RC W9; NO-GO para produção enquanto as dependências externas listadas não forem concluídas**

## Segurança

- sessões JWT passaram a usar emissor, audiência, `jti` e `sessionVersion`;
- redefinir a senha incrementa `sessionVersion` e revoga todas as sessões anteriores;
- cookies continuam `httpOnly`, `sameSite=lax`, `secure` em produção e com validade explícita;
- login e recuperação de senha usam `RateLimitBucket` persistente, com chave irreversível e janela registrada no banco;
- redirects e links de recuperação usam `APP_BASE_URL`, sem confiar em `x-forwarded-host`;
- todas as respostas recebem CSP, `nosniff`, `DENY`, política de referência, política de permissões e COOP; HSTS entra no runtime de produção;
- cadastro administrativo de mídia aceita somente arquivo físico dentro de `public`, com tamanho limitado, extensão coerente com MIME e SHA-256 idêntico ao declarado;
- logs estruturados continuam removendo senha, segredo, token, cookie, texto de saúde e coordenadas;
- `/api/system/health` verifica disponibilidade do banco sem devolver segredo ou dado pessoal;
- staging/produção exigem `RATE_LIMIT_PEPPER`, `RELEASE_VERSION`, HTTPS, cookie seguro e segredos fortes no gate de configuração.

Migration: `20260726070000_w8_hardening`.

## LGPD e privacidade

- `GET /api/data-vault/subject-request` exporta dados legíveis por categoria, sem `passwordHash` ou token de recuperação;
- `DELETE /api/data-vault/subject-request` exige a frase `EXCLUIR MINHA CONTA`, aplica rate limit, apaga em cascata e anonimiza auditoria residual;
- consentimentos continuam granulares por `scope`, `sourceKind`, status e retenção;
- `privacy:retention:dry-run` calcula candidatos sem mutar dados;
- `privacy:retention:apply` remove tokens/rate limits expirados, auditoria além da retenção e dados de saúde além da política consentida;
- campanhas rejeitam query/hash no deep link e templates com identificadores de usuário, check-in, diagnóstico, saúde ou localização;
- share cards permanecem privados por padrão e sem autopublicação.

## Acessibilidade

O gate automatizado comprova:

- foco visível global;
- controles-base com alvo mínimo de 44 px;
- respeito a `prefers-reduced-motion`;
- unidades escaláveis para texto;
- contraste WCAG AA de texto, texto secundário e ação principal nos nove temas governados;
- alternativa textual, transcrição e legenda obrigatórias no ciclo editorial de mídia.

Validação com leitores de tela e aparelhos físicos permanece externa, sem simulação.

## Desempenho e confiabilidade

- índices já cobrem filas, auditoria, agendamento, decisões, atividades, consentimentos, mídia e rate limit;
- jobs usam deduplicação/idempotência pelo `OutboxEvent.dedupeKey`, tokens de conclusão e chaves compostas;
- modo offline/fila de sincronização e fallback sem GPS continuam cobertos pelas ondas W2, W3 e W6;
- mídia só publica depois da existência física, licença e aprovações;
- healthcheck, correlation ID e logs estruturados formam o baseline de monitoramento;
- o ensaio de banco executou as nove migrations em banco vazio e validou uma cópia representativa.

## Evidência de backup, restauração e rollback

Comando: `npm run test:w8:database`.

Resultado do ensaio isolado:

```json
{
  "migrationCount": 9,
  "representativeTables": 85,
  "representativeRows": 1937,
  "backupHash": "cad96283ba04ac2e67c4854cfc54bcd17926a361dae2b03bafecd3c7cf34ee2f",
  "restoredHash": "cad96283ba04ac2e67c4854cfc54bcd17926a361dae2b03bafecd3c7cf34ee2f",
  "freshIntegrity": "ok",
  "foreignKeyIssues": 0
}
```

O script copia o banco, gera backup, altera somente uma cópia, restaura, compara SHA-256 e contagens, aplica todas as migrations em banco vazio e remove os artefatos temporários. O banco de origem não é alterado pelo ensaio.

## Gates executados

```text
npm run typecheck
npm run lint -- --quiet
npm run test:w4
npm run test:w5
npm run test:w6
npm run test:w7
npm run test:w8
npm run privacy:retention:dry-run
npm run test:w8:database
npm audit --omit=dev --audit-level=critical --offline
```

O cache local do audit reportou `0 vulnerabilities`. Duas tentativas online falharam porque o endpoint oficial retornou corpo compactado inválido; portanto, a verificação online não foi declarada como aprovada.

## Dependências externas formais

| ID | Prioridade | Dependência | Critério de fechamento |
| --- | --- | --- | --- |
| P1-EXT-001 | P1 | `npm audit` online indisponível durante o gate | repetir online e anexar JSON sem vulnerabilidade crítica |
| P1-EXT-002 | P1 | matriz em aparelhos reais, VoiceOver/TalkBack e redes degradadas | evidência assinada por aparelho/SO |
| P1-EXT-003 | P1 | staging PostgreSQL/infra/segredos não fornecidos | dry-run e deploy de migrations em cópia representativa de staging |
| P1-EXT-004 | P1 | revisão jurídica de LGPD, termos, direitos e textos de saúde | aprovação formal de Jurídico/Privacidade |

Nenhuma vulnerabilidade crítica conhecida, regressão P0, perda de dados, falha de migration ou contraste inválido permaneceu no gate local.

## Rollback

1. desativar entrada de tráfego;
2. restaurar o backup feito imediatamente antes da release;
3. reverter o commit W8;
4. validar integridade, chaves estrangeiras e contagens;
5. reativar a versão anterior somente após smoke autenticado.

Não há rollback destrutivo por SQL automático. A restauração do backup é o procedimento oficial para a alteração aditiva de `User` e `RateLimitBucket`.
