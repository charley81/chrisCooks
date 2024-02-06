'use client'
import Link from 'next/link'
import links from '@/utils/links'
import LinksDropdown from './links-dropdown'
import ThemeToggle from './theme-toggle'
import { UserButton } from '@clerk/nextjs'

export default function Navbar() {
  return (
    <nav className="bg-muted py-4 sm:px-16 lg:px-24 px-4 flex items-center justify-between">
      <div>
        <LinksDropdown />
      </div>
      <ul className="flex items-center gap-x-4 hidden">
        {links.map(link => (
          <li key={link.label}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-x-4">
        <ThemeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  )
}
