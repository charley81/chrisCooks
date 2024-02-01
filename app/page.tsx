import { Metadata } from 'next'
import Link from 'next/link'
import { request } from '../lib/datocms'

const MEAL_ARTICLES_QUERY = `
query MealArticles {
  allArticles {
    title
    publishDate
    slug
    id
    excerpt
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
      <h1>main page</h1>
    </main>
  )
}
function performRequest() {
  throw new Error('Function not implemented.')
}
