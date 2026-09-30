-- Generated from the canonical Pausa AI seed using a synthetic SQLite database.
-- Static/reference data only. No users, profiles, credentials, check-ins, GPS or health records.
-- Generic import uses ON CONFLICT DO NOTHING so existing natural-key rows are preserved.
-- Table: Partner

INSERT INTO "public"."Partner" ("id", "name", "type", "benefitProvider", "websiteUrl", "instagramUrl", "bookingUrl", "status", "description", "createdAt", "updatedAt") VALUES
('wellhub', 'Wellhub', 'CORPORATE_BENEFIT', 'WELLHUB', 'https://wellhub.com/', NULL, NULL, 'FUTURE_INTEGRATION', 'Conecte sua rotina de bem-estar com academias, estudios e apps parceiros.', '2026-09-30T12:20:31.002Z', '2026-09-30T12:20:31.002Z'),
('totalpass', 'TotalPass', 'CORPORATE_BENEFIT', 'TOTALPASS', 'https://www.totalpass.com/', NULL, NULL, 'FUTURE_INTEGRATION', 'Acesse academias, estudios e experiencias de saude integrada quando disponivel pela sua empresa.', '2026-09-30T12:20:31.004Z', '2026-09-30T12:20:31.004Z'),
('academia-local', 'Academia local', 'GYM', 'LOCAL_PARTNER', NULL, NULL, NULL, 'COMING_SOON', 'Encontre ou cadastre uma academia parceira para complementar sua rotina.', '2026-09-30T12:20:31.005Z', '2026-09-30T12:20:31.005Z'),
('personal-trainer', 'Personal trainer', 'PERSONAL_TRAINER', 'LOCAL_PARTNER', NULL, NULL, NULL, 'COMING_SOON', 'Conecte treinos em casa com orientacao profissional quando disponivel.', '2026-09-30T12:20:31.006Z', '2026-09-30T12:20:31.006Z')
ON CONFLICT DO NOTHING;
