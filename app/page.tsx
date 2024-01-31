import { Metadata } from 'next'

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
        <p className="text-base">blog post will go here</p>
      </section>
    </main>
  )
}
