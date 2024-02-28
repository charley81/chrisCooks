import { PropsWithChildren } from 'react'
import Navbar from '@/components/navigation/navbar'

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <main>
      <Navbar />
      <div>{children}</div>
    </main>
  )
}
