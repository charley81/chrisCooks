'use client'
import { MyRecipeType } from '@/types/my-recipes/types'
import { useSearchParams } from 'next/navigation'
import { getAllRecipesAction } from '@/utils/actions'
import { useQuery } from '@tanstack/react-query'
import RecipeCard from './recipe-card'

export default function RecipeList() {
  const searchParams = useSearchParams()
  const search = searchParams.get('search') || ''
  const recipeCategory = searchParams.get('category') || ''

  const pageNumber = Number(searchParams.get('page')) || 1

  const { data, isPending } = useQuery({
    // constants added to queryKey because we want to fetch if the value changes otherwise it's going to be cached
    queryKey: ['recipes', search, recipeCategory, pageNumber],
    queryFn: () =>
      // pass in constants here because we want to use them to query the DB
      getAllRecipesAction({ search, recipeCategory, page: pageNumber })
  })

  const recipes = data?.recipes || []

  if (isPending) return <h2 className="text-xl">Please wait...</h2>
  if (recipes.length < 1)
    return <h2 className="text-xl">No recipes found...</h2>

  return (
    <>
      {/* button container  */}
      <div className="grid mg:grid-cols-2 gap-8">
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </>
  )
}
