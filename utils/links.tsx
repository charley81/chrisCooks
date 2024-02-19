import { CookingPot, Utensils } from 'lucide-react'
import { NavLink } from '../types/articles/article-types'

const links: NavLink[] = [
  {
    href: '/recipes',
    label: 'recipes',
    icon: <CookingPot />
  },
  {
    href: '/api-recipes',
    label: 'api recipes',
    icon: <Utensils />
  },
  {
    href: '/my-recipes',
    label: 'my recipes',
    icon: <Utensils />
  }
]

export default links
