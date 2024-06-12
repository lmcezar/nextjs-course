import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
  console.log(`db seed`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log("🚀 ~ main ~ e:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
