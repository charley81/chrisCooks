'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  CategoryTypes,
  createAndEditRecipeSchema,
  CreateAndEditRecipeType
} from '@/types/my-recipes/types'
import { Button } from '../ui/button'
import { Form } from '../ui/form'
import {
  CustomFormInput,
  CustomFormSelect,
  CustomFormTextArea
} from './custom-form'
import { getSingleRecipeAction, updateRecipeAction } from '@/utils/actions'
import { useToast } from '../ui/use-toast'
import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function EditRecipeForm({ recipeId }: { recipeId: string }) {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  const router = useRouter()

  const { data } = useQuery({
    queryKey: ['recipe', recipeId],
    queryFn: () => getSingleRecipeAction(recipeId)
  })

  const { mutate, isPending } = useMutation({
    mutationFn: (values: CreateAndEditRecipeType) =>
      updateRecipeAction(recipeId, values),
    onSuccess: data => {
      if (!data) {
        toast({
          description: 'there was an error'
        })
        return
      }
      toast({ description: 'recipe updated' })
      queryClient.invalidateQueries({ queryKey: ['recipes'] })
      queryClient.invalidateQueries({ queryKey: ['recipe', recipeId] })
      router.push('/my-recipes')
    }
  })

  const form = useForm<CreateAndEditRecipeType>({
    resolver: zodResolver(createAndEditRecipeSchema),
    defaultValues: {
      title: data?.title || '',
      category: (data?.category as CategoryTypes) || CategoryTypes.Chicken,
      description: data?.description || ''
    }
  })

  function onSubmit(values: CreateAndEditRecipeType) {
    mutate(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-muted rounded max-w-6xl mx-auto mt-16 p-4 "
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="capitalize font-semibold text-4xl pt-4 px-2">
            Edit recipe
          </h2>
          <Button onClick={() => router.back()}>Back</Button>
        </div>
        <div className="grid gap-4 p-2">
          <div className="grid md:grid-cols-2 gap-4">
            <CustomFormInput name="title" control={form.control} />
            <CustomFormSelect
              name="category"
              control={form.control}
              label="recipe category"
              items={Object.values(CategoryTypes)}
            />
          </div>
          <CustomFormTextArea name="description" control={form.control} />
          <Button
            type="submit"
            disabled={isPending}
            className="self-end capitalize mt-4"
          >
            {isPending ? 'updating...' : 'edit recipe'}
          </Button>
        </div>
      </form>
    </Form>
  )
}
