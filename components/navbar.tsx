'use client'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import links from '@/utils/links'
import Logo from './logo'

export default function Navbar() {
  const [open, isOpen] = useState(false)

  return (
    <nav className="w-full border-b md:border-0">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/recipes">
            <Logo />
          </Link>
          <button
            onClick={() => isOpen(!open)}
            className="md:hidden text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
          >
            <Menu />
          </button>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block  md:pb-0 md:mt-0 ${
            open ? 'block' : 'hidden'
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {links.map(link => (
              <li
                key={link.label}
                className="text-gray-600 hover:text-blue-700"
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
