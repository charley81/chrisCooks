'use client'
import Link from 'next/link'
import links from '@/utils/links'
import LinksDropdown from './links-dropdown'
import { ThemeToggle } from './theme-toggle'
import { UserButton } from '@clerk/nextjs'
import Logo from './logo'

export default function Navbar() {
  return (
    <nav className="bg-muted py-4 sm:px-16 lg:px-24 px-4 flex items-center justify-between">
      <div>
        <Logo />
        <LinksDropdown />
      </div>
      <ul className="w-full hidden lg:flex lg:justify-center lg:gap-x-4">
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
