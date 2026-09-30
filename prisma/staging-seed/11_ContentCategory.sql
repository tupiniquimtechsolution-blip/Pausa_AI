-- Generated from the canonical Pausa AI seed using a synthetic SQLite database.
-- Static/reference data only. No users, profiles, credentials, check-ins, GPS or health records.
-- Generic import uses ON CONFLICT DO NOTHING so existing natural-key rows are preserved.
-- Table: ContentCategory

INSERT INTO "public"."ContentCategory" ("id", "slug", "pillar", "title", "description", "modality", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt") VALUES
('cmuo32cbk00yn2gv0qbso7lb2', 'mind-respiracao', 'MIND', 'Respiração', 'Práticas respiratórias guiadas.', 'BREATHING', 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 20, '2026-09-30T12:30:16.544Z', '2026-09-30T12:30:16.544Z'),
('cmuo32cbs00yw2gv0i6h25gaw', 'mind-energia', 'MIND', 'Energia', 'Ativações breves para baixa disposição.', 'ENERGY', 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 70, '2026-09-30T12:30:16.553Z', '2026-09-30T12:30:16.553Z'),
('cmuo32cc200z92gv0ktl4wb89', 'mind-estresse-e-irritacao', 'MIND', 'Estresse e irritação', 'Descarga segura de tensão e irritação.', 'STRESS', 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 60, '2026-09-30T12:30:16.562Z', '2026-09-30T12:30:16.562Z'),
('cmuo32ccg00zm2gv07b8clt3y', 'mind-foco', 'MIND', 'Foco', 'Treinos de atenção e Modo Foco.', 'FOCUS_MODE', 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:30:16.577Z', '2026-09-30T12:30:16.577Z'),
('cmuo32cd7010p2gv0kr56n7mg', 'mind-autoconhecimento', 'MIND', 'Autoconhecimento', 'Práticas de percepção e registro.', 'MEDITATION', 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 110, '2026-09-30T12:30:16.603Z', '2026-09-30T12:30:16.603Z'),
('cmuo32cdd010w2gv0u9qltzcj', 'mind-conexao', 'MIND', 'Conexão', 'Ações leves de vínculo e presença.', 'MEDITATION', 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 120, '2026-09-30T12:30:16.609Z', '2026-09-30T12:30:16.609Z'),
('cmuo32cdj01152gv09rjegdh2', 'mind-presenca', 'MIND', 'Presença', 'Contato com corpo e ambiente.', 'MEDITATION', 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 130, '2026-09-30T12:30:16.616Z', '2026-09-30T12:30:16.616Z'),
('cmuo32cdq011e2gv032ywyyyy', 'mind-criatividade', 'MIND', 'Criatividade', 'Pausas criativas sem cobrança.', 'MEDITATION', 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 140, '2026-09-30T12:30:16.622Z', '2026-09-30T12:30:16.622Z'),
('cmuo32cdz011r2gv0r9d96hog', 'mind-bem-estar', 'MIND', 'Bem-estar', 'Hábitos simples de bem-estar.', 'MEDITATION', 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 150, '2026-09-30T12:30:16.632Z', '2026-09-30T12:30:16.632Z'),
('cmuo32ce601202gv0ypnn8qn3', 'mind-mentalidade', 'MIND', 'Mentalidade', 'Reflexões para uma rotina mais gentil.', 'MEDITATION', 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 160, '2026-09-30T12:30:16.638Z', '2026-09-30T12:30:16.638Z'),
('cmuo32cec01292gv0hhjuculw', 'mind-organizacao', 'MIND', 'Organização', 'Organização gentil e clareza mental.', 'FOCUS_MODE', 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 90, '2026-09-30T12:30:16.645Z', '2026-09-30T12:30:16.645Z'),
('cmuo32cek012k2gv0n2o5amfj', 'mind-relaxamento', 'MIND', 'Relaxamento', 'Pausas para reduzir carga e recuperar.', 'RELAXATION', 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 30, '2026-09-30T12:30:16.653Z', '2026-09-30T12:30:16.653Z'),
('cmuo32cf001372gv0ljhoacph', 'mind-sono-desacelerar', 'MIND', 'Sono', 'Rotinas de desaceleração antes de dormir.', 'SLEEP', 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 40, '2026-09-30T12:30:16.669Z', '2026-09-30T12:30:16.669Z'),
('cmuo32cfb013m2gv06as6073y', 'mind-sono-despertar', 'MIND', 'Despertar', 'Ativações leves para sonolência diurna.', 'SLEEP', 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 50, '2026-09-30T12:30:16.679Z', '2026-09-30T12:30:16.679Z'),
('cmuo32cfs014b2gv0w11p13i8', 'mind-pausa-mental', 'MIND', 'Pausa mental', 'Recuperação curta durante o trabalho.', 'MEDITATION', 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 100, '2026-09-30T12:30:16.697Z', '2026-09-30T12:30:16.697Z'),
('cmuo32cg4014q2gv0d3998l0r', 'mind-ansiedade', 'MIND', 'Ansiedade', 'Escritas e pausas de aterramento.', 'ANXIETY', 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 80, '2026-09-30T12:30:16.709Z', '2026-09-30T12:30:16.709Z'),
('cmuo32cgn015d2gv0yi8slobh', 'body-fitness-em-casa', 'BODY', 'Fitness em casa', 'Força e condicionamento sem equipamento obrigatório.', 'FITNESS', 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 40, '2026-09-30T12:30:16.727Z', '2026-09-30T12:30:16.727Z'),
('cmuo32chh016g2gv0scpo5np5', 'body-mobilidade', 'BODY', 'Mobilidade', 'Movimentos para amplitude e conforto corporal.', 'MOBILITY', 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 20, '2026-09-30T12:30:16.757Z', '2026-09-30T12:30:16.757Z'),
('cmuo32civ01812gv05sxkq02k', 'body-apoio-ao-sono', 'BODY', 'Apoio ao sono', 'Posições de descanso e conforto.', 'PILATES', 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 100, '2026-09-30T12:30:16.808Z', '2026-09-30T12:30:16.808Z'),
('cmuo32cjb018k2gv0w5s1p1en', 'body-alongamento', 'BODY', 'Alongamento', 'Alongamentos progressivos por região.', 'STRETCHING', 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 30, '2026-09-30T12:30:16.823Z', '2026-09-30T12:30:16.823Z'),
('cmuo32ck9019v2gv00m01erag', 'body-yoga', 'BODY', 'Yoga', 'Posturas e sequências guiadas por nível.', 'YOGA', 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:30:16.858Z', '2026-09-30T12:30:16.858Z')
ON CONFLICT DO NOTHING;
