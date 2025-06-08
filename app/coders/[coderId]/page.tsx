"use client"

import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { useState, useEffect } from "react"
import { coderProfiles } from "@/app/data"
import type { CoderProfile, Project } from "@/lib/types"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import {
  ArrowLeft,
  Star,
  MapPin,
  Clock,
  Smartphone,
  Monitor,
  MessageSquare,
  Heart,
  Briefcase,
  Users,
  Github,
  Twitter,
  Linkedin,
  Globe,
  Info,
  DollarSign,
  Calendar,
  Building,
  Quote,
  Award,
  Target,
  TrendingUp,
} from "lucide-react"

export default function CoderProfilePage() {
  const params = useParams()
  const router = useRouter()
  const coderId = params.coderId as string
  const { toast } = useToast()

  const [profile, setProfile] = useState<CoderProfile | null>(null)
  const [isRegisteredForDeepDive, setIsRegisteredForDeepDive] = useState(false)

  useEffect(() => {
    if (coderId) {
      const foundProfile = coderProfiles.find((p) => p.id === coderId)
      if (foundProfile) {
        setProfile(foundProfile)
      } else {
        console.error("Profile not found for ID:", coderId)
      }
    }
  }, [coderId])

  // Replace the handleTriggerBetaGate function with handleNavigateToSignup
  const handleNavigateToSignup = (source: string) => {
    router.push(`/signup?source=${encodeURIComponent(source)}`)
  }

  const handleTriggerBetaGate = (source: string) => {
    router.push(`/signup?source=${encodeURIComponent(source)}`)
  }

  const handleBetaGateSuccess = () => {
    setIsRegisteredForDeepDive(true)
    toast({
      title: "Registration Successful!",
      description: "You can now explore more (full project details coming soon).",
      className: "bg-vibe-blue text-white",
    })
  }

  // And update the project card click handler:
  const handleProjectCardClick = (project: Project) => {
    if (isRegisteredForDeepDive) {
      toast({
        title: `Exploring ${project.name}`,
        description: "Full project details and interactive demos are planned for the future!",
        action: <Info className="h-5 w-5 text-vibe-blue" />,
      })
      console.log(`User is registered. Would navigate to details for project: ${project.name}`)
    } else {
      handleNavigateToSignup(`view_project_detail_${profile?.id}_${project.name.replace(/\s+/g, "_")}`)
    }
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-vibe-bg-soft to-vibe-blue-light/20 text-vibe-text-dark">
        <div className="text-center p-8">
          <Loader2 className="h-12 w-12 animate-spin text-vibe-blue mx-auto mb-4" />
          <p className="text-xl">Loading profile or profile not found...</p>
          <Button
            onClick={() => router.push("/")}
            variant="outline"
            className="mt-4 border-slate-300 text-vibe-text-medium hover:bg-slate-100"
          >
            Go Home
          </Button>
        </div>
      </div>
    )
  }

  const socialLinks = profile.socialLinks || {}

  return (
    <div className="min-h-screen bg-gradient-to-br from-vibe-bg-soft via-vibe-blue-light/20 to-vibe-pink/10 text-vibe-text-dark p-4 md:p-6 lg:p-8 pt-20 md:pt-24 lg:pt-28">
      <div className="container mx-auto max-w-7xl">
        <Button
          variant="outline"
          onClick={() => router.back()}
          className="mb-6 bg-white/80 border-slate-300 text-vibe-text-medium hover:bg-slate-100"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back
        </Button>

        <div className="lg:flex lg:gap-8">
          {/* Left Column (Sidebar) */}
          <div className="lg:w-1/3 mb-8 lg:mb-0 space-y-6">
            {/* Profile Card */}
            <Card className="bg-white/90 border-slate-200 shadow-lg">
              <CardContent className="p-6 text-center">
                <Image
                  src={profile.avatar || "/placeholder.svg?width=200&height=200&query=coder+avatar"}
                  alt={profile.name}
                  width={160}
                  height={160}
                  className="rounded-full border-4 border-vibe-blue-light/50 object-cover mx-auto mb-4 shadow-md"
                />
                <h1 className="text-2xl font-bold text-vibe-blue-dark">{profile.name}</h1>
                <p className="text-md text-vibe-text-medium mb-1">
                  <profile.icon className="inline-block h-5 w-5 mr-1.5 align-text-bottom" />
                  {profile.vibe}
                </p>
                <p className="text-sm text-vibe-text-medium mb-4">{profile.bio}</p>

                {/* In the profile card buttons section, replace the onClick handlers: */}
                <div className="space-y-2 mb-6">
                  <Button
                    className="w-full bg-vibe-blue hover:bg-vibe-blue/90 text-white"
                    onClick={() => handleNavigateToSignup(`message_${profile.id}`)}
                  >
                    <MessageSquare className="h-4 w-4 mr-2" /> Message
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full bg-gradient-to-r from-pink-500 to-rose-500 border-pink-400 text-white hover:from-pink-600 hover:to-rose-600 hover:border-pink-300 shadow-md shadow-pink-500/20"
                    onClick={() => handleNavigateToSignup(`match_${profile.id}`)}
                  >
                    <Heart className="h-4 w-4 mr-2" /> Match
                  </Button>
                </div>

                <div className="text-sm text-vibe-text-medium space-y-2 text-left">
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2 flex-shrink-0" /> {profile.location}
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-2 flex-shrink-0" /> {profile.timezone}
                  </div>
                  <div className="flex items-center">
                    {profile.platform === "mobile" ? (
                      <Smartphone size={14} className="mr-2 flex-shrink-0" />
                    ) : (
                      <Monitor size={14} className="mr-2 flex-shrink-0" />
                    )}
                    {profile.platform.charAt(0).toUpperCase() + profile.platform.slice(1)} Focus
                  </div>
                  <div className="flex items-center">
                    <Star size={14} className="mr-2 text-yellow-400 fill-current flex-shrink-0" />
                    {profile.rating} ({profile.reviews} reviews)
                  </div>
                  <div className="flex items-center">
                    <Briefcase size={14} className="mr-2 flex-shrink-0" /> {profile.projects} Projects
                  </div>
                  <div className="flex items-center">
                    <Users size={14} className="mr-2 flex-shrink-0" /> {profile.likes} Likes
                  </div>
                </div>

                {(socialLinks.github || socialLinks.twitter || socialLinks.linkedin || socialLinks.website) && (
                  <div className="mt-6 pt-4 border-t border-slate-200">
                    <h3 className="text-xs font-semibold text-vibe-text-light uppercase mb-2 text-center">Connect</h3>
                    <div className="flex justify-center space-x-3">
                      {socialLinks.github && (
                        <a
                          href={socialLinks.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-vibe-text-medium hover:text-vibe-blue"
                        >
                          <Github size={20} /> <span className="sr-only">GitHub</span>
                        </a>
                      )}
                      {socialLinks.twitter && (
                        <a
                          href={socialLinks.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-vibe-text-medium hover:text-vibe-blue"
                        >
                          <Twitter size={20} /> <span className="sr-only">Twitter</span>
                        </a>
                      )}
                      {socialLinks.linkedin && (
                        <a
                          href={socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-vibe-text-medium hover:text-vibe-blue"
                        >
                          <Linkedin size={20} /> <span className="sr-only">LinkedIn</span>
                        </a>
                      )}
                      {socialLinks.website && (
                        <a
                          href={socialLinks.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-vibe-text-medium hover:text-vibe-blue"
                        >
                          <Globe size={20} /> <span className="sr-only">Website</span>
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Compensation Card */}
            <Card className="bg-white/90 border-slate-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg text-vibe-blue-dark flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Compensation & Availability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-vibe-text-dark">Hourly Rate</p>
                  <p className="text-lg font-bold text-vibe-blue-dark">{profile.compensation.hourlyRate}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-vibe-text-dark">Project Rate</p>
                  <p className="text-lg font-bold text-vibe-blue-dark">{profile.compensation.projectRate}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-vibe-text-dark">Availability</p>
                  <p className="text-sm text-vibe-text-medium">{profile.compensation.availability}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-vibe-text-dark">Preferred Engagement</p>
                  <Badge className="bg-vibe-blue-light/50 text-vibe-blue-dark border-vibe-blue-light">
                    {profile.compensation.preferredEngagement}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Badge className="w-full justify-center py-2 text-sm bg-vibe-pink/80 text-pink-800 border-pink-300">
              {profile.status}
            </Badge>
          </div>

          {/* Right Column (Main Content) */}
          <div className="lg:w-2/3 space-y-6">
            {/* About Section */}
            <Card className="bg-white/90 border-slate-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-vibe-blue-dark">About {profile.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-vibe-text-medium leading-relaxed whitespace-pre-line">{profile.fullBio}</p>
              </CardContent>
            </Card>

            {/* Skills Section */}
            <Card className="bg-white/90 border-slate-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-vibe-blue-dark">Skills & Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-vibe-blue-light/50 text-vibe-blue-dark border-vibe-blue-light px-3 py-1 text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Work Experience Section */}
            <Card className="bg-white/90 border-slate-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-vibe-blue-dark flex items-center">
                  <Building className="h-6 w-6 mr-2" />
                  Work Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {profile.workExperience.map((experience, index) => (
                  <div key={index} className="border-l-2 border-vibe-blue-light pl-4 pb-4 last:pb-0">
                    <div className="flex items-start gap-3 mb-2">
                      <Image
                        src={experience.companyLogo || "/placeholder.svg?width=40&height=40&query=company+logo"}
                        alt={experience.company}
                        width={40}
                        height={40}
                        className="rounded border border-slate-200"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-vibe-blue-dark">{experience.role}</h3>
                        <p className="text-vibe-text-medium font-medium">{experience.company}</p>
                        <div className="flex items-center gap-4 text-sm text-vibe-text-light mt-1">
                          <span className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {experience.duration}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {experience.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-vibe-text-medium mb-3">{experience.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {experience.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs bg-slate-50 border-slate-300 text-vibe-text-medium"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Past Projects Section */}
            <Card className="bg-white/90 border-slate-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-vibe-blue-dark flex items-center">
                  <Award className="h-6 w-6 mr-2" />
                  Past Projects
                </CardTitle>
                <CardDescription className="text-vibe-text-medium">
                  A showcase of {profile.name}'s recent work. Click on a project to learn more (requires registration).
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {profile.recentProjects.map((project, index) => (
                  <Card
                    key={index}
                    className="bg-slate-50/50 border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-vibe-blue/50 cursor-pointer group"
                    onClick={() => handleProjectCardClick(project)}
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl text-vibe-blue-dark group-hover:text-vibe-blue">
                          {project.name}
                        </CardTitle>
                        {project.outcome && (
                          <Badge className="bg-green-100 text-green-800 border-green-300 text-xs">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            Success
                          </Badge>
                        )}
                      </div>
                      {(project.duration || project.role || project.teamSize) && (
                        <div className="flex flex-wrap gap-4 text-sm text-vibe-text-light">
                          {project.duration && (
                            <span className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {project.duration}
                            </span>
                          )}
                          {project.role && (
                            <span className="flex items-center">
                              <Briefcase className="h-3 w-3 mr-1" />
                              {project.role}
                            </span>
                          )}
                          {project.teamSize && (
                            <span className="flex items-center">
                              <Users className="h-3 w-3 mr-1" />
                              {project.teamSize}
                            </span>
                          )}
                        </div>
                      )}
                    </CardHeader>
                    <CardContent>
                      <p className="text-vibe-text-medium mb-3 text-sm group-hover:text-vibe-text-dark">
                        {project.description}
                      </p>
                      {project.outcome && (
                        <div className="mb-3 p-2 bg-green-50 border border-green-200 rounded-md">
                          <p className="text-sm text-green-800 flex items-start">
                            <Target className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0" />
                            <span className="font-medium">Outcome:</span>
                            <span className="ml-1">{project.outcome}</span>
                          </p>
                        </div>
                      )}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs bg-white border-slate-300 text-vibe-text-medium group-hover:border-vibe-blue/30 group-hover:text-vibe-blue"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>

            {/* Reviews/Testimonials Section */}
            <Card className="bg-white/90 border-slate-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-vibe-blue-dark flex items-center">
                  <Quote className="h-6 w-6 mr-2" />
                  Reviews & Testimonials
                </CardTitle>
                <CardDescription className="text-vibe-text-medium">
                  What others say about working with {profile.name}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {profile.testimonials.map((testimonial) => (
                  <Card key={testimonial.id} className="bg-slate-50/50 border border-slate-200">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3 mb-3">
                        <Image
                          src={testimonial.reviewerAvatar || "/placeholder.svg?width=40&height=40&query=reviewer"}
                          alt={testimonial.reviewerName}
                          width={40}
                          height={40}
                          className="rounded-full border border-slate-200"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-vibe-blue-dark">{testimonial.reviewerName}</h4>
                              <p className="text-sm text-vibe-text-medium">
                                {testimonial.reviewerRole} at {testimonial.reviewerCompany}
                              </p>
                            </div>
                            <div className="flex items-center gap-1">
                              {Array.from({ length: testimonial.rating }).map((_, i) => (
                                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-vibe-text-light mt-1">{testimonial.date}</p>
                        </div>
                      </div>
                      <blockquote className="text-vibe-text-medium italic border-l-2 border-vibe-blue-light pl-3 mb-2">
                        "{testimonial.comment}"
                      </blockquote>
                      {testimonial.projectWorkedOn && (
                        <p className="text-xs text-vibe-text-light">
                          <span className="font-medium">Project:</span> {testimonial.projectWorkedOn}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper component for loading state
const Loader2 = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
)
