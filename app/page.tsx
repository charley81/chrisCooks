import { Metadata } from 'next'
import { BlogPostPreview } from '@/components'

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
      <header>
        <h1>Cooking with Chris</h1>
      </header>
      <section>
        <BlogPostPreview meals={data.meals} />
      </section>
    </main>
  )
}
