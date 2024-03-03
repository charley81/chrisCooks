import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

// const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='

// const getSingleMeal = async (id: string) => {
//   const response = await fetch(`${url}${id}`)
//   if (!response.ok) {
//     throw new Error(`Fetching meal with id: ${id} failed`)
//   }
//   return response.json()
// }

export default async function MyRecipesDetailsPage({
  params
}: {
  params: { id: string }
}) {
  // const data = await getSingleMeal(params.id)
  // const title = data?.meals[0]?.strMeal
  // const imgSrc = data?.meals[0]?.strMealThumb
  // const category = data?.meals[0]?.strCategory
  // const instructions = data?.meals[0]?.strInstructions

  return (
    <div className="max-w-4xl mx-auto mt-16 px-4">
      <h1 className="text-4xl">my-recipe details</h1>
    </div>
  )
}
