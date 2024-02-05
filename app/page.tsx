import { Metadata } from 'next'
import { UserButton } from '@clerk/nextjs'

export const metaData: Metadata = {
  title: 'chrisCooks',
  description: 'Landing page for chrisCooks website'
}

export default async function Home() {
  return (
    <main className="text-4xl p-4 max-w-xl mx-auto">
      <h1>Landing page</h1>
      <UserButton afterSignOutUrl="/" />
    </main>
  )
}
