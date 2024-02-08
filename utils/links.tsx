import { CookingPot, Utensils } from 'lucide-react'
import { NavLink } from './types'

const links: NavLink[] = [
  {
    href: '/recipes',
    label: 'recipes',
    icon: <CookingPot />
  },
  {
    href: '/api-recipes',
    label: 'api-recipes',
    icon: <Utensils />
  }
]

export default links
