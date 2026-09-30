-- Generated from the canonical Pausa AI seed using a synthetic SQLite database.
-- Static/reference data only. No users, profiles, credentials, check-ins, GPS or health records.
-- Generic import uses ON CONFLICT DO NOTHING so existing natural-key rows are preserved.
-- Table: ContentCategory

INSERT INTO "public"."ContentCategory" ("id", "slug", "pillar", "title", "description", "modality", "locale", "status", "approvedAt", "version", "sortOrder", "createdAt", "updatedAt") VALUES
('cmuo2ptld00yn2gucp680rgf2', 'mind-respiracao', 'MIND', 'Respiração', 'Práticas respiratórias guiadas.', 'BREATHING', 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 20, '2026-09-30T12:20:32.402Z', '2026-09-30T12:20:32.402Z'),
('cmuo2ptls00yw2guc5s31afaa', 'mind-energia', 'MIND', 'Energia', 'Ativações breves para baixa disposição.', 'ENERGY', 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 70, '2026-09-30T12:20:32.416Z', '2026-09-30T12:20:32.416Z'),
('cmuo2ptm400z92guc90lz4506', 'mind-estresse-e-irritacao', 'MIND', 'Estresse e irritação', 'Descarga segura de tensão e irritação.', 'STRESS', 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 60, '2026-09-30T12:20:32.428Z', '2026-09-30T12:20:32.428Z'),
('cmuo2ptmf00zm2guchacp7958', 'mind-foco', 'MIND', 'Foco', 'Treinos de atenção e Modo Foco.', 'FOCUS_MODE', 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:20:32.439Z', '2026-09-30T12:20:32.439Z'),
('cmuo2ptnb010p2gucorzex44j', 'mind-autoconhecimento', 'MIND', 'Autoconhecimento', 'Práticas de percepção e registro.', 'MEDITATION', 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 110, '2026-09-30T12:20:32.471Z', '2026-09-30T12:20:32.471Z'),
('cmuo2ptnh010w2guccjt5ot3a', 'mind-conexao', 'MIND', 'Conexão', 'Ações leves de vínculo e presença.', 'MEDITATION', 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 120, '2026-09-30T12:20:32.478Z', '2026-09-30T12:20:32.478Z'),
('cmuo2ptnp01152gucop02916a', 'mind-presenca', 'MIND', 'Presença', 'Contato com corpo e ambiente.', 'MEDITATION', 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 130, '2026-09-30T12:20:32.485Z', '2026-09-30T12:20:32.485Z'),
('cmuo2ptnx011e2guc4gl4myuq', 'mind-criatividade', 'MIND', 'Criatividade', 'Pausas criativas sem cobrança.', 'MEDITATION', 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 140, '2026-09-30T12:20:32.493Z', '2026-09-30T12:20:32.493Z'),
('cmuo2pto8011r2gucr9b29qcb', 'mind-bem-estar', 'MIND', 'Bem-estar', 'Hábitos simples de bem-estar.', 'MEDITATION', 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 150, '2026-09-30T12:20:32.504Z', '2026-09-30T12:20:32.504Z'),
('cmuo2ptog01202guci9egfr50', 'mind-mentalidade', 'MIND', 'Mentalidade', 'Reflexões para uma rotina mais gentil.', 'MEDITATION', 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 160, '2026-09-30T12:20:32.512Z', '2026-09-30T12:20:32.512Z'),
('cmuo2pton01292gucfgq6gsk8', 'mind-organizacao', 'MIND', 'Organização', 'Organização gentil e clareza mental.', 'FOCUS_MODE', 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 90, '2026-09-30T12:20:32.520Z', '2026-09-30T12:20:32.520Z'),
('cmuo2ptow012k2guctqlxjyap', 'mind-relaxamento', 'MIND', 'Relaxamento', 'Pausas para reduzir carga e recuperar.', 'RELAXATION', 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 30, '2026-09-30T12:20:32.529Z', '2026-09-30T12:20:32.529Z'),
('cmuo2ptpf01372guc38ohengc', 'mind-sono-desacelerar', 'MIND', 'Sono', 'Rotinas de desaceleração antes de dormir.', 'SLEEP', 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 40, '2026-09-30T12:20:32.547Z', '2026-09-30T12:20:32.547Z'),
('cmuo2ptpr013m2gucc0yk8eoa', 'mind-sono-despertar', 'MIND', 'Despertar', 'Ativações leves para sonolência diurna.', 'SLEEP', 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 50, '2026-09-30T12:20:32.560Z', '2026-09-30T12:20:32.560Z'),
('cmuo2ptqc014b2gucuw4ukqtr', 'mind-pausa-mental', 'MIND', 'Pausa mental', 'Recuperação curta durante o trabalho.', 'MEDITATION', 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 100, '2026-09-30T12:20:32.581Z', '2026-09-30T12:20:32.581Z'),
('cmuo2ptqp014q2gucl9jvb2gn', 'mind-ansiedade', 'MIND', 'Ansiedade', 'Escritas e pausas de aterramento.', 'ANXIETY', 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 80, '2026-09-30T12:20:32.593Z', '2026-09-30T12:20:32.593Z'),
('cmuo2ptr8015d2gucwxgpb41m', 'body-fitness-em-casa', 'BODY', 'Fitness em casa', 'Força e condicionamento sem equipamento obrigatório.', 'FITNESS', 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 40, '2026-09-30T12:20:32.612Z', '2026-09-30T12:20:32.612Z'),
('cmuo2pts8016g2guc1fkrbavu', 'body-mobilidade', 'BODY', 'Mobilidade', 'Movimentos para amplitude e conforto corporal.', 'MOBILITY', 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 20, '2026-09-30T12:20:32.648Z', '2026-09-30T12:20:32.648Z'),
('cmuo2ptti01812guchvfwqoti', 'body-apoio-ao-sono', 'BODY', 'Apoio ao sono', 'Posições de descanso e conforto.', 'PILATES', 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 100, '2026-09-30T12:20:32.694Z', '2026-09-30T12:20:32.694Z'),
('cmuo2pttx018k2gucrc4r0c60', 'body-alongamento', 'BODY', 'Alongamento', 'Alongamentos progressivos por região.', 'STRETCHING', 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 30, '2026-09-30T12:20:32.710Z', '2026-09-30T12:20:32.710Z'),
('cmuo2ptuz019v2guciy5ieyk0', 'body-yoga', 'BODY', 'Yoga', 'Posturas e sequências guiadas por nível.', 'YOGA', 'pt-BR', 'APPROVED', '2026-07-25T12:00:00.000Z', 1, 10, '2026-09-30T12:20:32.748Z', '2026-09-30T12:20:32.748Z')
ON CONFLICT DO NOTHING;
