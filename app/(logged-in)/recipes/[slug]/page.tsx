import Image from 'next/image'
import { request } from '../../../../lib/datocms'
import { Variable } from 'lucide-react'

const SINGLE_ARTICLE_QUERY = `
query MyQuery($slug: String) {
  article(filter: {slug: {eq: $slug}}) {
    content
    category {
      name
    }
    id
    slug
    title
    coverImage {
      url
    }
  }
}
`

export default async function DatoArticleDetails({
  params
}: {
  params: { slug: string }
}) {
  const slug = params.slug

  const {
    data: { article }
  } = await request({ query: SINGLE_ARTICLE_QUERY, variables: { slug } })

  console.log(article)

  return <div>DatoArticleDetails</div>
}
