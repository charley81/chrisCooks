import { Metadata } from 'next'
import BlogPostPreview from '@/components/article/dato-article-preview'
import Link from 'next/link'
import PageTitle from '@/components/shared/page-title'
import MealsDbRecipeList from '@/components/article/mealsdb-recipe-list'

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

export default async function ApiRecipesPage() {
  const data = await fetchMeals()
  const { meals } = data

  return (
    <main className="p-4 mt-8 max-w-xl mx-auto">
      <PageTitle title="Mead DB API" />
      <MealsDbRecipeList meals={meals} />
    </main>
  )
}
