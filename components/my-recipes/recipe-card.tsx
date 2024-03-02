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
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/ui/hover-card'

export default function RecipeCard({ recipe }: { recipe: MyRecipeType }) {
  const date = new Date(recipe.createdAt).toLocaleDateString()
  const formattedDescription = recipe.description.split('\n\n')

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Card className="bg-card flex flex-col static">
          {/* header */}
          <CardHeader>
            <CardTitle>{recipe.title}</CardTitle>
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
                <Link href={`/my-recipes/${recipe.id}`}>
                  <Pencil />
                </Link>
              </Button>
              <DeleteRecipeBtn id={recipe.id} />
            </div>
          </CardFooter>
        </Card>
      </HoverCardTrigger>
      <HoverCardContent className="w-96" sideOffset={-500}>
        <h3 className="text-2xl font-bold">{recipe.title}</h3>
        {truncateText(recipe.description, 'lg')
          .split('\n\n')
          .map(description => (
            <p key={description} className="my-8 text-muted-foreground">
              {description}
            </p>
          ))}
        <Button>View Page</Button>
      </HoverCardContent>
    </HoverCard>
  )
}
