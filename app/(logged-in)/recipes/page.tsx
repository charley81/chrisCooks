/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next'
import { request } from '../../../lib/datocms'
import DatoArticlePreview from '@/components/dato-article-preview'

const MEAL_ARTICLES_QUERY = `
query MyQuery {
  allArticles {
    category {
      name
    }
    content
    id
    slug
    title
    coverImage {
      url
    }
  }
}
`

export const metaData: Metadata = {
  title: 'chrisCooks',
  description: 'A cooking blog for chef Chris'
}

export default async function RecipesPage() {
  const {
    data: { allArticles }
  } = await request({ query: MEAL_ARTICLES_QUERY })

  return (
    <main className="p-4 mt-8 max-w-xl mx-auto">
      <header className="flex items-end gap-4 px-4">
        <h1 className="text-4xl font-bold">Chris's recipes</h1>
      </header>
      <section className="mt-8 px-4">
        <DatoArticlePreview articles={allArticles} />
      </section>
    </main>
  )
}
