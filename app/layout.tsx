import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster" // Ensure Toaster is imported
import { Navbar } from "@/components/navbar" // Import Navbar

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PersonalVibeCoder Marketplace",
  description: "Find coders and quests by vibe!",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="ligh" enableSystem disableTransitionOnChange>
          <Navbar /> {/* Add Navbar here */}
          <main className="pt-20">
            {" "}
            {/* Add padding-top to offset fixed navbar */}
            {children}
          </main>
          <Toaster /> {/* Add Toaster for shadcn/ui toasts */}
        </ThemeProvider>
      </body>
    </html>
  )
}
