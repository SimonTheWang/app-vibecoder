"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Users, Briefcase, UserPlus, FolderOpen } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Find Coders", icon: Users },
    { href: "/projects", label: "Featured Projects", icon: FolderOpen },
    { href: "/quests", label: "Find Quests", icon: Briefcase },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-vibe-bg-soft/80 backdrop-blur-lg border-b border-vibe-blue-light/30 shadow-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-vibe-blue-dark">
          <Image src="/vibecoder_logo.png" alt="VibeCoder Logo" width={36} height={36} className="h-9 w-9" />
          PersonalVibeCoder
        </Link>

        <div className="flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => (
            <Button
              key={item.href}
              asChild
              variant="ghost"
              size="sm"
              className={cn(
                "text-vibe-text-medium hover:bg-vibe-blue-light/30 hover:text-vibe-blue-dark transition-colors duration-200 px-3 py-1.5",
                pathname === item.href && "text-vibe-blue-dark bg-vibe-blue-light/40 font-semibold",
              )}
            >
              <Link href={item.href}>
                <item.icon className="h-4 w-4 mr-1.5" />
                {item.label}
              </Link>
            </Button>
          ))}
          <Button
            asChild
            variant="outline"
            size="sm"
            className="bg-vibe-blue/90 border-vibe-blue text-white hover:bg-vibe-blue hover:border-vibe-blue-dark transition-colors duration-200 shadow-sm hover:shadow-md ml-2 px-3 py-1.5"
          >
            <Link href="/apply-as-coder">
              <UserPlus className="h-4 w-4 mr-2" />
              Apply as VibeCoder
            </Link>
          </Button>
        </div>
        {/* TODO: Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" className="text-vibe-blue-dark hover:bg-vibe-blue-light/30">
            <Image src="/vibecoder_logo.png" alt="Menu" width={24} height={24} />
          </Button>
        </div>
      </div>
    </nav>
  )
}
