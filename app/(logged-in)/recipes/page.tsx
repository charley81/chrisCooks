import { Metadata } from 'next'
import { request } from '../../../lib/datocms'
import DatoArticlePreview from '@/components/article/dato-article-preview'
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
      <PageHeader
        title="Check out my recipes"
        description="Hey! I see you've found my recipes. I add recipes weekly right here. I'm using a headless content management system (CMS), which is a user friendly user interface website thingy where I can easily enter recipes and show them to the world. Well enough of the tech talk 🤣. Check out some of my recipes. Just click and image to get more details. I hope you enjoy!"
      />
      <section className="">
        <DatoArticlePreview articles={allArticles} />
      </section>
    </main>
  )
}
