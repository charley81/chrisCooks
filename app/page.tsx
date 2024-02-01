import { Metadata } from 'next'
import { BlogPostPreview } from '@/components'
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

export default async function Home() {
  const data = await fetchMeals()

  return (
    <main className="text-4xl p-4 max-w-xl mx-auto">
      <Link href="/meals" className="text-sm text-blue-600">
        Random Meals
      </Link>
      <h1>main page</h1>
    </main>
  )
}
