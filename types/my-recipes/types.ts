import { z } from 'zod'

export interface MyRecipe {
  title: string
  category: string
  description: string
}

export enum Categories {
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

export const CreateAndEditRecipeSchema = z.object({
  title: z.string().min(2, {
    message: 'Title must be at least two characters'
  }),
  category: z.nativeEnum(Categories),
  description: z.string().min(2, {
    message: 'Message must be at least two characters'
  })
})

export type CreateAndEditRecipeType = z.infer<typeof CreateAndEditRecipeSchema>
