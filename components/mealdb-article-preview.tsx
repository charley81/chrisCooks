import { MealDbAPIArticle } from '../utils/types'
import Link from 'next/link'
import Image from 'next/image'

export default function MealDbArticlePreview({
  meal
}: {
  meal: MealDbAPIArticle
}) {
  return (
    <div>
      <li key={meal.idMeal} className="mb-4">
        <Link href={`/recipes/${meal.idMeal}`}>
          <div className="relative h-60">
            <Image
              src={meal.strMealThumb}
              alt={meal.strMeal}
              fill
              className="rounded object-cover"
            />
          </div>
          <p className="text-2xl">{meal.strMeal}</p>
          <p className="text-sm font-bold text-slate-600">{meal.strCategory}</p>
        </Link>
      </li>
    </div>
  )
}
