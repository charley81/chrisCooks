import { Metadata } from 'next'
import { request } from '../../../lib/datocms'
import DatoArticlePreview from '@/components/article/dato-article-preview'
import PageTitle from '@/components/shared/page-title'
import PageDescription from '@/components/shared/page-description'
import PageHeader from '@/components/shared/page-header'

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
    <main className="max-w-6xl mx-auto px-4">
      <PageHeader />
      <section className="">
        <DatoArticlePreview articles={allArticles} />
      </section>
    </main>
  )
}
