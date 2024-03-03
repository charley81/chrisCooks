import { MyRecipeType } from '@/types/my-recipes/types'
import { CalendarDays, Pencil, Trash2 } from 'lucide-react'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Button } from '../ui/button'
import DeleteRecipeBtn from './delete-recipe-btn'
import { truncateText } from '@/utils/helpers'

export default function RecipeCard({ recipe }: { recipe: MyRecipeType }) {
  const date = new Date(recipe.createdAt).toLocaleDateString()
  const formattedDescription = recipe.description.split('\n\n')

  return (
    <Card className="flex flex-col static bg-card">
      <CardHeader>
        <header className="flex justify-between">
          <CardTitle>{recipe.title}</CardTitle>
          <CardDescription>
            <Button size="sm" variant="outline">
              <Link href={`/my-recipes/${recipe.id}`}>Show page</Link>
            </Button>
          </CardDescription>
        </header>

        <CardDescription>{recipe.category}</CardDescription>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground">
          {truncateText(recipe.description, 'md')}
        </p>
      </CardContent>

      <CardFooter className="flex justify-between flex-auto">
        <p className="flex items-center gap-2">
          <CalendarDays />
          {date}
        </p>
        <div className="flex gap-4 items-center">
          <Button asChild size="sm">
            <Link href={`/my-recipes/edit/${recipe.id}`}>
              <Pencil />
            </Link>
          </Button>
          <DeleteRecipeBtn id={recipe.id} />
        </div>
      </CardFooter>
    </Card>
  )
}
