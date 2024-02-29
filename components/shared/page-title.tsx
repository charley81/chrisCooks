export default function PageTitle({ title }: { title: string }) {
  return (
    <header>
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
    </header>
  )
}
