import Image from 'next/image'
import Link from 'next/link'
import { MealType } from '@/utils/types'

export default function BlogPostPreview({ meals }: any) {
  return (
    <ul className="">
      {meals.map((meal: MealType) => (
        <li key={meal.idMeal} className="mb-4">
          <Link href={`/meals/${meal.idMeal}`}>
            <div className=" relative h-48">
              <Image
                src={meal.strMealThumb}
                alt={meal.strMeal}
                fill
                sizes="(max-width: 768px) 100vw,  (max-width: 1200px) 50vw"
                className="rounded-md object-cover"
              />
            </div>
            <p className="text-2xl">{meal.strMeal}</p>
            <p className="text-sm font-bold">{meal.strCategory}</p>
            <p className="text-sm text-slate-600">
              {meal.strTags ? meal.strTags : 'no tags to display'}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  )
}
