import type { LucideIcon } from "lucide-react"

export interface CoderProfile {
  id: string
  name: string
  vibe: string
  platform: "desktop" | "mobile"
  bio: string
  fullBio: string
  location: string
  timezone: string
  rating: number
  reviews: number
  projects: number // Assuming this is a count
  likes: number // Assuming this is a count
  status: "Available" | "Busy" | "Offline" // Example statuses
  avatar: string // URL or path to avatar image
  themeIcon: string // Emoji or character for theme
  skills: string[]
  recentProjects: Project[]
  icon: LucideIcon // Lucide icon component
  theme: CoderTheme
}

export interface Project {
  name: string
  description: string
  tech: string[]
  // Optional: image?: string; link?: string;
}

export interface CoderTheme {
  cardBg: string
  border: string
  headerBg: string
  titleText: string
  descText: string
  badgeBg: string
  badgeText: string
  avatarBg: string
  skillBadge: string
  projectBg: string
  primaryButton: string
  pattern?: string // Optional background pattern class
}
