import { PageDescriptionTypes } from '@/utils/types'

export default function PageDescription({ description }: PageDescriptionTypes) {
  return <h3 className="text-md px-4 text-slate-600">{description}</h3>
}
