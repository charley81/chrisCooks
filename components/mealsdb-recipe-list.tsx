import { MealsDBListProps } from '@/utils/types'
import MealDbArticlePreview from './mealdb-article-preview'
import Link from 'next/link'

export default function MealsDbRecipeList({ meals }: MealsDBListProps) {
  return (
    <ul>
      {meals.map(item => (
        <Link key={item.strCategory} href={`/api-recipes/${item.idMeal}`}>
          <li className="text-4xl">{item.strMeal}</li>
        </Link>
      ))}
    </ul>
  )
}
