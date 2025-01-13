import Link from "next/link"
import { GithubIcon } from "lucide-react"
import { FaBluesky, FaXTwitter } from "react-icons/fa6"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <nav className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href={siteConfig.url}
              title="Free OG Image Generator"
              prefetch={false}
              className="font-mono font-semibold hover:underline"
            >
              Free OG Image Generator
            </Link>

            <Button variant="link" asChild>
              <Link
                href="/guides"
                prefetch={false}
                title="Guides"
                aria-label="Guides"
              >
                Guides
              </Link>
            </Button>
          </div>

          <div className="flex flex-col items-start gap-2 sm:items-start">
            <div className="flex items-center gap-x-4">
              
              <ModeToggle />
            </div>
          </div>
        </nav>
      </div>
    </footer>
  )
}
