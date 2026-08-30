-- W3 activates the five-pillar navigation for local and test environments.
-- Staging and production remain controlled by the audited feature-flag rollout.
INSERT OR IGNORE INTO "FeatureFlag" (
    "key",
    "description",
    "owner",
    "defaultValue",
    "enabledLocal",
    "enabledTest",
    "enabledStaging",
    "enabledProduction",
    "platformsJson",
    "rolesJson",
    "segmentsJson",
    "createdAt",
    "updatedAt"
) VALUES (
    'NAV_V2',
    'Nova navegação de cinco pilares.',
    'product-navigation',
    false,
    true,
    true,
    false,
    false,
    '[]',
    '[]',
    '[]',
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
);

UPDATE "FeatureFlag"
SET
    "enabledLocal" = true,
    "enabledTest" = true,
    "updatedAt" = CURRENT_TIMESTAMP
WHERE "key" = 'NAV_V2';
