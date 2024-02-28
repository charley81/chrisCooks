'use client'
import LinksDropdown from './links-dropdown'
import { ThemeToggle } from './theme-toggle'
import { UserButton } from '@clerk/nextjs'
import Logo from './logo'
import { usePathname } from 'next/navigation'
import { MainNavDesktop } from './main-nav-desktop'

export default function Navbar() {
  const pathname = usePathname()
  return (
    <nav className="bg-muted py-4 sm:px-16 lg:px-24 px-4 flex items-center justify-between">
      <div>
        <Logo />
        <LinksDropdown />
      </div>
      <div className="w-full hidden lg:flex lg:justify-center lg:gap-x-4">
        <MainNavDesktop />
      </div>
      <div className="flex items-center gap-x-4">
        <ThemeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  )
}
