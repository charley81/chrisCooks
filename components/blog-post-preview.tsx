import Image from 'next/image'
import Link from 'next/link'
import { MealType } from '@/utils/types'

export default function BlogPostPreview({ meals }: any) {
  return (
    <ul className="">
      {meals.map((meal: MealType) => (
        <li key={meal.idMeal}>
          <Link href={`/meals/${meal.idMeal}`}>
            <div className=" relative h-48 mb-4">
              <Image
                src={meal.strMealThumb}
                alt={meal.strMeal}
                fill
                sizes="(max-width: 768px) 100vw,  (max-width: 1200px) 50vw"
                className="rounded-md object-cover"
              />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
