-- FK-safe import: categoryId is resolved from ContentCategory.slug in the target database.

INSERT INTO "public"."ContentCircuit" ("id", "slug", "title", "objective", "difficulty", "level", "durationSeconds", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt", "categoryId")
SELECT 'cmuo32cbm00yp2gv0t66dryk0', 'mind-respiracao-essenciais', 'Respiração: essenciais', 'Práticas respiratórias guiadas.', 'ADAPTIVE', 1, 180, 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:30:16.546Z', '2026-09-30T12:30:16.546Z', c."id"
FROM "public"."ContentCategory" c WHERE c."slug" = 'mind-respiracao'
ON CONFLICT DO NOTHING;

INSERT INTO "public"."ContentCircuit" ("id", "slug", "title", "objective", "difficulty", "level", "durationSeconds", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt", "categoryId")
SELECT 'cmuo32cbt00yy2gv0ccy4vko6', 'mind-energia-essenciais', 'Energia: essenciais', 'Ativações breves para baixa disposição.', 'ADAPTIVE', 1, 180, 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:30:16.554Z', '2026-09-30T12:30:16.554Z', c."id"
FROM "public"."ContentCategory" c WHERE c."slug" = 'mind-energia'
ON CONFLICT DO NOTHING;

INSERT INTO "public"."ContentCircuit" ("id", "slug", "title", "objective", "difficulty", "level", "durationSeconds", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt", "categoryId")
SELECT 'cmuo32cc300zb2gv06kxwo956', 'mind-estresse-e-irritacao-essenciais', 'Estresse e irritação: essenciais', 'Descarga segura de tensão e irritação.', 'ADAPTIVE', 3, 300, 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:30:16.563Z', '2026-09-30T12:30:16.563Z', c."id"
FROM "public"."ContentCategory" c WHERE c."slug" = 'mind-estresse-e-irritacao'
ON CONFLICT DO NOTHING;

INSERT INTO "public"."ContentCircuit" ("id", "slug", "title", "objective", "difficulty", "level", "durationSeconds", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt", "categoryId")
SELECT 'cmuo32cch00zo2gv0q6jlk7wj', 'mind-foco-essenciais', 'Foco: essenciais', 'Treinos de atenção e Modo Foco.', 'ADAPTIVE', 1, 120, 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:30:16.578Z', '2026-09-30T12:30:16.578Z', c."id"
FROM "public"."ContentCategory" c WHERE c."slug" = 'mind-foco'
ON CONFLICT DO NOTHING;

INSERT INTO "public"."ContentCircuit" ("id", "slug", "title", "objective", "difficulty", "level", "durationSeconds", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt", "categoryId")
SELECT 'cmuo32cd8010r2gv0izajfq07', 'mind-autoconhecimento-essenciais', 'Autoconhecimento: essenciais', 'Práticas de percepção e registro.', 'ADAPTIVE', 3, 300, 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:30:16.605Z', '2026-09-30T12:30:16.605Z', c."id"
FROM "public"."ContentCategory" c WHERE c."slug" = 'mind-autoconhecimento'
ON CONFLICT DO NOTHING;

INSERT INTO "public"."ContentCircuit" ("id", "slug", "title", "objective", "difficulty", "level", "durationSeconds", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt", "categoryId")
SELECT 'cmuo32cde010y2gv00sglhmzp', 'mind-conexao-essenciais', 'Conexão: essenciais', 'Ações leves de vínculo e presença.', 'ADAPTIVE', 1, 120, 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:30:16.610Z', '2026-09-30T12:30:16.610Z', c."id"
FROM "public"."ContentCategory" c WHERE c."slug" = 'mind-conexao'
ON CONFLICT DO NOTHING;

INSERT INTO "public"."ContentCircuit" ("id", "slug", "title", "objective", "difficulty", "level", "durationSeconds", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt", "categoryId")
SELECT 'cmuo32cdk01172gv0zfg9rnjw', 'mind-presenca-essenciais', 'Presença: essenciais', 'Contato com corpo e ambiente.', 'ADAPTIVE', 1, 300, 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:30:16.617Z', '2026-09-30T12:30:16.617Z', c."id"
FROM "public"."ContentCategory" c WHERE c."slug" = 'mind-presenca'
ON CONFLICT DO NOTHING;

INSERT INTO "public"."ContentCircuit" ("id", "slug", "title", "objective", "difficulty", "level", "durationSeconds", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt", "categoryId")
SELECT 'cmuo32cdr011g2gv0kvb9o5j7', 'mind-criatividade-essenciais', 'Criatividade: essenciais', 'Pausas criativas sem cobrança.', 'ADAPTIVE', 1, 600, 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:30:16.623Z', '2026-09-30T12:30:16.623Z', c."id"
FROM "public"."ContentCategory" c WHERE c."slug" = 'mind-criatividade'
ON CONFLICT DO NOTHING;

INSERT INTO "public"."ContentCircuit" ("id", "slug", "title", "objective", "difficulty", "level", "durationSeconds", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt", "categoryId")
SELECT 'cmuo32ce0011t2gv0f7pk4rzg', 'mind-bem-estar-essenciais', 'Bem-estar: essenciais', 'Hábitos simples de bem-estar.', 'ADAPTIVE', 1, 300, 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:30:16.633Z', '2026-09-30T12:30:16.633Z', c."id"
FROM "public"."ContentCategory" c WHERE c."slug" = 'mind-bem-estar'
ON CONFLICT DO NOTHING;

INSERT INTO "public"."ContentCircuit" ("id", "slug", "title", "objective", "difficulty", "level", "durationSeconds", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt", "categoryId")
SELECT 'cmuo32ce701222gv0rne5tkz9', 'mind-mentalidade-essenciais', 'Mentalidade: essenciais', 'Reflexões para uma rotina mais gentil.', 'ADAPTIVE', 1, 300, 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:30:16.639Z', '2026-09-30T12:30:16.639Z', c."id"
FROM "public"."ContentCategory" c WHERE c."slug" = 'mind-mentalidade'
ON CONFLICT DO NOTHING;

INSERT INTO "public"."ContentCircuit" ("id", "slug", "title", "objective", "difficulty", "level", "durationSeconds", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt", "categoryId")
SELECT 'cmuo32ced012b2gv0ll7yz1ig', 'mind-organizacao-essenciais', 'Organização: essenciais', 'Organização gentil e clareza mental.', 'ADAPTIVE', 1, 300, 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:30:16.646Z', '2026-09-30T12:30:16.646Z', c."id"
FROM "public"."ContentCategory" c WHERE c."slug" = 'mind-organizacao'
ON CONFLICT DO NOTHING;

INSERT INTO "public"."ContentCircuit" ("id", "slug", "title", "objective", "difficulty", "level", "durationSeconds", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt", "categoryId")
SELECT 'cmuo32cel012m2gv0nuxc2m8n', 'mind-relaxamento-essenciais', 'Relaxamento: essenciais', 'Pausas para reduzir carga e recuperar.', 'ADAPTIVE', 1, 120, 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:30:16.654Z', '2026-09-30T12:30:16.654Z', c."id"
FROM "public"."ContentCategory" c WHERE c."slug" = 'mind-relaxamento'
ON CONFLICT DO NOTHING;

INSERT INTO "public"."ContentCircuit" ("id", "slug", "title", "objective", "difficulty", "level", "durationSeconds", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt", "categoryId")
SELECT 'cmuo32cf101392gv0uid1gjyp', 'mind-sono-desacelerar-essenciais', 'Sono: essenciais', 'Rotinas de desaceleração antes de dormir.', 'ADAPTIVE', 1, 300, 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:30:16.670Z', '2026-09-30T12:30:16.670Z', c."id"
FROM "public"."ContentCategory" c WHERE c."slug" = 'mind-sono-desacelerar'
ON CONFLICT DO NOTHING;

INSERT INTO "public"."ContentCircuit" ("id", "slug", "title", "objective", "difficulty", "level", "durationSeconds", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt", "categoryId")
SELECT 'cmuo32cfc013o2gv0ngn6pg19', 'mind-sono-despertar-essenciais', 'Despertar: essenciais', 'Ativações leves para sonolência diurna.', 'ADAPTIVE', 1, 60, 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:30:16.680Z', '2026-09-30T12:30:16.680Z', c."id"
FROM "public"."ContentCategory" c WHERE c."slug" = 'mind-sono-despertar'
ON CONFLICT DO NOTHING;

INSERT INTO "public"."ContentCircuit" ("id", "slug", "title", "objective", "difficulty", "level", "durationSeconds", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt", "categoryId")
SELECT 'cmuo32cfu014d2gv0wt70idv4', 'mind-pausa-mental-essenciais', 'Pausa mental: essenciais', 'Recuperação curta durante o trabalho.', 'ADAPTIVE', 1, 60, 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:30:16.698Z', '2026-09-30T12:30:16.698Z', c."id"
FROM "public"."ContentCategory" c WHERE c."slug" = 'mind-pausa-mental'
ON CONFLICT DO NOTHING;

INSERT INTO "public"."ContentCircuit" ("id", "slug", "title", "objective", "difficulty", "level", "durationSeconds", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt", "categoryId")
SELECT 'cmuo32cg6014s2gv0rkq5jn6r', 'mind-ansiedade-essenciais', 'Ansiedade: essenciais', 'Escritas e pausas de aterramento.', 'ADAPTIVE', 1, 300, 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:30:16.710Z', '2026-09-30T12:30:16.710Z', c."id"
FROM "public"."ContentCategory" c WHERE c."slug" = 'mind-ansiedade'
ON CONFLICT DO NOTHING;

INSERT INTO "public"."ContentCircuit" ("id", "slug", "title", "objective", "difficulty", "level", "durationSeconds", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt", "categoryId")
SELECT 'cmuo32cgo015f2gv00e3ub4ok', 'body-fitness-em-casa-essenciais', 'Fitness em casa: essenciais', 'Força e condicionamento sem equipamento obrigatório.', 'ADAPTIVE', 1, 300, 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:30:16.728Z', '2026-09-30T12:30:16.728Z', c."id"
FROM "public"."ContentCategory" c WHERE c."slug" = 'body-fitness-em-casa'
ON CONFLICT DO NOTHING;

INSERT INTO "public"."ContentCircuit" ("id", "slug", "title", "objective", "difficulty", "level", "durationSeconds", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt", "categoryId")
SELECT 'cmuo32chi016i2gv0syv3t06r', 'body-mobilidade-essenciais', 'Mobilidade: essenciais', 'Movimentos para amplitude e conforto corporal.', 'ADAPTIVE', 1, 90, 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:30:16.758Z', '2026-09-30T12:30:16.758Z', c."id"
FROM "public"."ContentCategory" c WHERE c."slug" = 'body-mobilidade'
ON CONFLICT DO NOTHING;

INSERT INTO "public"."ContentCircuit" ("id", "slug", "title", "objective", "difficulty", "level", "durationSeconds", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt", "categoryId")
SELECT 'cmuo32cix01832gv0z9th5rq0', 'body-apoio-ao-sono-essenciais', 'Apoio ao sono: essenciais', 'Posições de descanso e conforto.', 'ADAPTIVE', 1, 600, 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:30:16.809Z', '2026-09-30T12:30:16.809Z', c."id"
FROM "public"."ContentCategory" c WHERE c."slug" = 'body-apoio-ao-sono'
ON CONFLICT DO NOTHING;

INSERT INTO "public"."ContentCircuit" ("id", "slug", "title", "objective", "difficulty", "level", "durationSeconds", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt", "categoryId")
SELECT 'cmuo32cjc018m2gv0sfgbnksh', 'body-alongamento-essenciais', 'Alongamento: essenciais', 'Alongamentos progressivos por região.', 'ADAPTIVE', 1, 360, 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:30:16.824Z', '2026-09-30T12:30:16.824Z', c."id"
FROM "public"."ContentCategory" c WHERE c."slug" = 'body-alongamento'
ON CONFLICT DO NOTHING;

INSERT INTO "public"."ContentCircuit" ("id", "slug", "title", "objective", "difficulty", "level", "durationSeconds", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt", "categoryId")
SELECT 'cmuo32ckb019x2gv0e0bfgosq', 'body-yoga-essenciais', 'Yoga: essenciais', 'Posturas e sequências guiadas por nível.', 'ADAPTIVE', 1, 64, 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:30:16.859Z', '2026-09-30T12:30:16.859Z', c."id"
FROM "public"."ContentCategory" c WHERE c."slug" = 'body-yoga'
ON CONFLICT DO NOTHING;
