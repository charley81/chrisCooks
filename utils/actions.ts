'use server'

import prisma from './db'
import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import { Prisma } from '@prisma/client'
import dayjs from 'dayjs'
import {
  CreateAndEditRecipeSchema,
  CreateAndEditRecipeType,
  MyRecipeType,
  GetAllRecipesActionTypes
} from '@/types/my-recipes/types'
import { CloudCog } from 'lucide-react'

function authenticateAndRedirect(): string {
  const { userId } = auth()
  if (!userId) redirect('/')
  return userId
}

export async function createRecipeAction(
  values: CreateAndEditRecipeType
): Promise<MyRecipeType | null> {
  await new Promise(resolve => setTimeout(resolve, 3000))
  const userId = authenticateAndRedirect()
  try {
    CreateAndEditRecipeSchema.parse(values)
    const recipe: MyRecipeType = await prisma.recipe.create({
      data: {
        ...values,
        clerkId: userId
      }
    })
    return recipe
  } catch (error) {
    console.error(error)
    return null
  }
}

export async function getAllRecipesAction({
  search,
  recipeCategory,
  page = 1,
  limit = 10
}: GetAllRecipesActionTypes): Promise<{
  recipes: MyRecipeType[]
  count: number
  page: number
  totalPages: number
}> {
  const userId = authenticateAndRedirect()

  try {
    let whereClause: Prisma.RecipeWhereInput = { clerkId: userId }

    if (search) {
      whereClause = {
        ...whereClause,
        OR: [
          {
            category: {
              contains: search
            }
          },
          {
            title: {
              contains: search
            }
          }
        ]
      }
    }

    if (recipeCategory && recipeCategory !== 'all') {
      whereClause = {
        ...whereClause,
        category: recipeCategory
      }
    }

    const recipes: MyRecipeType[] = await prisma.recipe.findMany({
      where: whereClause,
      orderBy: {
        createdAt: 'desc'
      }
    })

    return { recipes, count: 0, page: 1, totalPages: 0 }
  } catch {
    return { recipes: [], count: 0, page: 1, totalPages: 0 }
  }
}

export async function deleteRecipeAction(
  id: string
): Promise<MyRecipeType | null> {
  const userId = authenticateAndRedirect()

  try {
    const recipe: MyRecipeType = await prisma.recipe.delete({
      where: {
        id,
        clerkId: userId
      }
    })
    return recipe
  } catch (error) {
    return null
  }
}
