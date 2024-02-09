import { MealsDBListProps } from '@/utils/types'
import MealDbArticlePreview from './mealdb-article-preview'
import Link from 'next/link'

export default function MealsDbRecipeList({ meals }: MealsDBListProps) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
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
