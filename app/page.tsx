import { Metadata } from 'next'
import { BlogPostPreview } from '@/components'

export const metaData: Metadata = {
  title: 'chrisCooks',
  description: 'A cooking blog for chef Chris'
}

export default function Home() {
  return (
    <main className="text-4xl p-4 max-w-xl mx-auto">
      <header>
        <h1>Cooking with Chris</h1>
      </header>
      <section>
        <BlogPostPreview />
      </section>
    </main>
  )
}
