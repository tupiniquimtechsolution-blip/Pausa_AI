-- Generated from the canonical Pausa AI seed using a synthetic SQLite database.
-- Static/reference data only. No users, profiles, credentials, check-ins, GPS or health records.
-- Generic import uses ON CONFLICT DO NOTHING so existing natural-key rows are preserved.
-- Table: Achievement

INSERT INTO "public"."Achievement" ("id", "slug", "title", "description", "icon", "triggerType", "targetValue", "createdAt") VALUES
('cmuo2psk800al2gucbzkunfw3', 'first-checkin', 'Primeira pausa', 'Fez o primeiro check-in no Pausa AI.', 'Sparkles', 'FIRST_CHECKIN', 1, '2026-09-30T12:20:31.065Z'),
('cmuo2psk900am2gucvm1f85g7', 'streak-7', 'Sete dias de cuidado', 'Manteve uma sequencia de 7 dias de check-in.', 'CalendarCheck', 'STREAK_DAYS', 7, '2026-09-30T12:20:31.066Z'),
('cmuo2pskb00an2guctq69gjcz', 'streak-30', 'Ritual consistente', 'Manteve uma sequencia de 30 dias de check-in.', 'Flame', 'STREAK_DAYS', 30, '2026-09-30T12:20:31.067Z'),
('cmuo2pskc00ao2guc202jyhq2', 'ten-missions', 'Dez missoes', 'Concluiu 10 missoes de bem-estar.', 'Trophy', 'MISSION_COUNT', 10, '2026-09-30T12:20:31.068Z'),
('cmuo2pskd00ap2gucpzit94kq', 'five-yoga', 'Yoga de bolso', 'Concluiu 5 praticas de yoga.', 'HeartPulse', 'YOGA_COUNT', 5, '2026-09-30T12:20:31.070Z'),
('cmuo2pske00aq2guctur79h5r', 'level-5', 'Nivel 5', 'Chegou ao nivel 5.', 'BadgeCheck', 'LEVEL_REACHED', 5, '2026-09-30T12:20:31.071Z'),
('cmuo2pskg00ar2guc57ptr6br', 'level-10', 'Nivel 10', 'Chegou ao nivel 10.', 'Crown', 'LEVEL_REACHED', 10, '2026-09-30T12:20:31.072Z'),
('cmuo2pskh00as2gucnub8qezp', 'all-types', 'Mapa completo', 'Experimentou todos os tipos principais de exercicio.', 'Map', 'ALL_EXERCISE_TYPES', 1, '2026-09-30T12:20:31.073Z'),
('cmuo2pski00at2gucy5wmkm24', 'first-walk', 'Primeira caminhada', 'Concluiu a primeira Caminhada Inteligente.', 'Footprints', 'WALKING_COUNT', 1, '2026-09-30T12:20:31.075Z'),
('cmuo2pskj00au2guca5bgxgn6', 'walks-week-3', 'Tres caminhadas na semana', 'Fez 3 caminhadas em uma janela de 7 dias.', 'CalendarCheck', 'WALKING_WEEK_COUNT', 3, '2026-09-30T12:20:31.076Z'),
('cmuo2pskl00av2gucbmfyu8e0', 'walking-streak-7', 'Sete dias de movimento', 'Criou 7 dias consecutivos com caminhada.', 'Flame', 'WALKING_STREAK_DAYS', 7, '2026-09-30T12:20:31.077Z'),
('cmuo2psko00aw2gucpn57d13i', 'walking-30-min', '30 minutos acumulados', 'Acumulou 30 minutos de caminhada.', 'Clock', 'WALKING_MINUTES', 30, '2026-09-30T12:20:31.081Z'),
('cmuo2psks00ax2guccgkstmjq', 'walking-1km', 'Primeiro quilometro', 'Percorreu 1 km em caminhadas.', 'Route', 'WALKING_DISTANCE_KM', 1, '2026-09-30T12:20:31.084Z'),
('cmuo2pskt00ay2guco5w02ksk', 'walking-5km-month', '5 km no mes', 'Somou 5 km de caminhada em 30 dias.', 'Map', 'WALKING_MONTH_DISTANCE_KM', 5, '2026-09-30T12:20:31.085Z'),
('cmuo2psku00az2guctxpw987n', 'walking-stress-relief', 'Antiestresse concluida', 'Concluiu uma caminhada antiestresse.', 'HeartPulse', 'WALKING_MODE_STRESS_RELIEF', 1, '2026-09-30T12:20:31.087Z'),
('cmuo2pskv00b02guclkakx184', 'walking-comeback', 'Voltou para o movimento', 'Registrou uma caminhada apos mais de 7 dias de pausa.', 'RotateCcw', 'WALKING_COMEBACK', 1, '2026-09-30T12:20:31.088Z'),
('cmuo2pskx00b12guc4vw4m3wa', 'walking-mood-up', 'Humor melhorou', 'Registrou melhora de humor apos caminhar.', 'Smile', 'WALKING_MOOD_IMPROVED', 1, '2026-09-30T12:20:31.089Z'),
('cmuo2psky00b22guctn98p7k0', 'walking-chair', 'Treino adaptado concluido', 'Concluiu uma caminhada adaptada na cadeira.', 'Accessibility', 'WALKING_MODE_CHAIR', 1, '2026-09-30T12:20:31.090Z')
ON CONFLICT DO NOTHING;
