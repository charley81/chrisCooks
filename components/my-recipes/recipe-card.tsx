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
  return (
    <Card className="bg-muted">
      <CardHeader>
        <CardTitle>{recipe.title}</CardTitle>
        <CardDescription>{recipe.category}</CardDescription>
      </CardHeader>
      <Separator className="mt-4" />
      <CardContent></CardContent>
      <CardFooter className="flex gap-4">
        <Button asChild size="sm">
          <Link href={`/my-recipes/${recipe.id}`}>edit</Link>
        </Button>
        <DeleteRecipeBtn />
      </CardFooter>
    </Card>
  )
}
