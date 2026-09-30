-- Generated from the canonical Pausa AI seed using a synthetic SQLite database.
-- Static/reference data only. No users, profiles, credentials, check-ins, GPS or health records.
-- Generic import uses ON CONFLICT DO NOTHING so existing natural-key rows are preserved.
-- Table: Achievement

INSERT INTO "public"."Achievement" ("id", "slug", "title", "description", "icon", "triggerType", "targetValue", "createdAt") VALUES
('cmuo32bbp00al2gv0pnt6tygg', 'first-checkin', 'Primeira pausa', 'Fez o primeiro check-in no Pausa AI.', 'Sparkles', 'FIRST_CHECKIN', 1, '2026-09-30T12:30:15.253Z'),
('cmuo32bbq00am2gv0dbbnv2tl', 'streak-7', 'Sete dias de cuidado', 'Manteve uma sequencia de 7 dias de check-in.', 'CalendarCheck', 'STREAK_DAYS', 7, '2026-09-30T12:30:15.254Z'),
('cmuo32bbr00an2gv0qiasqkie', 'streak-30', 'Ritual consistente', 'Manteve uma sequencia de 30 dias de check-in.', 'Flame', 'STREAK_DAYS', 30, '2026-09-30T12:30:15.256Z'),
('cmuo32bbs00ao2gv0zd2olo1d', 'ten-missions', 'Dez missoes', 'Concluiu 10 missoes de bem-estar.', 'Trophy', 'MISSION_COUNT', 10, '2026-09-30T12:30:15.257Z'),
('cmuo32bbt00ap2gv0t3hpb4z8', 'five-yoga', 'Yoga de bolso', 'Concluiu 5 praticas de yoga.', 'HeartPulse', 'YOGA_COUNT', 5, '2026-09-30T12:30:15.258Z'),
('cmuo32bbv00aq2gv0glbstx5b', 'level-5', 'Nivel 5', 'Chegou ao nivel 5.', 'BadgeCheck', 'LEVEL_REACHED', 5, '2026-09-30T12:30:15.259Z'),
('cmuo32bbw00ar2gv0ok3r5z7o', 'level-10', 'Nivel 10', 'Chegou ao nivel 10.', 'Crown', 'LEVEL_REACHED', 10, '2026-09-30T12:30:15.260Z'),
('cmuo32bbx00as2gv0ug213044', 'all-types', 'Mapa completo', 'Experimentou todos os tipos principais de exercicio.', 'Map', 'ALL_EXERCISE_TYPES', 1, '2026-09-30T12:30:15.261Z'),
('cmuo32bby00at2gv0o2a5ht02', 'first-walk', 'Primeira caminhada', 'Concluiu a primeira Caminhada Inteligente.', 'Footprints', 'WALKING_COUNT', 1, '2026-09-30T12:30:15.263Z'),
('cmuo32bbz00au2gv0zznpnmtk', 'walks-week-3', 'Tres caminhadas na semana', 'Fez 3 caminhadas em uma janela de 7 dias.', 'CalendarCheck', 'WALKING_WEEK_COUNT', 3, '2026-09-30T12:30:15.264Z'),
('cmuo32bc000av2gv0j1blt1z7', 'walking-streak-7', 'Sete dias de movimento', 'Criou 7 dias consecutivos com caminhada.', 'Flame', 'WALKING_STREAK_DAYS', 7, '2026-09-30T12:30:15.265Z'),
('cmuo32bc100aw2gv00tl21ohw', 'walking-30-min', '30 minutos acumulados', 'Acumulou 30 minutos de caminhada.', 'Clock', 'WALKING_MINUTES', 30, '2026-09-30T12:30:15.266Z'),
('cmuo32bc200ax2gv0i2aa5vmo', 'walking-1km', 'Primeiro quilometro', 'Percorreu 1 km em caminhadas.', 'Route', 'WALKING_DISTANCE_KM', 1, '2026-09-30T12:30:15.267Z'),
('cmuo32bc300ay2gv05pj52syq', 'walking-5km-month', '5 km no mes', 'Somou 5 km de caminhada em 30 dias.', 'Map', 'WALKING_MONTH_DISTANCE_KM', 5, '2026-09-30T12:30:15.268Z'),
('cmuo32bc500az2gv0vveuzhkt', 'walking-stress-relief', 'Antiestresse concluida', 'Concluiu uma caminhada antiestresse.', 'HeartPulse', 'WALKING_MODE_STRESS_RELIEF', 1, '2026-09-30T12:30:15.269Z'),
('cmuo32bc600b02gv0k0nd2gsu', 'walking-comeback', 'Voltou para o movimento', 'Registrou uma caminhada apos mais de 7 dias de pausa.', 'RotateCcw', 'WALKING_COMEBACK', 1, '2026-09-30T12:30:15.270Z'),
('cmuo32bc700b12gv08geil9gv', 'walking-mood-up', 'Humor melhorou', 'Registrou melhora de humor apos caminhar.', 'Smile', 'WALKING_MOOD_IMPROVED', 1, '2026-09-30T12:30:15.271Z'),
('cmuo32bc800b22gv03egmvzil', 'walking-chair', 'Treino adaptado concluido', 'Concluiu uma caminhada adaptada na cadeira.', 'Accessibility', 'WALKING_MODE_CHAIR', 1, '2026-09-30T12:30:15.273Z')
ON CONFLICT DO NOTHING;
