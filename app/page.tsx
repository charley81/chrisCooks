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
    <main className="max-w-6xl mx-auto px-4">
      <header className="py-8">
        <Logo />
      </header>
      <section className="h-screen -mt-20 grid gap-4 lg:grid-cols-[1fr,1fr] items-center">
        <div className="max-w-lg mx-auto">
          <h1 className="capitalize text-4xl md:text-6xl font-bold">
            Yum yum yum...
          </h1>
          <p className="leading-loose mt-2 pl-2 text-muted-foreground">
            Hey there, lovely people! I'm Chris, your culinary maestro! Dive
            into the awesomeness of my latest recipes right{' '}
            <span className="text-primary">
              <Link href="/recipes">here</Link>
            </span>{' '}
            . Not enough? Well, buckle up, because you can explore a treasure
            trove of thousands of recipes from the meals db api! And guess what?
            You get your own personalized kitchen kingdom – save, edit, and
            delete your very own recipes on your authenticated, super cool
            personal profile. Let the flavor adventure begin! 🎉🍽️ #FoodieFun
          </p>
          <Button
            className="mt-16 font-bold w-full"
            variant="default"
            size="default"
          >
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
