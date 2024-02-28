const { PrismaClient } = require('@prisma/client')
const data = require('./mock-data.json')
const prisma = new PrismaClient()

async function main() {
  const clerkId = 'user_2bx8fEqgHJH3HjS5SeSkL5ZiaQb'
  const recipes = data.map(recipe => ({
    ...recipe,
    clerkId
  }))
  for (const recipe of recipes) {
    await prisma.recipe.create({
      data: recipe
    })
  }
}
main()
  .then(async () => await prisma.$disconnect())
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
