'use client'
import { MyRecipeType } from '@/types/my-recipes/types'
import { useSearchParams } from 'next/navigation'
import { getAllRecipesAction } from '@/utils/actions'
import { useQuery } from '@tanstack/react-query'
import RecipeCard from './recipe-card'
import ButtonContainer from '../pagination/pagination-container'
import Loader from '../shared/Loader'
import Link from 'next/link'

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

  if (isPending)
    return (
      <h2 className="text-2xl text-left max-w-6xl mx-auto">
        <Loader />
      </h2>
    )
  if (recipes.length < 1)
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-24 xl:px-48">
        <h2 className="text-md text-muted-foreground">
          Click{' '}
          <span>
            <Link
              href="my-recipes/add-recipe"
              className="text-primary font-extrabold text-4xl"
            >
              here
            </Link>
          </span>{' '}
          to start adding recipes
        </h2>
      </div>
    )

  return (
    <>
      <div className="max-w-6xl mx-auto flex flex-col p-4">
        <h2 className="text-sm self-end pb-4 font-bold text-muted-foreground">
          {count} recipes found
        </h2>
        {totalPages < 2 ? null : (
          <ButtonContainer currentPage={page} totalPages={totalPages} />
        )}
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4 px-4">
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </>
  )
}
