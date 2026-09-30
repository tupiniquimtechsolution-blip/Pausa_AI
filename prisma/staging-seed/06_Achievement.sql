-- Generated from the canonical Pausa AI seed using a synthetic SQLite database.
-- Static/reference data only. No users, profiles, credentials, check-ins, GPS or health records.
-- Table: Achievement

INSERT INTO "public"."Achievement" ("id", "slug", "title", "description", "icon", "triggerType", "targetValue", "createdAt") VALUES
('cmuo2ajk200al1o0lowribgnh', 'first-checkin', 'Primeira pausa', 'Fez o primeiro check-in no Pausa AI.', 'Sparkles', 'FIRST_CHECKIN', 1, '2026-09-30T12:08:39.554Z'),
('cmuo2ajk500am1o0ltxqraurh', 'streak-7', 'Sete dias de cuidado', 'Manteve uma sequencia de 7 dias de check-in.', 'CalendarCheck', 'STREAK_DAYS', 7, '2026-09-30T12:08:39.557Z'),
('cmuo2ajk700an1o0lk0oc9yoq', 'streak-30', 'Ritual consistente', 'Manteve uma sequencia de 30 dias de check-in.', 'Flame', 'STREAK_DAYS', 30, '2026-09-30T12:08:39.559Z'),
('cmuo2ajk800ao1o0lr3h32glv', 'ten-missions', 'Dez missoes', 'Concluiu 10 missoes de bem-estar.', 'Trophy', 'MISSION_COUNT', 10, '2026-09-30T12:08:39.560Z'),
('cmuo2ajk900ap1o0lzdjlkgmn', 'five-yoga', 'Yoga de bolso', 'Concluiu 5 praticas de yoga.', 'HeartPulse', 'YOGA_COUNT', 5, '2026-09-30T12:08:39.562Z'),
('cmuo2ajkb00aq1o0lat1e0fks', 'level-5', 'Nivel 5', 'Chegou ao nivel 5.', 'BadgeCheck', 'LEVEL_REACHED', 5, '2026-09-30T12:08:39.563Z'),
('cmuo2ajkc00ar1o0lmh39un5c', 'level-10', 'Nivel 10', 'Chegou ao nivel 10.', 'Crown', 'LEVEL_REACHED', 10, '2026-09-30T12:08:39.565Z'),
('cmuo2ajke00as1o0ln9gb5axi', 'all-types', 'Mapa completo', 'Experimentou todos os tipos principais de exercicio.', 'Map', 'ALL_EXERCISE_TYPES', 1, '2026-09-30T12:08:39.566Z'),
('cmuo2ajkf00at1o0lhp35cv7f', 'first-walk', 'Primeira caminhada', 'Concluiu a primeira Caminhada Inteligente.', 'Footprints', 'WALKING_COUNT', 1, '2026-09-30T12:08:39.568Z'),
('cmuo2ajkh00au1o0l9nvidm5f', 'walks-week-3', 'Tres caminhadas na semana', 'Fez 3 caminhadas em uma janela de 7 dias.', 'CalendarCheck', 'WALKING_WEEK_COUNT', 3, '2026-09-30T12:08:39.569Z'),
('cmuo2ajki00av1o0l585548wk', 'walking-streak-7', 'Sete dias de movimento', 'Criou 7 dias consecutivos com caminhada.', 'Flame', 'WALKING_STREAK_DAYS', 7, '2026-09-30T12:08:39.571Z'),
('cmuo2ajkk00aw1o0lm6gd39ye', 'walking-30-min', '30 minutos acumulados', 'Acumulou 30 minutos de caminhada.', 'Clock', 'WALKING_MINUTES', 30, '2026-09-30T12:08:39.573Z'),
('cmuo2ajkm00ax1o0l4jqsl8gt', 'walking-1km', 'Primeiro quilometro', 'Percorreu 1 km em caminhadas.', 'Route', 'WALKING_DISTANCE_KM', 1, '2026-09-30T12:08:39.574Z'),
('cmuo2ajkn00ay1o0l0837pvbe', 'walking-5km-month', '5 km no mes', 'Somou 5 km de caminhada em 30 dias.', 'Map', 'WALKING_MONTH_DISTANCE_KM', 5, '2026-09-30T12:08:39.576Z'),
('cmuo2ajkp00az1o0lmz100ymh', 'walking-stress-relief', 'Antiestresse concluida', 'Concluiu uma caminhada antiestresse.', 'HeartPulse', 'WALKING_MODE_STRESS_RELIEF', 1, '2026-09-30T12:08:39.577Z'),
('cmuo2ajkq00b01o0lv6hqlbjc', 'walking-comeback', 'Voltou para o movimento', 'Registrou uma caminhada apos mais de 7 dias de pausa.', 'RotateCcw', 'WALKING_COMEBACK', 1, '2026-09-30T12:08:39.579Z'),
('cmuo2ajks00b11o0lp6guwis5', 'walking-mood-up', 'Humor melhorou', 'Registrou melhora de humor apos caminhar.', 'Smile', 'WALKING_MOOD_IMPROVED', 1, '2026-09-30T12:08:39.580Z'),
('cmuo2ajkt00b21o0ln3jyg3is', 'walking-chair', 'Treino adaptado concluido', 'Concluiu uma caminhada adaptada na cadeira.', 'Accessibility', 'WALKING_MODE_CHAIR', 1, '2026-09-30T12:08:39.582Z')
ON CONFLICT DO NOTHING;
