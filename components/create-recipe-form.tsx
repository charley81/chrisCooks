'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  MyRecipe,
  Categories,
  CreateAndEditRecipeSchema,
  CreateAndEditRecipeType
} from '@/types/my-recipes/types'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import {
  CustomFormInput,
  CustomFormSelect,
  CustomFormTextArea
} from './custom-form'

export function CreateRecipeForm() {
  const form = useForm<CreateAndEditRecipeType>({
    resolver: zodResolver(CreateAndEditRecipeSchema),
    defaultValues: {
      title: '',
      category: Categories.Beef,
      message: ''
    }
  })

  function onSubmit(data: CreateAndEditRecipeType) {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CustomFormInput name="title" control={form.control} />
        <CustomFormSelect
          items={Object.values(Categories)}
          name="category"
          control={form.control}
          label="category"
        />
        <CustomFormTextArea name="description" control={form.control} />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
