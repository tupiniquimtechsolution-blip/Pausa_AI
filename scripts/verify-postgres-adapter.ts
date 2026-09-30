import { prisma } from "../lib/prisma";

async function main() {
  const result = await prisma.$queryRaw`SELECT 1 AS ok`;
  console.info(JSON.stringify({
    event: "postgres_adapter_ok",
    rows: Array.isArray(result) ? result.length : 1
  }));
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => prisma.$disconnect());
