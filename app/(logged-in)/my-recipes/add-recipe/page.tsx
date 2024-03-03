import { CreateRecipeForm } from '@/components/form/create-recipe-form'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from '@tanstack/react-query'

export default function AddRecipePage() {
  const queryClient = new QueryClient()
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-24 xl:px-48">
        <CreateRecipeForm />
      </div>
    </HydrationBoundary>
  )
}
