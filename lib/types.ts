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
  projects: number
  likes: number
  status: "Available" | "Busy" | "Offline"
  avatar: string
  themeIcon: string // Emoji or character for theme
  skills: string[]
  recentProjects: Project[]
  workExperience: WorkExperience[]
  compensation: CompensationInfo
  testimonials: Testimonial[]
  icon: LucideIcon
  theme: CoderTheme
  socialLinks?: {
    github?: string
    twitter?: string
    linkedin?: string
    website?: string
  }
}

export interface Project {
  name: string
  description: string
  tech: string[]
  duration?: string
  role?: string
  teamSize?: string
  outcome?: string
}

// New Featured Project interface for the projects directory
export interface FeaturedProject {
  id: string
  name: string
  description: string
  longDescription: string
  tech: string[]
  category: string
  duration: string
  role: string
  teamSize: string
  outcome: string
  metrics?: string[]
  images: string[]
  liveUrl?: string
  githubUrl?: string
  caseStudyUrl?: string
  featured: boolean
  createdAt: string
  // Coder information
  coderId: string
  coderName: string
  coderAvatar: string
  coderVibe: string
  coderRating: number
  coderStatus: "Available" | "Busy" | "Offline"
  // Project theme (inherited from coder)
  theme: ProjectTheme
}

export interface ProjectTheme {
  cardBg: string
  border: string
  titleText: string
  descText: string
  badgeBg: string
  badgeText: string
  primaryButton: string
  accentColor: string
  pattern?: string
}

export interface WorkExperience {
  company: string
  role: string
  duration: string
  location: string
  description: string
  technologies: string[]
  companyLogo?: string
}

export interface CompensationInfo {
  hourlyRate: string
  projectRate: string
  availability: string
  preferredEngagement: "Hourly" | "Project-based" | "Both"
}

export interface Testimonial {
  id: string
  reviewerName: string
  reviewerRole: string
  reviewerCompany: string
  reviewerAvatar?: string
  rating: number
  comment: string
  date: string
  projectWorkedOn?: string
}

export interface CoderTheme {
  cardBg: string
  border: string
  headerBg?: string
  titleText: string
  descText: string
  badgeBg: string
  badgeText: string
  avatarBg?: string
  skillBadge: string
  projectBg: string
  primaryButton: string
  pattern?: string
}

// Quest Types (unchanged)
export interface Quest {
  id: string
  title: string
  description: string
  prize: string
  status: "Open" | "In Progress" | "Completed" | "Featured"
  postedBy: string
  postedByAvatar?: string
  skillsNeeded: string[]
  timeline: string
  vibe: string
  icon: LucideIcon
  theme: QuestTheme
  applicants?: number
}

export interface QuestTheme {
  cardBg: string
  border: string
  titleText: string
  descText: string
  prizeText: string
  skillBadge: string
  primaryButton: string
  iconBg?: string
  pattern?: string
}
