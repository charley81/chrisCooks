import { PageDescriptionTypes } from '@/types/articles/article-types'

export default function PageDescription({ description }: PageDescriptionTypes) {
  return (
    <h3 className="text-md text-muted-foreground text-base">{description}</h3>
  )
}
