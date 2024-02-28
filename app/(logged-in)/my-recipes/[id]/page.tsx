import EditRecipeForm from '@/components/form/edit-recipe-form'
import { getSingleRecipeAction } from '@/utils/actions'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from '@tanstack/react-query'

export default async function RecipeDetailsPage({
  params
}: {
  params: { id: string }
}) {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['recipe', params.id],
    queryFn: () => getSingleRecipeAction(params.id)
  })
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <EditRecipeForm recipeId={params.id} />
    </HydrationBoundary>
  )
}
