import Link from 'next/link'
import Image from 'next/image'

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
  const instructions = data?.meals[0]?.strInstructions

  return (
    <div>
      <Link href="/meals">back to meals</Link>
      <Image
        src={imgSrc}
        alt={title}
        width={300}
        height={300}
        className="w-48 h-48"
        priority
      />
      <h3>{title}</h3>
      <p>{instructions}</p>
    </div>
  )
}
