import Image from 'next/image'
import image1 from '../public/images/alex-munsell.jpg'

export default function BlogPostPreview() {
  return (
    <div className="text-base mt-4">
      <Image
        src={image1}
        alt="picture of a pork chop with potatoes and broccoli"
        className="rounded-sm"
      />
      <header className="mt-2 mb-2">
        <p className="text-lg font-bold">Pork Chop Perfection</p>
        <p className="text-sm">Aug 08, 2023</p>
      </header>
      <p className="text-slate-500">
        Indulge in a harmonious blend of flavors with our Pork Chop, Potatoes,
        and Broccoli recipe. Juicy pork chops, golden potatoes, and crisp
        broccoli create a visually appealing and satisfying dining experience,
        balancing savory, hearty, and wholesome elements on your plate.
      </p>
    </div>
  )
}
