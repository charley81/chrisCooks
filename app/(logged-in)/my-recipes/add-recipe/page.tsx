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
      <div className="max-w-3xl mx-auto">
        <CreateRecipeForm />
      </div>
    </HydrationBoundary>
  )
}
