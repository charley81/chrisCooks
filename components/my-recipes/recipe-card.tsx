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
import { Separator } from '../ui/separator'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import RecipeInfo from './recipe-info'
import DeleteRecipeBtn from './delete-recipe-btn'

export default function RecipeCard({ recipe }: { recipe: MyRecipeType }) {
  const date = new Date(recipe.createdAt).toLocaleDateString()

  return (
    <Card className="bg-muted">
      {/* header */}
      <CardHeader>
        <CardTitle>{recipe.title}</CardTitle>
        <CardDescription>{recipe.category}</CardDescription>
      </CardHeader>
      <Separator className="mt-4" />

      {/* description */}
      <CardContent>
        <p>{recipe.description}</p>
      </CardContent>

      {/* footer */}
      <CardFooter className="flex justify-between">
        <p className="flex items-center gap-2">
          <CalendarDays />
          {date}
        </p>
        <div className="flex gap-4 items-center">
          <Button asChild size="sm">
            <Link href={`/my-recipes/${recipe.id}`}>
              <Pencil />
            </Link>
          </Button>
          <DeleteRecipeBtn id={recipe.id} />
        </div>
      </CardFooter>
    </Card>
  )
}
