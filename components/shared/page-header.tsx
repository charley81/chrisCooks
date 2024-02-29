import PageTitle from './page-title'
import PageDescription from './page-description'

type PageHeaderTypes = {
  title: string
  description: string
}

export default function PageHeader({ title, description }: PageHeaderTypes) {
  return (
    <main className=" my-32">
      <PageTitle title={title} />
      <PageDescription description={description} />
    </main>
  )
}
