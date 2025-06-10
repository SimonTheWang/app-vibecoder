"use client"

import { Badge } from "@/components/ui/badge"
import { CardFooter } from "@/components/ui/card"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { coderProfiles } from "@/app/data"
import { questData } from "@/app/quest-data"
import { QuestCard } from "@/components/quest-card"
import { Search, Filter, ArrowRight, Briefcase } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

// Simplified ProfileCard for the carousel on the quests page, adapted for light theme
function QuestPageProfileCard({ profile }: { profile: any }) {
  const cardBg = profile.theme.cardBg.includes("dark") ? "bg-white" : profile.theme.cardBg
  const titleText = profile.theme.titleText.includes("white") ? "text-vibe-blue-dark" : profile.theme.titleText
  const descText = profile.theme.descText.includes("white") ? "text-vibe-text-medium" : profile.theme.descText
  const skillBadge = profile.theme.skillBadge.includes("dark")
    ? "bg-vibe-blue-light/50 text-vibe-blue-dark border-vibe-blue-light"
    : profile.theme.skillBadge

  return (
    <div
      className="block h-full cursor-pointer"
      onClick={() => (window.location.href = `/signup?source=view_coder_${profile.id}`)}
    >
      <Card
        className={`bg-white border-slate-200/90 h-full flex flex-col overflow-hidden transition-all duration-300 group hover:shadow-lg`}
      >
        <CardHeader className="p-3">
          <div className="flex items-center gap-2">
            <Image
              src={profile.avatar || "/placeholder.svg?width=40&height=40&query=avatar"}
              alt={profile.name}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full border-2 border-vibe-blue-light/70 object-cover"
            />
            <div>
              <CardTitle className={`text-sm font-semibold text-vibe-blue-dark group-hover:text-vibe-blue`}>
                {profile.name}
              </CardTitle>
              <CardDescription className={`text-xs text-vibe-blue-dark`}>{profile.vibe}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-3 text-xs bg-vibe-blue-light/10 text-vibe-blue-dark flex-grow">
          <p className="line-clamp-2">{profile.bio}</p>
        </CardContent>
        <CardFooter className="p-3">
          <Badge variant="outline" className="text-xs bg-vibe-blue-light/80 text-vibe-blue-dark border-vibe-blue">
            {profile.skills[0]}
          </Badge>
        </CardFooter>
      </Card>
    </div>
  )
}

export default function QuestMarketplace() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const router = useRouter()

  // Add these state variables after the existing ones
  const [sortBy, setSortBy] = useState("featured")
  const [filterByBudget, setFilterByBudget] = useState("all")
  const [filterByDuration, setFilterByDuration] = useState("all")
  const [filterByStatus, setFilterByStatus] = useState("all")

  const handleNavigateToSignup = (source: string) => {
    router.push(`/signup?source=${encodeURIComponent(source)}`)
  }

  const handleApplyForQuest = (questId: string) => {
    handleNavigateToSignup(`apply_for_quest_${questId}`)
  }

  // Update the filteredQuests logic
  const filteredQuests = questData
    .filter((quest) => {
      const matchesSearch =
        quest.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        quest.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        quest.skillsNeeded.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesBudget =
        filterByBudget === "all" ||
        (filterByBudget === "low" && quest.prize.includes("15,000")) ||
        quest.prize.includes("18,000") ||
        (filterByBudget === "medium" && (quest.prize.includes("25,000") || quest.prize.includes("30,000"))) ||
        (filterByBudget === "high" && (quest.prize.includes("40,000") || quest.prize.includes("50,000")))

      const matchesDuration =
        filterByDuration === "all" ||
        (filterByDuration === "short" && quest.timeline.includes("3-4")) ||
        (filterByDuration === "medium" && (quest.timeline.includes("4-6") || quest.timeline.includes("5-7"))) ||
        (filterByDuration === "long" && (quest.timeline.includes("6-8") || quest.timeline.includes("8-10")))

      const matchesStatus = filterByStatus === "all" || quest.status === filterByStatus

      return matchesSearch && matchesBudget && matchesDuration && matchesStatus
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "featured":
          return a.status === "Featured" ? -1 : 1
        case "budget":
          const aMax = Number.parseInt(a.prize.split("$")[2]?.split(",").join("") || "0")
          const bMax = Number.parseInt(b.prize.split("$")[2]?.split(",").join("") || "0")
          return bMax - aMax
        case "applicants":
          return (b.applicants || 0) - (a.applicants || 0)
        case "newest":
          return Number.parseInt(b.id.split("-")[1]) - Number.parseInt(a.id.split("-")[1])
        default:
          return 0
      }
    })

  return (
    <div className="min-h-screen bg-gradient-to-br from-vibe-bg-soft via-vibe-pink/10 to-vibe-blue-light/20 text-vibe-text-dark pt-8 md:pt-12">
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute rounded-full bg-gradient-to-r from-vibe-pink/10 to-vibe-blue/10 animate-float"
            style={{
              width: `${Math.random() * 120 + 60}px`,
              height: `${Math.random() * 120 + 60}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 35 + 25}s`,
              animationDelay: `${Math.random() * 15}s`,
              opacity: Math.random() * 0.4 + 0.15,
            }}
          />
        ))}
      </div>

      <header className="relative overflow-hidden bg-gradient-to-r from-vibe-pink/40 via-vibe-blue-light/50 to-vibe-pink/30 py-16">
        <div className="absolute inset-0 bg-white/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-vibe-blue-dark mb-4">
              Embark on a
              <span className="block bg-gradient-to-r from-vibe-blue to-vibe-pink bg-clip-text text-transparent">
                Vibe Quest
              </span>
            </h1>
            <p className="text-xl text-vibe-text-medium max-w-2xl mx-auto">
              Discover exciting projects and collaborations posted by vibe seekers.
            </p>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 mt-12 mb-12 relative z-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-vibe-blue-dark">Featured Coders</h2>
          <Link href="/" passHref>
            <Button
              variant="outline"
              className="border-vibe-blue-dark/50 text-vibe-blue-dark hover:bg-vibe-blue-light/30"
            >
              View All Coders <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: coderProfiles.length > 4,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {coderProfiles.slice(0, 8).map((profile) => (
              <CarouselItem key={profile.id} className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                <div className="p-1 h-full">
                  <QuestPageProfileCard profile={profile} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {coderProfiles.length > 1 && (
            <CarouselPrevious className="text-vibe-blue-dark bg-white/70 hover:bg-vibe-blue-light/40 border-slate-300 hover:border-vibe-blue-dark/50" />
          )}
          {coderProfiles.length > 1 && (
            <CarouselNext className="text-vibe-blue-dark bg-white/70 hover:bg-vibe-blue-light/40 border-slate-300 hover:border-vibe-blue-dark/50" />
          )}
        </Carousel>
      </section>

      <div className="container mx-auto px-4 relative z-10 mb-8">
        <Card className="bg-white/80 backdrop-blur-md border-slate-200/80 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-vibe-blue-dark">Explore Quests</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-vibe-text-light" />
                  <Input
                    placeholder="Search quests by title, skill, or vibe..."
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
                      <SelectItem value="budget">Highest Budget</SelectItem>
                      <SelectItem value="applicants">Most Applicants</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Select value={filterByStatus} onValueChange={setFilterByStatus}>
                  <SelectTrigger className="w-full md:w-40 bg-white border-slate-300 text-vibe-text-dark focus:ring-vibe-blue focus:border-vibe-blue">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-slate-300 text-vibe-text-dark">
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="Featured">Featured</SelectItem>
                    <SelectItem value="Open">Open</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={filterByBudget} onValueChange={setFilterByBudget}>
                  <SelectTrigger className="w-full md:w-40 bg-white border-slate-300 text-vibe-text-dark focus:ring-vibe-blue focus:border-vibe-blue">
                    <SelectValue placeholder="Budget" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-slate-300 text-vibe-text-dark">
                    <SelectItem value="all">All Budgets</SelectItem>
                    <SelectItem value="high">$40k+ High</SelectItem>
                    <SelectItem value="medium">$25-40k Medium</SelectItem>
                    <SelectItem value="low">$15-25k Entry</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={filterByDuration} onValueChange={setFilterByDuration}>
                  <SelectTrigger className="w-full md:w-40 bg-white border-slate-300 text-vibe-text-dark focus:ring-vibe-blue focus:border-vibe-blue">
                    <SelectValue placeholder="Duration" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-slate-300 text-vibe-text-dark">
                    <SelectItem value="all">All Durations</SelectItem>
                    <SelectItem value="short">3-4 months</SelectItem>
                    <SelectItem value="medium">4-7 months</SelectItem>
                    <SelectItem value="long">7+ months</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full md:w-48 bg-white border-slate-300 text-vibe-text-dark focus:ring-vibe-blue focus:border-vibe-blue">
                    <SelectValue placeholder="Vibe Match" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-slate-300 text-vibe-text-dark">
                    <SelectItem value="all">All Vibes</SelectItem>
                    <SelectItem value="quantum">Quantum/Scientific</SelectItem>
                    <SelectItem value="sustainable">Sustainable Tech</SelectItem>
                    <SelectItem value="accessibility">Accessibility</SelectItem>
                    <SelectItem value="gaming">Gaming/Retro</SelectItem>
                    <SelectItem value="wellness">Wellness/Audio</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuests.map((quest) => (
            <QuestCard key={quest.id} quest={quest} onApply={handleApplyForQuest} isClickable={true} />
          ))}
        </div>

        {filteredQuests.length === 0 && (
          <div className="text-center py-12 relative">
            <div className="relative z-10">
              <div className="text-6xl mb-4 animate-bounce text-slate-400">
                <Briefcase className="inline-block h-16 w-16" />
              </div>
              <h3 className="text-xl font-semibold text-vibe-text-dark mb-2">No Quests Found</h3>
              <p className="text-vibe-text-medium">Try a different search or check back later for new opportunities!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
