import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='

const getSingleMeal = async (id: string) => {
  const response = await fetch(`${url}${id}`)
  if (!response.ok) {
    throw new Error(`Fetching meal with id: ${id} failed`)
  }
  return response.json()
}

export default async function SingleMealPage({
  params
}: {
  params: { id: string }
}) {
  const data = await getSingleMeal(params.id)
  const title = data?.meals[0]?.strMeal
  const imgSrc = data?.meals[0]?.strMealThumb
  const category = data?.meals[0]?.strCategory
  const instructions = data?.meals[0]?.strInstructions

  return (
    <div className="max-w-4xl mx-auto mt-16 px-4">
      <Image
        src={imgSrc}
        alt={title}
        width={300}
        height={300}
        className="w-48 h-48"
        priority
      />
      <h3 className="text-4xl pt-4 font-bold">{title}</h3>
      <h4 className="text-1xl text-slate-600 mt-2 mb-2 font-bold">
        {category}
      </h4>
      <p className="text-slate-600 text-base">{instructions}</p>
      <Button className="mt-4" asChild>
        <Link href="/api-recipes">Back</Link>
      </Button>
    </div>
  )
}
