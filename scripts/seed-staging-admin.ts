import { prisma } from "../lib/prisma";
import { seedStagingAdmin, stagingAdminInput } from "../lib/security/staging-admin-seed";

async function main() {
  await seedStagingAdmin(prisma, stagingAdminInput(process.env));
  console.info(JSON.stringify({ event: "staging_admin_seeded", ok: true }));
}

main()
  .catch(() => {
    // Prisma/bcrypt errors may contain query parameters or credentials.
    console.error(JSON.stringify({ event: "staging_admin_seed_failed", ok: false }));
    process.exitCode = 1;
  })
  .finally(async () => prisma.$disconnect());
