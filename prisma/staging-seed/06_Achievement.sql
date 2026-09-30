-- Generated from the canonical Pausa AI seed using a synthetic SQLite database.
-- Static/reference data only. No users, profiles, credentials, check-ins, GPS or health records.
-- Table: Achievement

INSERT INTO "public"."Achievement" ("id", "slug", "title", "description", "icon", "triggerType", "targetValue", "createdAt") VALUES
('cmuo2jtph00al2gzm5z7p8fce', 'first-checkin', 'Primeira pausa', 'Fez o primeiro check-in no Pausa AI.', 'Sparkles', 'FIRST_CHECKIN', 1, '2026-09-30T12:15:52.614Z'),
('cmuo2jtpj00am2gzmgvryp1z8', 'streak-7', 'Sete dias de cuidado', 'Manteve uma sequencia de 7 dias de check-in.', 'CalendarCheck', 'STREAK_DAYS', 7, '2026-09-30T12:15:52.615Z'),
('cmuo2jtpk00an2gzm31zhcnsr', 'streak-30', 'Ritual consistente', 'Manteve uma sequencia de 30 dias de check-in.', 'Flame', 'STREAK_DAYS', 30, '2026-09-30T12:15:52.617Z'),
('cmuo2jtpm00ao2gzm4hx2l9wx', 'ten-missions', 'Dez missoes', 'Concluiu 10 missoes de bem-estar.', 'Trophy', 'MISSION_COUNT', 10, '2026-09-30T12:15:52.618Z'),
('cmuo2jtpn00ap2gzmjwmdwopn', 'five-yoga', 'Yoga de bolso', 'Concluiu 5 praticas de yoga.', 'HeartPulse', 'YOGA_COUNT', 5, '2026-09-30T12:15:52.620Z'),
('cmuo2jtpp00aq2gzmyd31g9st', 'level-5', 'Nivel 5', 'Chegou ao nivel 5.', 'BadgeCheck', 'LEVEL_REACHED', 5, '2026-09-30T12:15:52.621Z'),
('cmuo2jtpq00ar2gzms9kev6sq', 'level-10', 'Nivel 10', 'Chegou ao nivel 10.', 'Crown', 'LEVEL_REACHED', 10, '2026-09-30T12:15:52.622Z'),
('cmuo2jtpr00as2gzmu81oy0sa', 'all-types', 'Mapa completo', 'Experimentou todos os tipos principais de exercicio.', 'Map', 'ALL_EXERCISE_TYPES', 1, '2026-09-30T12:15:52.624Z'),
('cmuo2jtps00at2gzm6qqsksdg', 'first-walk', 'Primeira caminhada', 'Concluiu a primeira Caminhada Inteligente.', 'Footprints', 'WALKING_COUNT', 1, '2026-09-30T12:15:52.625Z'),
('cmuo2jtpu00au2gzmt4806w8l', 'walks-week-3', 'Tres caminhadas na semana', 'Fez 3 caminhadas em uma janela de 7 dias.', 'CalendarCheck', 'WALKING_WEEK_COUNT', 3, '2026-09-30T12:15:52.626Z'),
('cmuo2jtpv00av2gzm3gj5kzg5', 'walking-streak-7', 'Sete dias de movimento', 'Criou 7 dias consecutivos com caminhada.', 'Flame', 'WALKING_STREAK_DAYS', 7, '2026-09-30T12:15:52.627Z'),
('cmuo2jtpw00aw2gzm55coz55n', 'walking-30-min', '30 minutos acumulados', 'Acumulou 30 minutos de caminhada.', 'Clock', 'WALKING_MINUTES', 30, '2026-09-30T12:15:52.629Z'),
('cmuo2jtpy00ax2gzmorf7oewv', 'walking-1km', 'Primeiro quilometro', 'Percorreu 1 km em caminhadas.', 'Route', 'WALKING_DISTANCE_KM', 1, '2026-09-30T12:15:52.630Z'),
('cmuo2jtpz00ay2gzm8cbtqgzl', 'walking-5km-month', '5 km no mes', 'Somou 5 km de caminhada em 30 dias.', 'Map', 'WALKING_MONTH_DISTANCE_KM', 5, '2026-09-30T12:15:52.632Z'),
('cmuo2jtq000az2gzmybfunrqi', 'walking-stress-relief', 'Antiestresse concluida', 'Concluiu uma caminhada antiestresse.', 'HeartPulse', 'WALKING_MODE_STRESS_RELIEF', 1, '2026-09-30T12:15:52.633Z'),
('cmuo2jtq200b02gzm675lkqa1', 'walking-comeback', 'Voltou para o movimento', 'Registrou uma caminhada apos mais de 7 dias de pausa.', 'RotateCcw', 'WALKING_COMEBACK', 1, '2026-09-30T12:15:52.634Z'),
('cmuo2jtq300b12gzm2a18qk1t', 'walking-mood-up', 'Humor melhorou', 'Registrou melhora de humor apos caminhar.', 'Smile', 'WALKING_MOOD_IMPROVED', 1, '2026-09-30T12:15:52.635Z'),
('cmuo2jtq400b22gzm7c6ayws2', 'walking-chair', 'Treino adaptado concluido', 'Concluiu uma caminhada adaptada na cadeira.', 'Accessibility', 'WALKING_MODE_CHAIR', 1, '2026-09-30T12:15:52.637Z')
ON CONFLICT DO NOTHING;
