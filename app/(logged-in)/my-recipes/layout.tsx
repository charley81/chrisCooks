import { PropsWithChildren } from 'react'
import MyRecipesMenu from '@/components/my-recipes-menu'

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <main>
      <MyRecipesMenu />
      <div>{children}</div>
    </main>
  )
}
