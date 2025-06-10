"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { featuredProjects, getFeaturedProjects, getProjectsByCategory, searchProjects } from "@/app/projects-data"
import type { FeaturedProject } from "@/lib/types"
import {
  Search,
  Filter,
  Star,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Briefcase,
  TrendingUp,
  Award,
  Eye,
  Code,
} from "lucide-react"
import { useRouter } from "next/navigation"

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false)
  const router = useRouter()

  // Add these state variables after the existing ones
  const [sortBy, setSortBy] = useState("featured")
  const [filterByDuration, setFilterByDuration] = useState("all")
  const [filterByTech, setFilterByTech] = useState("all")
  const [filterByCoderRating, setFilterByCoderRating] = useState("all")

  const handleNavigateToSignup = (source: string) => {
    router.push(`/signup?source=${encodeURIComponent(source)}`)
  }

  // Filter projects based on search and category
  const getFilteredProjects = () => {
    let projects = featuredProjects

    if (showFeaturedOnly) {
      projects = getFeaturedProjects()
    }

    if (selectedCategory !== "all") {
      projects = getProjectsByCategory(selectedCategory)
    }

    if (searchTerm) {
      projects = searchProjects(searchTerm)
    }

    // Apply additional filters
    projects = projects.filter((project) => {
      const matchesDuration =
        filterByDuration === "all" ||
        (filterByDuration === "short" && project.duration.includes("1-3")) ||
        (filterByDuration === "medium" && (project.duration.includes("4-6") || project.duration.includes("3-5"))) ||
        (filterByDuration === "long" &&
          (project.duration.includes("7") || project.duration.includes("8") || project.duration.includes("10")))

      const matchesTech =
        filterByTech === "all" || project.tech.some((tech) => tech.toLowerCase().includes(filterByTech.toLowerCase()))

      const matchesCoderRating =
        filterByCoderRating === "all" ||
        (filterByCoderRating === "4.5+" && project.coderRating >= 4.5) ||
        (filterByCoderRating === "4.8+" && project.coderRating >= 4.8)

      return matchesDuration && matchesTech && matchesCoderRating
    })

    // Apply sorting
    return projects.sort((a, b) => {
      switch (sortBy) {
        case "featured":
          return b.featured ? 1 : -1
        case "rating":
          return b.coderRating - a.coderRating
        case "newest":
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        case "name":
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })
  }

  const filteredProjects = getFilteredProjects()

  return (
    <div className="min-h-screen bg-gradient-to-br from-vibe-bg-soft via-vibe-blue-light/20 to-vibe-pink/10 text-vibe-text-dark pt-8 md:pt-12">
      {/* Floating Orbs Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute rounded-full bg-gradient-to-r from-vibe-blue/10 to-vibe-pink/10 animate-float"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 35 + 25}s`,
              animationDelay: `${Math.random() * 12}s`,
              opacity: Math.random() * 0.4 + 0.15,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-vibe-blue-light/70 via-vibe-pink/30 to-vibe-blue-light/50 py-16 mb-8">
        <div className="absolute inset-0 bg-white/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-vibe-blue-dark mb-4">
              Featured
              <span className="block bg-gradient-to-r from-vibe-blue to-vibe-pink bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-xl text-vibe-text-medium max-w-2xl mx-auto">
              Discover amazing projects and connect with the talented developers who built them.
            </p>
          </div>
        </div>
      </header>

      {/* Search and Filter */}
      <div className="container mx-auto px-4 relative z-10 mb-10">
        <Card className="bg-white/80 backdrop-blur-md border-slate-200/80 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-vibe-blue-dark">Explore Projects</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-vibe-text-light" />
                  <Input
                    placeholder="Search projects by name, tech, or coder..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white border-slate-300 text-vibe-text-dark placeholder:text-vibe-text-light focus:ring-vibe-blue focus:border-vibe-blue"
                  />
                </div>
                <div className="flex gap-2">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-full md:w-40 bg-white border-slate-300 text-vibe-text-dark focus:ring-vibe-blue focus:border-vibe-blue">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-slate-300 text-vibe-text-dark">
                      <SelectItem value="featured">Featured First</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="name">Name A-Z</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full md:w-48 bg-white border-slate-300 text-vibe-text-dark focus:ring-vibe-blue focus:border-vibe-blue">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-slate-300 text-vibe-text-dark">
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="web application">Web Applications</SelectItem>
                    <SelectItem value="mobile">Mobile Apps</SelectItem>
                    <SelectItem value="e-commerce">E-commerce</SelectItem>
                    <SelectItem value="game">Games</SelectItem>
                    <SelectItem value="platform">Platforms</SelectItem>
                    <SelectItem value="financial">Financial</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={filterByDuration} onValueChange={setFilterByDuration}>
                  <SelectTrigger className="w-full md:w-40 bg-white border-slate-300 text-vibe-text-dark focus:ring-vibe-blue focus:border-vibe-blue">
                    <SelectValue placeholder="Duration" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-slate-300 text-vibe-text-dark">
                    <SelectItem value="all">All Durations</SelectItem>
                    <SelectItem value="short">1-3 months</SelectItem>
                    <SelectItem value="medium">4-6 months</SelectItem>
                    <SelectItem value="long">7+ months</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={filterByTech} onValueChange={setFilterByTech}>
                  <SelectTrigger className="w-full md:w-48 bg-white border-slate-300 text-vibe-text-dark focus:ring-vibe-blue focus:border-vibe-blue">
                    <SelectValue placeholder="Technology" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-slate-300 text-vibe-text-dark">
                    <SelectItem value="all">All Technologies</SelectItem>
                    <SelectItem value="react">React</SelectItem>
                    <SelectItem value="node">Node.js</SelectItem>
                    <SelectItem value="typescript">TypeScript</SelectItem>
                    <SelectItem value="python">Python</SelectItem>
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="react native">React Native</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={filterByCoderRating} onValueChange={setFilterByCoderRating}>
                  <SelectTrigger className="w-full md:w-40 bg-white border-slate-300 text-vibe-text-dark focus:ring-vibe-blue focus:border-vibe-blue">
                    <SelectValue placeholder="Coder Rating" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-slate-300 text-vibe-text-dark">
                    <SelectItem value="all">All Ratings</SelectItem>
                    <SelectItem value="4.8+">4.8+ Stars</SelectItem>
                    <SelectItem value="4.5+">4.5+ Stars</SelectItem>
                  </SelectContent>
                </Select>

                <Button
                  variant={showFeaturedOnly ? "default" : "outline"}
                  onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
                  className={
                    showFeaturedOnly
                      ? "bg-vibe-blue text-white"
                      : "border-slate-300 text-vibe-text-dark hover:bg-slate-100"
                  }
                >
                  <Award className="h-4 w-4 mr-2" />
                  Featured Only
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onNavigateToSignup={handleNavigateToSignup} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 relative">
            <div className="relative z-10">
              <div className="text-6xl mb-4 animate-bounce text-slate-400">
                <Code className="inline-block h-16 w-16" />
              </div>
              <h3 className="text-xl font-semibold text-vibe-text-dark mb-2">No Projects Found</h3>
              <p className="text-vibe-text-medium">Try adjusting your search criteria or explore all projects!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function ProjectCard({
  project,
  onNavigateToSignup,
}: { project: FeaturedProject; onNavigateToSignup: (source: string) => void }) {
  return (
    <Card className="bg-white/90 border-slate-200 h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-vibe-blue/50 group">
      {project.theme.pattern && <div className={`absolute inset-0 ${project.theme.pattern} opacity-[0.03]`}></div>}

      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.images[0] || "/placeholder.svg?width=400&height=200&query=project+screenshot"}
          alt={project.name}
          width={400}
          height={200}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {project.featured && (
            <Badge className="bg-yellow-400/90 text-yellow-800 border-yellow-500 text-xs font-semibold">
              <Award className="h-3 w-3 mr-1" />
              Featured
            </Badge>
          )}
          <Badge className={`${project.theme.badgeBg} ${project.theme.badgeText} text-xs`}>{project.category}</Badge>
        </div>

      </div>

      <CardHeader className="pb-3">
        <CardTitle className={`text-xl font-semibold ${project.theme.titleText} group-hover:text-vibe-blue`}>
          {project.name}
        </CardTitle>
        <CardDescription className="text-vibe-text-medium text-sm line-clamp-2">{project.description}</CardDescription>
      </CardHeader>

      <CardContent className="flex-grow space-y-4">
        {/* Coder Info */}
        <div
          className="flex items-center gap-3 group/coder cursor-pointer"
          onClick={() => onNavigateToSignup(`view_coder_from_project_${project.coderId}`)}
        >
          <Image
            src={project.coderAvatar || "/placeholder.svg?width=40&height=40&query=coder+avatar"}
            alt={project.coderName}
            width={40}
            height={40}
            className="rounded-full border-2 border-slate-200 group-hover/coder:border-vibe-blue transition-colors"
          />
          <div>
            <p className="font-medium text-vibe-text-dark group-hover/coder:text-vibe-blue transition-colors">
              {project.coderName}
            </p>
            <p className="text-sm text-vibe-text-light">{project.coderVibe}</p>
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 text-yellow-400 fill-current" />
              <span className="text-xs text-vibe-text-light">{project.coderRating}</span>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="space-y-2">
          <div className="flex items-center gap-4 text-xs text-vibe-text-light">
            <span className="flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              {project.duration}
            </span>
            <span className="flex items-center">
              <Users className="h-3 w-3 mr-1" />
              {project.teamSize}
            </span>
          </div>
          <div className="flex items-center text-xs text-vibe-text-light">
            <Briefcase className="h-3 w-3 mr-1" />
            {project.role}
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <div className="flex flex-wrap gap-1">
            {project.tech.slice(0, 4).map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-xs bg-slate-50 border-slate-300 text-vibe-text-medium"
              >
                {tech}
              </Badge>
            ))}
            {project.tech.length > 4 && (
              <Badge variant="outline" className="text-xs bg-slate-50 border-slate-300 text-vibe-text-light">
                +{project.tech.length - 4} more
              </Badge>
            )}
          </div>
        </div>

        {/* Outcome */}
        {project.outcome && (
          <div className="p-2 bg-green-50 border border-green-200 rounded-md">
            <p className="text-xs text-green-800 flex items-start">
              <TrendingUp className="h-3 w-3 mr-1 mt-0.5 flex-shrink-0" />
              {project.outcome}
            </p>
          </div>
        )}
      </CardContent>

      {/* Action Buttons */}
      <div className="p-4 pt-0 space-y-2">
        <div className="flex gap-2">
          {project.liveUrl && (
            <Button
              variant="outline"
              size="sm"
              className="flex-1 text-xs border-slate-300 text-vibe-text-medium hover:bg-slate-100"
              onClick={() => window.open(project.liveUrl, "_blank")}
            >
              <ExternalLink className="h-3 w-3 mr-1" />
              Live Demo
            </Button>
          )}
          {project.githubUrl && (
            <Button
              variant="outline"
              size="sm"
              className="flex-1 text-xs border-slate-300 text-vibe-text-medium hover:bg-slate-100"
              onClick={() => window.open(project.githubUrl, "_blank")}
            >
              <Github className="h-3 w-3 mr-1" />
              Code
            </Button>
          )}
        </div>
        <Button
          className={`w-full text-sm ${project.theme.primaryButton} group-hover:scale-105 transition-transform`}
          onClick={() => onNavigateToSignup(`view_project_${project.id}`)}
        >
          <Eye className="h-4 w-4 mr-2" />
          Sign Up to View Details
        </Button>
      </div>
    </Card>
  )
}
