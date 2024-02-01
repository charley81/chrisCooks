import { Metadata } from 'next'
import BlogPostPreview from '@/components/blog-post-preview'
import Link from 'next/link'

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a'

const fetchMeals = async () => {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('Failed to fetch meals')
  }

  const data = await response.json()
  return data
}

export const metaData: Metadata = {
  title: 'chrisCooks',
  description: 'A cooking blog for chef Chris'
}

export default async function MealsPage() {
  const data = await fetchMeals()

  return (
    <main className="text-4xl p-4 max-w-xl mx-auto">
      <header className="flex items-end gap-4">
        <h1>Random Meals</h1>
        <Link href="/" className="text-blue-600 text-sm">
          back
        </Link>
      </header>
      <section className="mt-8">
        <BlogPostPreview meals={data.meals} />
      </section>
    </main>
  )
}
