'use client'

import { usePathname } from 'next/navigation'

export default function Logo() {
  const pathname = usePathname()

  return (
    <h3
      className={`text-4xl font-bold ${pathname !== '/' && 'hidden lg:block'}`}
    >
      chris<span className="text-primary">Cooks</span>
    </h3>
  )
}
