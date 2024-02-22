export default function PageTitle({ title }: { title: string }) {
  return (
    <header className="flex items-end gap-4 px-4">
      <h1 className="text-4xl font-bold">{title}</h1>
    </header>
  )
}
