"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { coderProfiles } from "@/app/data"
import type { CoderProfile as CoderProfileType } from "@/lib/types"
import { Star, MapPin, Smartphone, Monitor, Search, Filter, MessageSquare, Check } from "lucide-react"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

export default function CoderMarketplace() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedPlatform, setSelectedPlatform] = useState("all")
  const [matchedProfile, setMatchedProfile] = useState<CoderProfileType | null>(null)
  const [showMessagePrompt, setShowMessagePrompt] = useState<CoderProfileType | null>(null)
  const [showCustomToast, setShowCustomToast] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  // Add these state variables after the existing ones
  const [sortBy, setSortBy] = useState("rating")
  const [filterByRating, setFilterByRating] = useState("all")
  const [filterByStatus, setFilterByStatus] = useState("all")
  const [filterBySkill, setFilterBySkill] = useState("all")

  const handleNavigateToSignup = (source: string) => {
    router.push(`/signup?source=${encodeURIComponent(source)}`)
  }

  const handleMatch = (profile: CoderProfileType) => {
    setMatchedProfile(profile)
    setTimeout(() => {
      setMatchedProfile(null)
      setShowMessagePrompt(profile)
    }, 3000)
  }

  const handleSendMessage = () => {
    setShowMessagePrompt(null)
    setShowCustomToast(true)
    setTimeout(() => {
      setShowCustomToast(false)
    }, 3000)
  }

  // Update the filteredCoderProfiles logic
  const filteredCoderProfiles = coderProfiles
    .filter((profile) => {
      const matchesSearch =
        profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profile.vibe.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profile.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesPlatform = selectedPlatform === "all" || profile.platform === selectedPlatform
      const matchesRating =
        filterByRating === "all" ||
        (filterByRating === "4.5+" && profile.rating >= 4.5) ||
        (filterByRating === "4.0+" && profile.rating >= 4.0)
      const matchesStatus = filterByStatus === "all" || profile.status === filterByStatus
      const matchesSkill =
        filterBySkill === "all" ||
        profile.skills.some((skill) => skill.toLowerCase().includes(filterBySkill.toLowerCase()))

      return matchesSearch && matchesPlatform && matchesRating && matchesStatus && matchesSkill
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating
        case "projects":
          return b.projects - a.projects
        case "likes":
          return b.likes - a.likes
        case "name":
          return a.name.localeCompare(b.name)
        case "newest":
          return Number.parseInt(b.id) - Number.parseInt(a.id)
        default:
          return 0
      }
    })

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

      {/* Match Success Overlay */}
      {matchedProfile && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center pointer-events-none">
          <div className="text-center animate-in zoom-in-50 duration-500 p-6 bg-white/90 rounded-lg shadow-xl">
            <div className="w-24 h-24 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center animate-in zoom-in-75 duration-700">
              <Check className="w-12 h-12 text-white stroke-[3]" />
            </div>
            <h2 className="text-3xl font-bold text-vibe-text-dark mb-1">Matched!</h2>
            <p className="text-lg text-green-600">You've matched with {matchedProfile.name}</p>
            <p className="text-sm text-vibe-text-medium mt-1">Get ready to start coding together...</p>
          </div>
        </div>
      )}

      {/* Message Prompt Overlay */}
      {showMessagePrompt && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <Card className="bg-white max-w-md w-full shadow-xl border-slate-200">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden border-2 border-slate-300">
                <Image
                  src={showMessagePrompt.avatar || "/placeholder.svg"}
                  alt={showMessagePrompt.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardTitle className="text-vibe-blue-dark mb-2">Start chatting with {showMessagePrompt.name}!</CardTitle>
              <CardDescription className="text-vibe-text-medium">
                You've successfully matched! Send your first message to begin your coding journey together.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-vibe-text-dark">Your message:</label>
                <textarea
                  placeholder={`Hi ${showMessagePrompt.name}! I love your ${showMessagePrompt.vibe.toLowerCase()} vibe. Would you like to collaborate on a project?`}
                  className="w-full h-24 p-3 rounded-lg bg-slate-50 border border-slate-300 text-vibe-text-dark placeholder:text-vibe-text-light focus:ring-vibe-blue focus:border-vibe-blue"
                />
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1 bg-slate-100 border-slate-300 text-vibe-text-medium hover:bg-slate-200"
                  onClick={() => setShowMessagePrompt(null)}
                >
                  Maybe Later
                </Button>
                <Button
                  className="flex-1 bg-vibe-blue hover:bg-vibe-blue/90 text-white"
                  onClick={() => handleNavigateToSignup(`message_${showMessagePrompt.id}`)}
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Sign Up to Message
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Custom Toast Notification */}
      {showCustomToast && (
        <div className="fixed top-20 right-4 z-[110] animate-in slide-in-from-top-2 duration-300">
          <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            <span>Please sign up to send messages! 🚀</span>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-vibe-blue-light/70 via-vibe-pink/30 to-vibe-blue-light/50 py-16 mb-8">
        <div className="absolute inset-0 bg-white/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-vibe-blue-dark mb-4">
              Find Your Perfect
              <span className="block bg-gradient-to-r from-vibe-blue to-vibe-pink bg-clip-text text-transparent">
                Vibe Coder
              </span>
            </h1>
            <p className="text-xl text-vibe-text-medium max-w-2xl mx-auto">
              Discover full-stack developers with unique vibes and magical coding abilities.
            </p>
          </div>
        </div>
      </header>

      {/* Search and Filter Coders */}
      <div className="container mx-auto px-4 relative z-10 mb-10">
        <Card className="bg-white/80 backdrop-blur-md border-slate-200/80 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-vibe-blue-dark">Discover Coders</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-vibe-text-light" />
                  <Input
                    placeholder="Search coders by name, vibe, or skills..."
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
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="projects">Most Projects</SelectItem>
                      <SelectItem value="likes">Most Liked</SelectItem>
                      <SelectItem value="name">Name A-Z</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
                  <SelectTrigger className="w-full md:w-48 bg-white border-slate-300 text-vibe-text-dark focus:ring-vibe-blue focus:border-vibe-blue">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Platform" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-slate-300 text-vibe-text-dark">
                    <SelectItem value="all">All Platforms</SelectItem>
                    <SelectItem value="mobile">Mobile Focus</SelectItem>
                    <SelectItem value="desktop">Desktop Focus</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={filterByRating} onValueChange={setFilterByRating}>
                  <SelectTrigger className="w-full md:w-40 bg-white border-slate-300 text-vibe-text-dark focus:ring-vibe-blue focus:border-vibe-blue">
                    <SelectValue placeholder="Rating" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-slate-300 text-vibe-text-dark">
                    <SelectItem value="all">All Ratings</SelectItem>
                    <SelectItem value="4.5+">4.5+ Stars</SelectItem>
                    <SelectItem value="4.0+">4.0+ Stars</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={filterByStatus} onValueChange={setFilterByStatus}>
                  <SelectTrigger className="w-full md:w-40 bg-white border-slate-300 text-vibe-text-dark focus:ring-vibe-blue focus:border-vibe-blue">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-slate-300 text-vibe-text-dark">
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="Available">Available</SelectItem>
                    <SelectItem value="Busy">Busy</SelectItem>
                    <SelectItem value="Offline">Offline</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={filterBySkill} onValueChange={setFilterBySkill}>
                  <SelectTrigger className="w-full md:w-48 bg-white border-slate-300 text-vibe-text-dark focus:ring-vibe-blue focus:border-vibe-blue">
                    <SelectValue placeholder="Technology" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-slate-300 text-vibe-text-dark">
                    <SelectItem value="all">All Technologies</SelectItem>
                    <SelectItem value="react">React</SelectItem>
                    <SelectItem value="node">Node.js</SelectItem>
                    <SelectItem value="typescript">TypeScript</SelectItem>
                    <SelectItem value="python">Python</SelectItem>
                    <SelectItem value="react native">React Native</SelectItem>
                    <SelectItem value="next">Next.js</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Coder Profiles Grid */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCoderProfiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} onNavigateToSignup={handleNavigateToSignup} />
          ))}
        </div>

        {filteredCoderProfiles.length === 0 && (
          <div className="text-center py-12 relative">
            <div className="relative z-10">
              <div className="text-6xl mb-4 animate-bounce text-slate-400">☁️</div>
              <h3 className="text-xl font-semibold text-vibe-text-dark mb-2">No vibe coders found</h3>
              <p className="text-vibe-text-medium">Try adjusting your search criteria or explore all vibes!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function ProfileCard({
  profile,
  onNavigateToSignup,
}: { profile: CoderProfileType; onNavigateToSignup: (source: string) => void }) {
  // Adapting theme properties for light theme.
  const cardBg =
    profile.theme.cardBg.includes("dark") ||
    profile.theme.cardBg.includes("black") ||
    profile.theme.cardBg.includes("slate-800") ||
    profile.theme.cardBg.includes("900")
      ? "bg-white" // Default light card
      : profile.theme.cardBg
  const titleText =
    profile.theme.titleText.includes("white") ||
    profile.theme.titleText.includes("light") ||
    profile.theme.titleText.includes("text-ghibli-")
      ? "text-vibe-blue-dark"
      : profile.theme.titleText
  const descText =
    profile.theme.descText.includes("white") ||
    profile.theme.descText.includes("light") ||
    profile.theme.descText.includes("text-ghibli-")
      ? "text-vibe-text-medium"
      : profile.theme.descText
  const skillBadge =
    profile.theme.skillBadge.includes("dark") || profile.theme.skillBadge.includes("white")
      ? "bg-vibe-blue-light/50 text-vibe-blue-dark border-vibe-blue-light"
      : profile.theme.skillBadge
  const headerBg =
    profile.theme.headerBg?.includes("dark") || profile.theme.headerBg?.includes("600")
      ? "bg-vibe-blue-light/30"
      : profile.theme.headerBg || "bg-vibe-blue-light/30"
  const avatarBg = profile.theme.avatarBg?.includes("dark")
    ? "bg-vibe-blue-light/20"
    : profile.theme.avatarBg || "bg-vibe-blue-light/20"

  return (
    <Link href={`/coders/${profile.id}`} passHref className="block h-full">
      <Card
        className={`${cardBg} border-slate-200/90 h-full flex flex-col overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-xl cursor-pointer group relative hover:rotate-[-0.5deg]`}
      >
        {profile.theme.pattern && <div className={`absolute inset-0 ${profile.theme.pattern} opacity-[0.03]`}></div>}
        <div className={`relative h-32 ${headerBg} overflow-hidden`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl opacity-10 group-hover:opacity-20 transition-opacity text-vibe-blue">
              {profile.themeIcon}
            </div>
          </div>
          <div className="absolute bottom-4 left-4">
            {profile.avatar && profile.avatar !== "" ? (
              <div className={`w-16 h-16 rounded-full ${avatarBg} border-2 border-slate-300 overflow-hidden shadow-md`}>
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="w-16 h-16 rounded-full bg-black border-2 border-slate-300 overflow-hidden shadow-md flex items-center justify-center">
                <span className="text-white text-2xl font-bold">
                  {profile.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0,2)}
                </span>
              </div>
            )}
          </div>
          <div className="absolute top-4 right-4 flex gap-2">
            <Badge className={`bg-vibe-pink/80 text-pink-800 border border-transparent ${profile.status === "Available" ? "bg-green-500/80 text-green-900 border-green-600" : "bg-gray-500/80 text-gray-900 border-gray-600"}`}>{profile.status}</Badge>
            <Badge
              variant="outline"
              className="text-xs text-vibe-text-medium border-slate-300 bg-white/70 backdrop-blur-sm"
            >
              {profile.platform === "mobile" ? (
                <Smartphone className="h-3 w-3 mr-1" />
              ) : (
                <Monitor className="h-3 w-3 mr-1" />
              )}
              {profile.platform}
            </Badge>
          </div>
        </div>
        <CardHeader className="pb-2 relative z-10">
          <div className="flex items-center justify-between">
            <CardTitle className={`${titleText} group-hover:text-vibe-blue transition-colors`}>
              {profile.name}
            </CardTitle>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm text-vibe-text-medium">{profile.rating}</span>
            </div>
          </div>
          <CardDescription className={`${descText} flex items-center gap-2`}>
            <profile.icon className="h-4 w-4" />
            {profile.vibe}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 flex-grow flex flex-col justify-between relative z-10">
          <div>
            <p className="text-vibe-text-medium text-sm line-clamp-3">{profile.bio}</p>
            <div className="flex items-center gap-x-4 gap-y-1 text-xs text-vibe-text-light mt-2">
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {profile.location}
              </div>
            </div>
          </div>
          <div className="pt-2">
            <div className="flex flex-wrap gap-1">
              {profile.skills.slice(0, 3).map((skill, i) => (
                <Badge key={i} variant="outline" className={`text-xs ${skillBadge}`}>
                  {skill}
                </Badge>
              ))}
              {profile.skills.length > 3 && (
                <Badge variant="outline" className="text-xs text-vibe-text-light border-slate-300 bg-slate-100/70">
                  +{profile.skills.length - 3}
                </Badge>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
