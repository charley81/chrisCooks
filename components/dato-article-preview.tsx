import Image from 'next/image'
import Link from 'next/link'
import { DatoArticlePreviewProps } from '@/utils/types'

export default function DatoArticlePreview({ meals }: DatoArticlePreviewProps) {
  return (
    <ul className="">
      {meals.map(meal => {
        return (
          <li key={meal.slug} className="mb-4">
            <Link href={`/meals/${meal.slug}`}>
              <div className="relative h-60">
                <Image
                  src={meal.coverImage.url}
                  alt={meal.title}
                  fill
                  className="rounded object-cover"
                />
              </div>
              <p className="text-2xl">{meal.title}</p>
              <p className="text-sm font-bold text-slate-600">
                {meal.category.name}
              </p>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
