import { MealsDBListProps } from '@/utils/types/articles/article-types'
import MealDbArticlePreview from './mealdb-article-details'
import Link from 'next/link'

export default function MealsDbRecipeList({ meals }: MealsDBListProps) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {meals.map(meal => (
        <Link key={meal.strCategory} href={`/api-recipes/${meal.idMeal}`}>
          <li className="text-4xl">
            <MealDbArticlePreview meal={meal} />
          </li>
        </Link>
      ))}
    </ul>
  )
}
