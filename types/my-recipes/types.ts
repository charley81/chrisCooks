import { z } from 'zod'

export interface MyRecipeType {
  id: string
  createdAt: Date
  updatedAt: Date
  clerkId: string
  title: string
  category: string
  description: string
}

export enum CategoryTypes {
  Goat = 'Goat',
  Breakfast = 'Breakfast',
  Vegetarian = 'Vegetarian',
  Vegan = 'Vegan',
  Starter = 'Starter',
  Side = 'Side',
  Seafood = 'Seafood',
  Pork = 'Pork',
  Pasta = 'Pasta',
  Miscellaneous = 'Miscellaneous',
  Lamb = 'Lamb',
  Dessert = 'Dessert',
  Chicken = 'Chicken',
  Beef = 'Beef'
}

export const createAndEditRecipeSchema = z.object({
  title: z.string().min(2, {
    message: 'Title must be at least two characters'
  }),
  category: z.nativeEnum(CategoryTypes),
  description: z.string().min(2, {
    message: 'Message must be at least two characters'
  })
})

export type CreateAndEditRecipeType = z.infer<typeof createAndEditRecipeSchema>

export type GetAllRecipesActionTypes = {
  search?: string
  recipeCategory?: string
  page?: number
  limit?: number
}

export type PaginationContainerProps = {
  currentPage: number
  totalPages: number
}

export type PaginationButtonProps = {
  page: number
  activeClass: boolean
}
