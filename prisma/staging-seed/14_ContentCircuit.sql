-- FK-safe import: categoryId is resolved from ContentCategory.slug in the target database.

INSERT INTO "public"."ContentCircuit" ("id", "slug", "title", "objective", "difficulty", "level", "durationSeconds", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt", "categoryId")
SELECT 'cmuo2ptlg00yp2guc7nerg9au', 'mind-respiracao-essenciais', 'Respiração: essenciais', 'Práticas respiratórias guiadas.', 'ADAPTIVE', 1, 180, 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:20:32.404Z', '2026-09-30T12:20:32.404Z', c."id"
FROM "public"."ContentCategory" c WHERE c."slug" = 'mind-respiracao'
ON CONFLICT DO NOTHING;

INSERT INTO "public"."ContentCircuit" ("id", "slug", "title", "objective", "difficulty", "level", "durationSeconds", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt", "categoryId")
SELECT 'cmuo2ptlu00yy2gucfyfz2lqf', 'mind-energia-essenciais', 'Energia: essenciais', 'Ativações breves para baixa disposição.', 'ADAPTIVE', 1, 180, 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:20:32.418Z', '2026-09-30T12:20:32.418Z', c."id"
FROM "public"."ContentCategory" c WHERE c."slug" = 'mind-energia'
ON CONFLICT DO NOTHING;

INSERT INTO "public"."ContentCircuit" ("id", "slug", "title", "objective", "difficulty", "level", "durationSeconds", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt", "categoryId")
SELECT 'cmuo2ptm500zb2guc3r4kxw4z', 'mind-estresse-e-irritacao-essenciais', 'Estresse e irritação: essenciais', 'Descarga segura de tensão e irritação.', 'ADAPTIVE', 3, 300, 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:20:32.430Z', '2026-09-30T12:20:32.430Z', c."id"
FROM "public"."ContentCategory" c WHERE c."slug" = 'mind-estresse-e-irritacao'
ON CONFLICT DO NOTHING;

INSERT INTO "public"."ContentCircuit" ("id", "slug", "title", "objective", "difficulty", "level", "durationSeconds", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt", "categoryId")
SELECT 'cmuo2ptmg00zo2gucfhha4ww8', 'mind-foco-essenciais', 'Foco: essenciais', 'Treinos de atenção e Modo Foco.', 'ADAPTIVE', 1, 120, 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:20:32.441Z', '2026-09-30T12:20:32.441Z', c."id"
FROM "public"."ContentCategory" c WHERE c."slug" = 'mind-foco'
ON CONFLICT DO NOTHING;

INSERT INTO "public"."ContentCircuit" ("id", "slug", "title", "objective", "difficulty", "level", "durationSeconds", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt", "categoryId")
SELECT 'cmuo2ptnc010r2guc2a07n1fm', 'mind-autoconhecimento-essenciais', 'Autoconhecimento: essenciais', 'Práticas de percepção e registro.', 'ADAPTIVE', 3, 300, 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:20:32.473Z', '2026-09-30T12:20:32.473Z', c."id"
FROM "public"."ContentCategory" c WHERE c."slug" = 'mind-autoconhecimento'
ON CONFLICT DO NOTHING;

INSERT INTO "public"."ContentCircuit" ("id", "slug", "title", "objective", "difficulty", "level", "durationSeconds", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt", "categoryId")
SELECT 'cmuo2ptnj010y2gucvoc9x3nj', 'mind-conexao-essenciais', 'Conexão: essenciais', 'Ações leves de vínculo e presença.', 'ADAPTIVE', 1, 120, 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:20:32.479Z', '2026-09-30T12:20:32.479Z', c."id"
FROM "public"."ContentCategory" c WHERE c."slug" = 'mind-conexao'
ON CONFLICT DO NOTHING;

INSERT INTO "public"."ContentCircuit" ("id", "slug", "title", "objective", "difficulty", "level", "durationSeconds", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt", "categoryId")
SELECT 'cmuo2ptnq01172gucqj5o1wp5', 'mind-presenca-essenciais', 'Presença: essenciais', 'Contato com corpo e ambiente.', 'ADAPTIVE', 1, 300, 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:20:32.487Z', '2026-09-30T12:20:32.487Z', c."id"
FROM "public"."ContentCategory" c WHERE c."slug" = 'mind-presenca'
ON CONFLICT DO NOTHING;

INSERT INTO "public"."ContentCircuit" ("id", "slug", "title", "objective", "difficulty", "level", "durationSeconds", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt", "categoryId")
SELECT 'cmuo2ptny011g2guc1bwtoary', 'mind-criatividade-essenciais', 'Criatividade: essenciais', 'Pausas criativas sem cobrança.', 'ADAPTIVE', 1, 600, 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:20:32.495Z', '2026-09-30T12:20:32.495Z', c."id"
FROM "public"."ContentCategory" c WHERE c."slug" = 'mind-criatividade'
ON CONFLICT DO NOTHING;

INSERT INTO "public"."ContentCircuit" ("id", "slug", "title", "objective", "difficulty", "level", "durationSeconds", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt", "categoryId")
SELECT 'cmuo2pto9011t2guc38qg03wf', 'mind-bem-estar-essenciais', 'Bem-estar: essenciais', 'Hábitos simples de bem-estar.', 'ADAPTIVE', 1, 300, 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:20:32.506Z', '2026-09-30T12:20:32.506Z', c."id"
FROM "public"."ContentCategory" c WHERE c."slug" = 'mind-bem-estar'
ON CONFLICT DO NOTHING;

INSERT INTO "public"."ContentCircuit" ("id", "slug", "title", "objective", "difficulty", "level", "durationSeconds", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt", "categoryId")
SELECT 'cmuo2ptoh01222gucddc5iyps', 'mind-mentalidade-essenciais', 'Mentalidade: essenciais', 'Reflexões para uma rotina mais gentil.', 'ADAPTIVE', 1, 300, 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:20:32.513Z', '2026-09-30T12:20:32.513Z', c."id"
FROM "public"."ContentCategory" c WHERE c."slug" = 'mind-mentalidade'
ON CONFLICT DO NOTHING;

INSERT INTO "public"."ContentCircuit" ("id", "slug", "title", "objective", "difficulty", "level", "durationSeconds", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt", "categoryId")
SELECT 'cmuo2ptop012b2guckusd3sq9', 'mind-organizacao-essenciais', 'Organização: essenciais', 'Organização gentil e clareza mental.', 'ADAPTIVE', 1, 300, 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:20:32.521Z', '2026-09-30T12:20:32.521Z', c."id"
FROM "public"."ContentCategory" c WHERE c."slug" = 'mind-organizacao'
ON CONFLICT DO NOTHING;

INSERT INTO "public"."ContentCircuit" ("id", "slug", "title", "objective", "difficulty", "level", "durationSeconds", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt", "categoryId")
SELECT 'cmuo2ptoy012m2gucwvir15b8', 'mind-relaxamento-essenciais', 'Relaxamento: essenciais', 'Pausas para reduzir carga e recuperar.', 'ADAPTIVE', 1, 120, 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:20:32.530Z', '2026-09-30T12:20:32.530Z', c."id"
FROM "public"."ContentCategory" c WHERE c."slug" = 'mind-relaxamento'
ON CONFLICT DO NOTHING;

INSERT INTO "public"."ContentCircuit" ("id", "slug", "title", "objective", "difficulty", "level", "durationSeconds", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt", "categoryId")
SELECT 'cmuo2ptpg01392guc2vwedmgm', 'mind-sono-desacelerar-essenciais', 'Sono: essenciais', 'Rotinas de desaceleração antes de dormir.', 'ADAPTIVE', 1, 300, 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:20:32.549Z', '2026-09-30T12:20:32.549Z', c."id"
FROM "public"."ContentCategory" c WHERE c."slug" = 'mind-sono-desacelerar'
ON CONFLICT DO NOTHING;

INSERT INTO "public"."ContentCircuit" ("id", "slug", "title", "objective", "difficulty", "level", "durationSeconds", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt", "categoryId")
SELECT 'cmuo2ptpt013o2gucjjdq63dg', 'mind-sono-despertar-essenciais', 'Despertar: essenciais', 'Ativações leves para sonolência diurna.', 'ADAPTIVE', 1, 60, 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:20:32.561Z', '2026-09-30T12:20:32.561Z', c."id"
FROM "public"."ContentCategory" c WHERE c."slug" = 'mind-sono-despertar'
ON CONFLICT DO NOTHING;

INSERT INTO "public"."ContentCircuit" ("id", "slug", "title", "objective", "difficulty", "level", "durationSeconds", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt", "categoryId")
SELECT 'cmuo2ptqe014d2guce4nfka28', 'mind-pausa-mental-essenciais', 'Pausa mental: essenciais', 'Recuperação curta durante o trabalho.', 'ADAPTIVE', 1, 60, 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:20:32.582Z', '2026-09-30T12:20:32.582Z', c."id"
FROM "public"."ContentCategory" c WHERE c."slug" = 'mind-pausa-mental'
ON CONFLICT DO NOTHING;

INSERT INTO "public"."ContentCircuit" ("id", "slug", "title", "objective", "difficulty", "level", "durationSeconds", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt", "categoryId")
SELECT 'cmuo2ptqq014s2guc412goygk', 'mind-ansiedade-essenciais', 'Ansiedade: essenciais', 'Escritas e pausas de aterramento.', 'ADAPTIVE', 1, 300, 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:20:32.595Z', '2026-09-30T12:20:32.595Z', c."id"
FROM "public"."ContentCategory" c WHERE c."slug" = 'mind-ansiedade'
ON CONFLICT DO NOTHING;

INSERT INTO "public"."ContentCircuit" ("id", "slug", "title", "objective", "difficulty", "level", "durationSeconds", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt", "categoryId")
SELECT 'cmuo2ptr9015f2gucolbpyukw', 'body-fitness-em-casa-essenciais', 'Fitness em casa: essenciais', 'Força e condicionamento sem equipamento obrigatório.', 'ADAPTIVE', 1, 300, 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:20:32.614Z', '2026-09-30T12:20:32.614Z', c."id"
FROM "public"."ContentCategory" c WHERE c."slug" = 'body-fitness-em-casa'
ON CONFLICT DO NOTHING;

INSERT INTO "public"."ContentCircuit" ("id", "slug", "title", "objective", "difficulty", "level", "durationSeconds", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt", "categoryId")
SELECT 'cmuo2pts9016i2gucetgi0cap', 'body-mobilidade-essenciais', 'Mobilidade: essenciais', 'Movimentos para amplitude e conforto corporal.', 'ADAPTIVE', 1, 90, 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:20:32.650Z', '2026-09-30T12:20:32.650Z', c."id"
FROM "public"."ContentCategory" c WHERE c."slug" = 'body-mobilidade'
ON CONFLICT DO NOTHING;

INSERT INTO "public"."ContentCircuit" ("id", "slug", "title", "objective", "difficulty", "level", "durationSeconds", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt", "categoryId")
SELECT 'cmuo2pttj01832gucuwrl9mf6', 'body-apoio-ao-sono-essenciais', 'Apoio ao sono: essenciais', 'Posições de descanso e conforto.', 'ADAPTIVE', 1, 600, 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:20:32.695Z', '2026-09-30T12:20:32.695Z', c."id"
FROM "public"."ContentCategory" c WHERE c."slug" = 'body-apoio-ao-sono'
ON CONFLICT DO NOTHING;

INSERT INTO "public"."ContentCircuit" ("id", "slug", "title", "objective", "difficulty", "level", "durationSeconds", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt", "categoryId")
SELECT 'cmuo2ptty018m2guctad0bmao', 'body-alongamento-essenciais', 'Alongamento: essenciais', 'Alongamentos progressivos por região.', 'ADAPTIVE', 1, 360, 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:20:32.711Z', '2026-09-30T12:20:32.711Z', c."id"
FROM "public"."ContentCategory" c WHERE c."slug" = 'body-alongamento'
ON CONFLICT DO NOTHING;

INSERT INTO "public"."ContentCircuit" ("id", "slug", "title", "objective", "difficulty", "level", "durationSeconds", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt", "categoryId")
SELECT 'cmuo2ptv1019x2guct1dd8kr2', 'body-yoga-essenciais', 'Yoga: essenciais', 'Posturas e sequências guiadas por nível.', 'ADAPTIVE', 1, 64, 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:20:32.749Z', '2026-09-30T12:20:32.749Z', c."id"
FROM "public"."ContentCategory" c WHERE c."slug" = 'body-yoga'
ON CONFLICT DO NOTHING;
