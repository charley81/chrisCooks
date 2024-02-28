import { Metadata } from 'next'
import Image from 'next/image'
import ShowcaseImg from '../assets/showcase.svg'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Logo from '@/components/navigation/logo'

export const metaData: Metadata = {
  title: 'chrisCooks',
  description: 'Landing page for chrisCooks website'
}

export default async function Home() {
  return (
    <main>
      <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
        <Logo />
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center">
        <div>
          <h1 className="capitalize text-4xl md:text-7xl font-bold">
            Yum yum yum...
          </h1>
          <p className="leading-loose max-w-md mt-4 text-slate-600">
            Get the latest recipes from Chris. Always cooking up that flavor.
            You can also search the meal API database for thousands of other
            recipes. Click the button below to get started.
          </p>
          <Button className="mt-4">
            <Link href="/recipes">Get started</Link>
          </Button>
        </div>
        <Image
          src={ShowcaseImg}
          alt="A person cooking on a grill"
          className="hidden lg:block"
        />
      </section>
    </main>
  )
}
