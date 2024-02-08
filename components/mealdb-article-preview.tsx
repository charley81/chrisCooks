import { MealDbAPIArticle } from '../utils/types'

export default function MealDbArticlePreview({
  meal
}: {
  meal: MealDbAPIArticle
}) {
  return (
    <div>
      <h1>{meal.strMeal}</h1>
    </div>
  )
}
