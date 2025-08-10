import prisma from "../lib/prisma.js";

async function main() {
  const count = await prisma.user.count();
  if (count === 0) {
    await prisma.user.createMany({
      data: [
        {
          firstName: "John",
          lastName: "Doe",
          email: "john@example.com",
        },
        {
          firstName: "Max",
          lastName: "Schwarz",
          email: "max@example.com",
        },
      ],
    });

    console.log("Dummy users created");
  } else {
    console.log("Users already exist, skipping seeding");
  }
}

main()
  .then(() => {
    console.log("Database seeded");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
