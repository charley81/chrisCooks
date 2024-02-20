'use server'

import prisma from './db'
import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import { Prisma } from '@prisma/client'
import dayjs from 'dayjs'
import {
  CreateAndEditRecipeSchema,
  CreateAndEditRecipeType,
  MyRecipeType
} from '@/types/my-recipes/types'

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
