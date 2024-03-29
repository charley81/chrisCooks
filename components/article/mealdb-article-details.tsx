import { MealDbAPIArticle } from '../../types/articles/article-types'
import { truncateText } from '../../utils/helpers'
import Link from 'next/link'
import Image from 'next/image'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

export default function MealDbArticleDetails({
  meal
}: {
  meal: MealDbAPIArticle
}) {
  return (
    <div key={meal.idMeal} className="max-w-xl mx-auto">
      <Link href={`/api-recipes/${meal.idMeal}`}>
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
              <h3 className="text-2xl">{truncateText(meal.strMeal)}</h3>
            </TooltipTrigger>
            <TooltipContent>{meal.strMeal}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <p className="text-sm text-muted-foreground">{meal.strCategory}</p>
      </Link>
    </div>
  )
}
