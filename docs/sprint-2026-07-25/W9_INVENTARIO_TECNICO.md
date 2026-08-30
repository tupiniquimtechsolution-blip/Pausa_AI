# W9 — Inventário técnico da Release Candidate

Gerado em: 2026-07-28T12:55:38.091Z
Baseline comparada: `b197d6f`
Head de código W0–W8: `aa5d0ae`

## Resumo

| Item | Quantidade |
| --- | ---: |
| Arquivos criados | 124 |
| Arquivos alterados | 61 |
| Arquivos removidos | 0 |
| Arquivos renomeados | 0 |
| Páginas atuais | 54 |
| Rotas de API atuais | 81 |
| Serviços/módulos TypeScript em `lib` | 81 |
| Componentes React compartilhados | 56 |
| Migrations | 9 |

Os artefatos documentais W9 são adicionados depois do head de código e ficam enumerados na seção final.

## Arquivos criados

- `app/admin/media/page.tsx`
- `app/api/activities/[id]/points/route.ts`
- `app/api/activities/[id]/route.ts`
- `app/api/activities/route.ts`
- `app/api/activities/sync/route.ts`
- `app/api/admin/campaigns/route.ts`
- `app/api/admin/feature-flags/route.ts`
- `app/api/admin/media/[id]/approval/route.ts`
- `app/api/admin/media/[id]/publish/route.ts`
- `app/api/admin/media/[id]/withdraw/route.ts`
- `app/api/admin/media/route.ts`
- `app/api/admin/roles/assign/route.ts`
- `app/api/admin/voice-scripts/route.ts`
- `app/api/audio/providers/route.ts`
- `app/api/content/library/route.ts`
- `app/api/data-vault/consents/route.ts`
- `app/api/data-vault/route.ts`
- `app/api/data-vault/subject-request/route.ts`
- `app/api/devices/route.ts`
- `app/api/editorial/cards/route.ts`
- `app/api/health/profile/route.ts`
- `app/api/media/audio/route.ts`
- `app/api/media/library/route.ts`
- `app/api/media/videos/route.ts`
- `app/api/notifications/policy/route.ts`
- `app/api/platform/capabilities/route.ts`
- `app/api/platform/permissions/route.ts`
- `app/api/progress/summary/route.ts`
- `app/api/recommendations/current/route.ts`
- `app/api/recommendations/feedback/route.ts`
- `app/api/share-cards/route.ts`
- `app/api/system/health/route.ts`
- `app/app/corpo/atividade/page.tsx`
- `app/app/corpo/caminhada/andamento/page.tsx`
- `app/app/corpo/caminhada/configurar/page.tsx`
- `app/app/corpo/caminhada/historico/page.tsx`
- `app/app/corpo/caminhada/page.tsx`
- `app/app/corpo/caminhada/resumo/page.tsx`
- `app/app/corpo/page.tsx`
- `app/app/corpo/yoga/[slug]/page.tsx`
- `app/app/mente/foco/page.tsx`
- `app/app/mente/page.tsx`
- `app/app/perfil/configuracoes/page.tsx`
- `app/app/perfil/conquistas/page.tsx`
- `app/app/perfil/historico/page.tsx`
- `app/app/progresso/page.tsx`
- `app/app/rotina/hoje/page.tsx`
- `components/accessible-guidance.tsx`
- `components/content-library-browser.tsx`
- `components/feature-flags.tsx`
- `components/foundation-status-panel.tsx`
- `components/pausa-activity-runner.tsx`
- `components/pillar-navigation.tsx`
- `components/platform-capabilities.tsx`
- `docs/sprint-2026-07-25/EXECUTION_LEDGER.md`
- `docs/sprint-2026-07-25/W0_RELATORIO_AUDITORIA_BASELINE.md`
- `docs/sprint-2026-07-25/W1_RELATORIO_FUNDACOES.md`
- `docs/sprint-2026-07-25/W2_MATRIZ_BOTOES.md`
- `docs/sprint-2026-07-25/W2_RELATORIO_ESTABILIZACAO.md`
- `docs/sprint-2026-07-25/W3_MATRIZ_ROTAS.md`
- `docs/sprint-2026-07-25/W3_RELATORIO_NAVEGACAO.md`
- `docs/sprint-2026-07-25/W4_RELATORIO_BIBLIOTECAS_EDITORIAIS.md`
- `docs/sprint-2026-07-25/W5_RELATORIO_RECOMENDACAO_ADAPTATIVA.md`
- `docs/sprint-2026-07-25/W6_RELATORIO_ACTIVITY_DADOS_DISPOSITIVOS.md`
- `docs/sprint-2026-07-25/W7_RELATORIO_MIDIA_AUDIO_VIDEO_MARKETING.md`
- `docs/sprint-2026-07-25/W8_RELATORIO_HARDENING.md`
- `lib/activity/metrics.ts`
- `lib/activity/service.ts`
- `lib/content-library/definitions.ts`
- `lib/content-library/service.ts`
- `lib/design-system/themes.ts`
- `lib/feature-flags/registry.ts`
- `lib/feature-flags/server.ts`
- `lib/focus/session-machine.ts`
- `lib/i18n/catalogs.ts`
- `lib/maps/provider.ts`
- `lib/media/governance.ts`
- `lib/media/secure-source.ts`
- `lib/navigation/pillars.ts`
- `lib/notifications/policy.ts`
- `lib/observability.ts`
- `lib/platform/capabilities.ts`
- `lib/privacy/data-subject.ts`
- `lib/privacy/public-content.ts`
- `lib/progress/summary.ts`
- `lib/rbac/roles.ts`
- `lib/rbac/server.ts`
- `lib/recommendations/engine.ts`
- `lib/recommendations/service.ts`
- `lib/scheduling/reservation-service.ts`
- `lib/security/rate-limit.ts`
- `lib/security/urls.ts`
- `lib/social-downtime/policy.ts`
- `prisma/migrations/20260725160000_baseline/migration.sql`
- `prisma/migrations/20260725192501_w1_foundations/migration.sql`
- `prisma/migrations/20260725213000_w2_critical_stabilization/migration.sql`
- `prisma/migrations/20260725230000_w3_navigation_rollout/migration.sql`
- `prisma/migrations/20260726054409_w4_content_library/migration.sql`
- `prisma/migrations/20260726055045_w5_adaptive_recommendations/migration.sql`
- `prisma/migrations/20260726055827_w6_activity_data_vault/migration.sql`
- `prisma/migrations/20260726060555_w7_media_governance/migration.sql`
- `prisma/migrations/20260726070000_w8_hardening/migration.sql`
- `prisma/migrations/migration_lock.toml`
- `scripts/button-audit.ts`
- `scripts/critical-stabilization-checks.ts`
- `scripts/foundation-authenticated-checks.ts`
- `scripts/foundation-checks.ts`
- `scripts/migration-integrity-check.ts`
- `scripts/navigation-checks.ts`
- `scripts/rc-database-drill.mjs`
- `scripts/retention-maintenance.ts`
- `scripts/run-foundation-gate.mjs`
- `scripts/run-w2-gate.mjs`
- `scripts/run-w3-gate.mjs`
- `scripts/seed-foundations.ts`
- `scripts/seed-w4-content-library.ts`
- `scripts/seed-w7-media-governance.ts`
- `scripts/w2-authenticated-checks.ts`
- `scripts/w3-authenticated-checks.ts`
- `scripts/w4-content-library-checks.ts`
- `scripts/w5-recommendation-checks.ts`
- `scripts/w6-activity-checks.ts`
- `scripts/w7-media-governance-checks.ts`
- `scripts/w8-hardening-checks.ts`

## Arquivos alterados

- `.env.example`
- `.gitignore`
- `app/admin/leads/page.tsx`
- `app/api/agenda/events/route.ts`
- `app/api/auth/login/route.ts`
- `app/api/auth/password/forgot/route.ts`
- `app/api/auth/password/reset/route.ts`
- `app/api/auth/register/route.ts`
- `app/api/b2b/dashboard/route.ts`
- `app/api/checkins/route.ts`
- `app/api/focus/sessions/route.ts`
- `app/api/profile/preferences/route.ts`
- `app/api/routine/social-downtime/route.ts`
- `app/api/videos/[slug]/route.ts`
- `app/api/videos/route.ts`
- `app/app/checkin/resultado/[id]/page.tsx`
- `app/app/exercicios/[slug]/page.tsx`
- `app/app/historico/page.tsx`
- `app/app/layout.tsx`
- `app/app/missoes/page.tsx`
- `app/app/movimento/caminhada/andamento/page.tsx`
- `app/app/movimento/caminhada/configurar/page.tsx`
- `app/app/movimento/caminhada/historico/page.tsx`
- `app/app/movimento/caminhada/page.tsx`
- `app/app/movimento/caminhada/resumo/page.tsx`
- `app/app/movimento/page.tsx`
- `app/app/page.tsx`
- `app/app/perfil/page.tsx`
- `app/app/yoga/[slug]/page.tsx`
- `app/globals.css`
- `app/layout.tsx`
- `app/mobile-preview/page.tsx`
- `components/add-to-routine-button.tsx`
- `components/agenda-view.tsx`
- `components/alarm-panel.tsx`
- `components/breathing-visual.tsx`
- `components/exercise-card-carousel.tsx`
- `components/exercise-image.tsx`
- `components/favorite-exercise-button.tsx`
- `components/focus-timer.tsx`
- `components/forms.tsx`
- `components/image-sequence.tsx`
- `components/instruction-runner.tsx`
- `components/instructional-video-block.tsx`
- `components/navigation.tsx`
- `components/notification-center.tsx`
- `components/preferences.tsx`
- `components/smart-input.tsx`
- `components/ui.tsx`
- `components/walking-config-form.tsx`
- `components/walking-session-runner.tsx`
- `eslint.config.mjs`
- `lib/auth.ts`
- `lib/validators.ts`
- `next.config.mjs`
- `package.json`
- `prisma/schema.prisma`
- `prisma/seed.ts`
- `scripts/check-config.mjs`
- `scripts/walking-checks.ts`
- `tailwind.config.ts`

## Arquivos removidos

Nenhum.

## Arquivos renomeados

Nenhum.

## Páginas

- `app/admin/dashboard-empresas/page.tsx`
- `app/admin/leads/[id]/page.tsx`
- `app/admin/leads/page.tsx`
- `app/admin/media/page.tsx`
- `app/admin/page.tsx`
- `app/admin/partners/page.tsx`
- `app/app/agenda/page.tsx`
- `app/app/beneficios/page.tsx`
- `app/app/checkin/page.tsx`
- `app/app/checkin/resultado/[id]/page.tsx`
- `app/app/corpo/atividade/page.tsx`
- `app/app/corpo/caminhada/andamento/page.tsx`
- `app/app/corpo/caminhada/configurar/page.tsx`
- `app/app/corpo/caminhada/historico/page.tsx`
- `app/app/corpo/caminhada/page.tsx`
- `app/app/corpo/caminhada/resumo/page.tsx`
- `app/app/corpo/page.tsx`
- `app/app/corpo/yoga/[slug]/page.tsx`
- `app/app/exercicios/[slug]/page.tsx`
- `app/app/historico/page.tsx`
- `app/app/insights/page.tsx`
- `app/app/mente/foco/page.tsx`
- `app/app/mente/page.tsx`
- `app/app/missoes/page.tsx`
- `app/app/movimento/caminhada/andamento/page.tsx`
- `app/app/movimento/caminhada/configurar/page.tsx`
- `app/app/movimento/caminhada/historico/page.tsx`
- `app/app/movimento/caminhada/page.tsx`
- `app/app/movimento/caminhada/resumo/page.tsx`
- `app/app/movimento/page.tsx`
- `app/app/onboarding/page.tsx`
- `app/app/page.tsx`
- `app/app/perfil/configuracoes/page.tsx`
- `app/app/perfil/conquistas/page.tsx`
- `app/app/perfil/historico/page.tsx`
- `app/app/perfil/page.tsx`
- `app/app/premium/page.tsx`
- `app/app/progresso/page.tsx`
- `app/app/respiracao/page.tsx`
- `app/app/rotina/hoje/page.tsx`
- `app/app/rotina/page.tsx`
- `app/app/yoga/[slug]/page.tsx`
- `app/cadastro/page.tsx`
- `app/empresas/demo/page.tsx`
- `app/empresas/page.tsx`
- `app/empresas/piloto/page.tsx`
- `app/esqueci-senha/page.tsx`
- `app/login/page.tsx`
- `app/mobile-preview/page.tsx`
- `app/page.tsx`
- `app/precos/page.tsx`
- `app/privacidade/page.tsx`
- `app/redefinir-senha/[token]/page.tsx`
- `app/termos/page.tsx`

## Rotas de API

- `app/api/achievements/route.ts`
- `app/api/activities/[id]/points/route.ts`
- `app/api/activities/[id]/route.ts`
- `app/api/activities/route.ts`
- `app/api/activities/sync/route.ts`
- `app/api/admin/campaigns/route.ts`
- `app/api/admin/feature-flags/route.ts`
- `app/api/admin/leads/route.ts`
- `app/api/admin/media/[id]/approval/route.ts`
- `app/api/admin/media/[id]/publish/route.ts`
- `app/api/admin/media/[id]/withdraw/route.ts`
- `app/api/admin/media/route.ts`
- `app/api/admin/partners/route.ts`
- `app/api/admin/roles/assign/route.ts`
- `app/api/admin/voice-scripts/route.ts`
- `app/api/agenda/conflicts/route.ts`
- `app/api/agenda/events/route.ts`
- `app/api/agenda/free-time/route.ts`
- `app/api/agenda/inbox/route.ts`
- `app/api/agenda/parse/route.ts`
- `app/api/agenda/reminders/route.ts`
- `app/api/agenda/route.ts`
- `app/api/agenda/tasks/route.ts`
- `app/api/audio/providers/route.ts`
- `app/api/auth/login/route.ts`
- `app/api/auth/logout/route.ts`
- `app/api/auth/password/forgot/route.ts`
- `app/api/auth/password/reset/route.ts`
- `app/api/auth/register/route.ts`
- `app/api/b2b/dashboard/route.ts`
- `app/api/calendar/connections/route.ts`
- `app/api/checkins/route.ts`
- `app/api/content/library/route.ts`
- `app/api/cron/daily-recommendations/route.ts`
- `app/api/data-vault/consents/route.ts`
- `app/api/data-vault/route.ts`
- `app/api/data-vault/subject-request/route.ts`
- `app/api/devices/route.ts`
- `app/api/editorial/cards/route.ts`
- `app/api/exercise-instructions/session/route.ts`
- `app/api/exercises/route.ts`
- `app/api/exercises/session/route.ts`
- `app/api/focus/sessions/route.ts`
- `app/api/health/profile/route.ts`
- `app/api/health/snapshot/route.ts`
- `app/api/leads/route.ts`
- `app/api/media/audio/route.ts`
- `app/api/media/library/route.ts`
- `app/api/media/videos/route.ts`
- `app/api/missions/route.ts`
- `app/api/notifications/policy/route.ts`
- `app/api/onboarding/refresh/route.ts`
- `app/api/onboarding/route.ts`
- `app/api/partners/interest/route.ts`
- `app/api/partners/route.ts`
- `app/api/plan/weekly/route.ts`
- `app/api/platform/capabilities/route.ts`
- `app/api/platform/permissions/route.ts`
- `app/api/profile/preferences/route.ts`
- `app/api/profile/route.ts`
- `app/api/progress/summary/route.ts`
- `app/api/recommendations/current/route.ts`
- `app/api/recommendations/feedback/route.ts`
- `app/api/reports/weekly/route.ts`
- `app/api/routine/reminders/route.ts`
- `app/api/routine/social-downtime/route.ts`
- `app/api/routine/tasks/route.ts`
- `app/api/share-cards/route.ts`
- `app/api/system/health/route.ts`
- `app/api/videos/[slug]/route.ts`
- `app/api/videos/route.ts`
- `app/api/walking/favorite-routes/route.ts`
- `app/api/walking/goals/route.ts`
- `app/api/walking/sessions/[id]/route.ts`
- `app/api/walking/sessions/route.ts`
- `app/api/workouts/route.ts`
- `app/api/workouts/session/route.ts`
- `app/api/yoga/practices/[slug]/route.ts`
- `app/api/yoga/practices/route.ts`
- `app/api/yoga/sequences/route.ts`
- `app/api/yoga/session/route.ts`

## Componentes compartilhados

- `components/accessible-guidance.tsx`
- `components/achievement-gallery.tsx`
- `components/add-to-routine-button.tsx`
- `components/admin.tsx`
- `components/agenda-view.tsx`
- `components/alarm-panel.tsx`
- `components/breathing-visual.tsx`
- `components/centered-toast.tsx`
- `components/charts.tsx`
- `components/communication-preferences.tsx`
- `components/conflict-alert.tsx`
- `components/content-library-browser.tsx`
- `components/day-timeline.tsx`
- `components/event-card.tsx`
- `components/event-preview-card.tsx`
- `components/exercise-card-carousel.tsx`
- `components/exercise-detail-mode.tsx`
- `components/exercise-image-sequence.tsx`
- `components/exercise-image.tsx`
- `components/favorite-exercise-button.tsx`
- `components/feature-flags.tsx`
- `components/focus-timer.tsx`
- `components/forms.tsx`
- `components/foundation-status-panel.tsx`
- `components/health-sync-card.tsx`
- `components/image-sequence.tsx`
- `components/inbox-panel.tsx`
- `components/instruction-runner.tsx`
- `components/instructional-video-block.tsx`
- `components/login-form.tsx`
- `components/mobile-preview.tsx`
- `components/movement-client.tsx`
- `components/navigation.tsx`
- `components/notification-center.tsx`
- `components/onboarding-flow.tsx`
- `components/partners-client.tsx`
- `components/password-reset-forms.tsx`
- `components/pausa-activity-runner.tsx`
- `components/permission-banner.tsx`
- `components/pillar-navigation.tsx`
- `components/platform-capabilities.tsx`
- `components/preferences.tsx`
- `components/re-onboarding-prompt.tsx`
- `components/routine-planner.tsx`
- `components/smart-input.tsx`
- `components/ui.tsx`
- `components/user-progress-banner.tsx`
- `components/walking-actions.tsx`
- `components/walking-config-form.tsx`
- `components/walking-route-map.tsx`
- `components/walking-session-runner.tsx`
- `components/week-view.tsx`
- `components/weekly-plan-generator.tsx`
- `components/workout-timer.tsx`
- `components/yoga-complete-button.tsx`
- `components/yoga-image-sequence.tsx`

## Serviços e módulos

- `lib/achievements.ts`
- `lib/activity-completions.ts`
- `lib/activity/metrics.ts`
- `lib/activity/service.ts`
- `lib/advice.ts`
- `lib/agenda/agenda-service.ts`
- `lib/agenda/calendar-providers.ts`
- `lib/agenda/conflict-detection-service.ts`
- `lib/agenda/date-utils.ts`
- `lib/agenda/free-time-service.ts`
- `lib/agenda/notification-service.ts`
- `lib/agenda/ocr-service.ts`
- `lib/agenda/permission-service.ts`
- `lib/agenda/schedule-ai-service.ts`
- `lib/agenda/schemas.ts`
- `lib/agenda/speech-to-text-service.ts`
- `lib/astral.ts`
- `lib/auth.ts`
- `lib/catalog-policy.ts`
- `lib/catalog-reconciliation-engine.ts`
- `lib/catalog-reconciliation.ts`
- `lib/catalog-visual-assets.ts`
- `lib/catalog-visual-decisions.ts`
- `lib/checkin-refinement.ts`
- `lib/completion-token.ts`
- `lib/content-library/definitions.ts`
- `lib/content-library/service.ts`
- `lib/core-conditioning-reference.ts`
- `lib/design-system/themes.ts`
- `lib/email.ts`
- `lib/energy-missions.ts`
- `lib/exercise-data.ts`
- `lib/exercise-image-presentation.ts`
- `lib/exercise-images.ts`
- `lib/exercise-instruction-data.ts`
- `lib/feature-flags/registry.ts`
- `lib/feature-flags/server.ts`
- `lib/focus-exercises.ts`
- `lib/focus/session-machine.ts`
- `lib/happiness-missions.ts`
- `lib/home-workouts.ts`
- `lib/i18n/catalogs.ts`
- `lib/instructional-video-planning.ts`
- `lib/levels.ts`
- `lib/maps/provider.ts`
- `lib/media/governance.ts`
- `lib/media/secure-source.ts`
- `lib/metrics.ts`
- `lib/native-routine-bridge.ts`
- `lib/navigation/pillars.ts`
- `lib/notifications/policy.ts`
- `lib/observability.ts`
- `lib/physical-alerts.ts`
- `lib/planned-reference-catalog.ts`
- `lib/platform/capabilities.ts`
- `lib/prisma.ts`
- `lib/privacy/data-subject.ts`
- `lib/privacy/public-content.ts`
- `lib/progress/summary.ts`
- `lib/rbac/roles.ts`
- `lib/rbac/server.ts`
- `lib/recommendations/engine.ts`
- `lib/recommendations/service.ts`
- `lib/reference-extra-catalog.ts`
- `lib/risk.ts`
- `lib/scheduling/reservation-service.ts`
- `lib/security/rate-limit.ts`
- `lib/security/urls.ts`
- `lib/sleep-missions.ts`
- `lib/sleep-support-reference.ts`
- `lib/social-downtime/policy.ts`
- `lib/social-free-mode-integration.ts`
- `lib/stretching-exercises.ts`
- `lib/stretching-routines.ts`
- `lib/utils.ts`
- `lib/validators.ts`
- `lib/walking.ts`
- `lib/weekly-plan.ts`
- `lib/yoga-data.ts`
- `lib/yoga-images.ts`
- `lib/yoga-recommendation.ts`

## Models, migrations e seeds

Schema: `prisma/schema.prisma`
Seeds: `prisma/seed.ts`, `scripts/seed-foundations.ts`, `scripts/seed-w4-content-library.ts` e `scripts/seed-w7-media-governance.ts`.

- `20260725160000_baseline`
- `20260725192501_w1_foundations`
- `20260725213000_w2_critical_stabilization`
- `20260725230000_w3_navigation_rollout`
- `20260726054409_w4_content_library`
- `20260726055045_w5_adaptive_recommendations`
- `20260726055827_w6_activity_data_vault`
- `20260726060555_w7_media_governance`
- `20260726070000_w8_hardening`

## Artefatos W9

- `docs/sprint-2026-07-25/CHANGELOG_RC_2026-07-25.md`
- `docs/sprint-2026-07-25/W9_INVENTARIO_TECNICO.md`
- `docs/sprint-2026-07-25/W9_MATRIZ_RASTREABILIDADE.md`
- `docs/sprint-2026-07-25/W9_MATRIZES_OPERACIONAIS.md`
- `docs/sprint-2026-07-25/W9_PLANO_DEPLOY_ROLLBACK.md`
- `docs/sprint-2026-07-25/W9_RELEASE_CANDIDATE.md`
- `scripts/generate-w9-inventory.mjs`
- `scripts/run-w9-release-gate.mjs`
- `scripts/run-w9-authenticated-gate.mjs`
- `scripts/run-w9-build.mjs`

### Ajustes de fechamento detectados pelo gate W9

- `components/pillar-navigation.tsx` — nome acessível explícito no botão de pilar;
- `scripts/foundation-authenticated-checks.ts` — contagem de auditoria idempotente;
- `scripts/w2-authenticated-checks.ts` — isolamento e limpeza de eventos/reservas concorrentes;
- `scripts/navigation-checks.ts` — contrato atualizado para Pausa Activity no pilar Corpo;
- `scripts/run-foundation-gate.mjs`, `scripts/run-w2-gate.mjs` e `scripts/run-w3-gate.mjs` — migrations antes dos testes autenticados;
- `scripts/smoke-tests.mjs` — conflito rejeitado não é tratado como evento persistido;
- `scripts/w8-hardening-checks.ts` — cobertura dos nove temas governados;
- `package.json` — comandos `test:w9`, `test:w9:auth`, `build:w9` e `release:inventory`.
