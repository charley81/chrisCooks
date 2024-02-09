import { MealDbAPIArticle } from '../utils/types'
import { truncateText } from '../utils/helpers'
import Link from 'next/link'
import Image from 'next/image'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

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
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <p className="text-2xl">{truncateText(meal.strMeal)}</p>
              </TooltipTrigger>
              <TooltipContent>{meal.strMeal}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <p className="text-sm font-bold text-slate-600">{meal.strCategory}</p>
        </Link>
      </li>
    </div>
  )
}
