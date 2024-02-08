import Image from 'next/image'
import { request } from '../../../../lib/datocms'
import { DatoCMSArticleDetails } from '../../../../utils/types'

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
  }: DatoCMSArticleDetails = await request({
    query: SINGLE_ARTICLE_QUERY,
    variables: { slug }
  })

  return (
    <div className="max-w-4xl mx-auto mt-16 px-4">
      <div className="relative h-80">
        <Image
          src={article.coverImage.url}
          alt={article.title}
          fill
          className="rounded object-cover"
        />
      </div>
      <h1 className="text-4xl pt-4 font-bold">{article.title}</h1>
      <h3 className="text-1xl text-slate-600 mt-2 mb-2 font-bold">
        {article.category.name}
      </h3>
      <p className="text-slate-600 text-base">{article.content}</p>
    </div>
  )
}
