'use client'
import { MyRecipeType } from '@/types/my-recipes/types'
import { useSearchParams } from 'next/navigation'
import { getAllRecipesAction } from '@/utils/actions'
import { useQuery } from '@tanstack/react-query'
import RecipeCard from './recipe-card'
import ButtonContainer from '../pagination/pagination-container'

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
  const count = data?.count || 0
  const page = data?.page || 0
  const totalPages = data?.totalPages || 0

  if (isPending) return <h2 className="text-xl">Please wait...</h2>
  if (recipes.length < 1)
    return <h2 className="text-xl">No recipes found...</h2>

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold capitalize">
          {count} recipes found
        </h2>
        {totalPages < 2 ? null : (
          <ButtonContainer currentPage={page} totalPages={totalPages} />
        )}
      </div>
      <div className="grid md:grid-cols-2 gap-4 p-8">
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </>
  )
}
