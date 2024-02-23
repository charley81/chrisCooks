'use client'

import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { usePathname, useParams, useSearchParams } from 'next/navigation'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { CategoryTypes } from '@/types/my-recipes/types'

export default function SearchForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const search = formData.get('search') as string
    const category = formData.get('category') as string
    console.log(search, category)
  }

  return (
    <form
      className="mb-16 p-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4"
      onSubmit={handleSubmit}
    >
      <Input type="text" placeholder="Search recipes" name="search" />
      <Select name="category">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {['all', ...Object.values(CategoryTypes)].map(category => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button type="submit">Search</Button>
    </form>
  )
}
