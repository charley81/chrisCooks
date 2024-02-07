import Image from 'next/image'
import Link from 'next/link'
import { DatoArticleProps } from '@/utils/types'

export default function DatoArticlePreview({ articles }: DatoArticleProps) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {articles.map(article => {
        return (
          <li key={article.slug} className="mb-4">
            <Link href={`/recipes/${article.slug}`}>
              <div className="relative h-60">
                <Image
                  src={article.coverImage.url}
                  alt={article.title}
                  fill
                  className="rounded object-cover"
                />
              </div>
              <p className="text-2xl">{article.title}</p>
              <p className="text-sm font-bold text-slate-600">
                {article.category.name}
              </p>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
