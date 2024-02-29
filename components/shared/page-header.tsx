import PageTitle from './page-title'
import PageDescription from './page-description'

export default function PageHeader() {
  return (
    <main className=" my-32">
      <PageTitle title="Check out my recipes" />
      <PageDescription description="Hey! I see you've found my recipes. I add recipes weekly right here. I'm using a headless content management system (CMS), which is a user friendly user interface website thingy where I can easily enter recipes and show them to the world. Well enough of the tech talk 🤣. Check out some of my recipes. Just click and image to get more details. I hope you enjoy!" />
    </main>
  )
}
