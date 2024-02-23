import RecipeList from '@/components/my-recipes/recipe-list'
import SearchForm from '@/components/form/search-form'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from '@tanstack/react-query'
import { getAllRecipesAction } from '@/utils/actions'

export default async function MyRecipesPage() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['recipes', '', 'all', 1],
    queryFn: () => getAllRecipesAction({})
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SearchForm />
      <RecipeList />
    </HydrationBoundary>
  )
}
