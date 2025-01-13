import Link from "next/link"

import { ModeToggle } from "@/components/mode-toggle"

export default function Header() {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 pb-4 sm:px-6 lg:px-8">
      <div className="flex items-center space-x-4">
        <div>
          <Link
            href="/"
            title="Free OG Image Generator - Instantly Create Custom Open Graph Images Online"
            prefetch={false}
            className="flex items-center space-x-2"
          >
            <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
            <span className="hidden text-2xl font-bold md:block">
              Free OG Image Generator
            </span>
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <ModeToggle />
      </div>
    </nav>
  )
}
