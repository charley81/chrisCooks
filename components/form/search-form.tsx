'use client'

import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { CategoryTypes } from '@/types/my-recipes/types'

export default function SearchForm() {
  const searchParams = useSearchParams()
  const searchFromUrl = searchParams.get('search')?.toLowerCase() || ''
  const categoryFromUrl = searchParams.get('category')?.toLowerCase() || 'all'

  const router = useRouter()
  const pathname = usePathname()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const searchFromForm = formData.get('search') as string
    const categoryFromForm = formData.get('category') as string

    let params = new URLSearchParams()
    params.set('search', searchFromForm.toLowerCase())
    params.set('category', categoryFromForm.toLowerCase())

    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <form
      className="mb-16 p-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4"
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        placeholder="Search recipes"
        name="search"
        defaultValue={searchFromUrl}
      />
      <Select name="category" defaultValue={categoryFromUrl}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {['all', ...Object.values(CategoryTypes)].map(category => (
            <SelectItem key={category} value={category}>
              {category.toLowerCase()}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button type="submit">Search</Button>
    </form>
  )
}
