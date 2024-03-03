import Image from 'next/image'
import Link from 'next/link'
import { DatoArticleProps } from '@/types/articles/article-types'
import { truncateText } from '@/utils/helpers'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

export default function DatoArticlePreview({ articles }: DatoArticleProps) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <p className="text-2xl">{truncateText(article.title)}</p>
                  </TooltipTrigger>
                  <TooltipContent>{article.title}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <p className="text-sm text-muted-foreground">
                {article.category.name}
              </p>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
