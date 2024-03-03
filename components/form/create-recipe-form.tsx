'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  CategoryTypes,
  createAndEditRecipeSchema,
  CreateAndEditRecipeType
} from '@/types/my-recipes/types'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import {
  CustomFormInput,
  CustomFormSelect,
  CustomFormTextArea
} from './custom-form'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createRecipeAction } from '@/utils/actions'
import { useToast } from '../ui/use-toast'
import { useRouter } from 'next/navigation'

export function CreateRecipeForm() {
  const form = useForm<CreateAndEditRecipeType>({
    resolver: zodResolver(createAndEditRecipeSchema),
    defaultValues: {
      title: '',
      category: CategoryTypes.Beef,
      description: ''
    }
  })

  const queryClient = useQueryClient()
  const { toast } = useToast()
  const router = useRouter()
  const { mutate, isPending } = useMutation({
    mutationFn: (values: CreateAndEditRecipeType) => createRecipeAction(values),
    onSuccess: data => {
      if (!data) {
        toast({ description: 'There was an error' })
        return
      }
      toast({ description: 'Great! Recipe created' })
      queryClient.invalidateQueries({ queryKey: ['title'] })
      queryClient.invalidateQueries({ queryKey: ['category'] })
      queryClient.invalidateQueries({ queryKey: ['description'] })

      router.push('/my-recipes')
    }
  })

  function onSubmit(values: CreateAndEditRecipeType) {
    mutate(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="pt-16 grid gap-8">
        <div className="grid lg:grid-cols-2 lg:gap-1">
          <CustomFormInput name="title" control={form.control} />
          <CustomFormSelect
            items={Object.values(CategoryTypes)}
            name="category"
            control={form.control}
            label="category"
          />
        </div>
        <CustomFormTextArea name="description" control={form.control} />
        <div className="flex gap-2">
          <Button type="submit" disabled={isPending} size="lg">
            {isPending ? 'Loading...' : 'Submit'}
          </Button>
          <Button
            onClick={() => router.back()}
            size="lg"
            disabled={isPending}
            variant="outline"
          >
            Back
          </Button>
        </div>
      </form>
    </Form>
  )
}
