import { Metadata } from 'next'
import BlogPostPreview from '@/components/article/dato-article-preview'
import Link from 'next/link'
import PageTitle from '@/components/shared/page-title'
import MealsDbRecipeList from '@/components/article/mealsdb-recipe-list'
import PageHeader from '@/components/shared/page-header'

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
    <main className="max-w-6xl mx-auto px-4">
      <PageHeader
        title="Lets search for something special"
        description="Welcome to tha land of endless possibilities! Just perform a quick search and find your next recipe. This page gets recipes from a third party API called 'The Meals DB'. Ahh, he we go with the tech stuff again. Well, enjoy searching thousands of recipes!"
      />
      <MealsDbRecipeList meals={meals} />
    </main>
  )
}
