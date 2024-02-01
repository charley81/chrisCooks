import { Metadata } from 'next'
import Link from 'next/link'
import { request } from '../lib/datocms'
import { ArticleType } from '../utils/types'

const MEAL_ARTICLES_QUERY = `
query MyQuery {
  allArticles {
    title
    publishDate
    slug
    id
    excerpt
    author {
      name
    }
    coverImage {
      responsiveImage {
        src
      }
    }
    content
  }
}
`

export const metaData: Metadata = {
  title: 'chrisCooks',
  description: 'A cooking blog for chef Chris'
}

export default async function Home() {
  const {
    data: { allArticles }
  } = await request({ query: MEAL_ARTICLES_QUERY })

  console.log(allArticles)
  return (
    <main className="text-4xl p-4 max-w-xl mx-auto">
      <Link href="/meals" className="text-sm text-blue-600">
        Random Meals
      </Link>
      <section className="mt-8">
        {allArticles.map((article: ArticleType) => (
          <Link
            href={`/recipe/${article.id}`}
            key={article.id}
            className="block mb-4"
          >
            <h3 className="text-4xl">{article.title}</h3>
            <p className="text-base">{article.excerpt}</p>
            <p className="text-base text-slate-600">{article.author.name}</p>
          </Link>
        ))}
      </section>
    </main>
  )
}
function performRequest() {
  throw new Error('Function not implemented.')
}
