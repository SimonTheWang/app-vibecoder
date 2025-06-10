"use client"

import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { useState, useEffect } from "react"
import { questData } from "@/app/quest-data" // Assuming questData is exported from here
import type { Quest } from "@/lib/types"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { ArrowLeft, Tag, Users, CalendarDays, DollarSign, Briefcase, CheckCircle } from "lucide-react"

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

export default function QuestDetailPage() {
  const params = useParams()
  const router = useRouter()
  const questId = params.questId as string
  const { toast } = useToast()

  const [quest, setQuest] = useState<Quest | null>(null)
  const [showBetaGateModal, setShowBetaGateModal] = useState(false)
  const [betaGateTriggerSource, setBetaGateTriggerSource] = useState<string | undefined>(undefined)
  const [isRegisteredToApply, setIsRegisteredToApply] = useState(false)

  useEffect(() => {
    if (questId) {
      const foundQuest = questData.find((q) => q.id === questId)
      if (foundQuest) {
        setQuest(foundQuest)
      } else {
        console.error("Quest not found for ID:", questId)
        // router.push('/404'); // Optional: redirect if not found
      }
    }
  }, [questId, router])

  // Replace the handleTriggerBetaGate function with handleNavigateToSignup:
  const handleNavigateToSignup = (source: string) => {
    router.push(`/signup?source=${encodeURIComponent(source)}`)
  }

  // Update the handleApplyClick function:
  const handleApplyClick = () => {
    if (!quest) return
    if (isRegisteredToApply) {
      toast({
        title: `Applying for ${quest.title}`,
        description: "Full application submission feature is coming soon!",
      })
      console.log(`User is registered. Would proceed to apply for quest: ${quest.title}`)
    } else {
      handleNavigateToSignup(`apply_for_quest_detail_${quest.id}`)
    }
  }

  if (!quest) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-ghibli-darker to-ghibli-dark text-ghibli-text">
        <div className="text-center p-8">
          <Loader2 className="h-12 w-12 animate-spin text-ghibli-blue mx-auto mb-4" />
          <p className="text-xl">Loading quest details or quest not found...</p>
          <Button
            onClick={() => router.push("/quests")}
            variant="outline"
            className="mt-4 border-ghibli-gray text-ghibli-muted hover:bg-ghibli-gray/20"
          >
            Back to Quests
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-indigo-900/70 to-purple-950 text-ghibli-text p-4 md:p-6 lg:p-8 pt-20 md:pt-24 lg:pt-28">
      <div className="container mx-auto max-w-4xl">
        <Button
          variant="outline"
          onClick={() => router.push("/quests")}
          className="mb-6 bg-slate-700/50 border-slate-600 text-ghibli-muted hover:bg-slate-600/70 hover:text-ghibli-blue"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to All Quests
        </Button>

        <Card className={`${quest.theme.cardBg} ${quest.theme.border} shadow-2xl shadow-purple-500/10`}>
          <CardHeader className={`p-6 md:p-8 relative ${quest.theme.iconBg || quest.theme.cardBg} overflow-hidden`}>
            {quest.theme.pattern && <div className={`absolute inset-0 ${quest.theme.pattern} opacity-10`}></div>}
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg ${quest.theme.iconBg || quest.theme.skillBadge} mr-4`}>
                  <quest.icon className={`h-8 w-8 ${quest.theme.titleText}`} />
                </div>
                <div>
                  <Badge className={
                    `bg-vibe-blue-light/80 text-vibe-blue-dark border-vibe-blue text-xs font-semibold mb-1`
                  }>
                    {quest.status}
                  </Badge>
                  <h1 className={`text-3xl md:text-4xl font-bold ${quest.theme.titleText}`}>{quest.title}</h1>
                </div>
              </div>
              <CardDescription className={`${quest.theme.descText} flex items-center gap-2 text-sm`}>
                <Image
                  src={quest.postedByAvatar || "/placeholder.svg?width=24&height=24&query=avatar"}
                  alt={quest.postedBy}
                  width={24}
                  height={24}
                  className="rounded-full border border-white/30"
                />
                Posted by {quest.postedBy}
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="p-6 md:p-8 space-y-8 bg-vibe-blue-light/10 text-vibe-blue-dark">
            <section>
              <h2 className={`text-2xl font-semibold ${quest.theme.titleText} mb-3`}>Quest Details</h2>
              <p className="text-ghibli-muted leading-relaxed whitespace-pre-line text-vibe-blue-dark">{quest.description}</p>
            </section>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className={`${quest.theme.projectBg || quest.theme.cardBg} border ${quest.theme.border}`}>
                <CardHeader>
                  <CardTitle className={`text-lg ${quest.theme.titleText} flex items-center`}>
                    <DollarSign size={20} className="mr-2" />
                    Prize & Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 bg-vibe-blue-light/10 text-vibe-blue-dark">
                  <p className={`text-2xl font-bold ${quest.theme.prizeText}`}>{quest.prize}</p>
                  <div className="flex items-center text-ghibli-muted">
                    <CalendarDays size={16} className="mr-2" />
                    {quest.timeline}
                  </div>
                  {quest.applicants !== undefined && (
                    <div className="flex items-center text-ghibli-muted">
                      <Users size={16} className="mr-2" />
                      {quest.applicants} Applicants
                    </div>
                  )}
                </CardContent>
              </Card>
              <Card className={`${quest.theme.projectBg || quest.theme.cardBg} border ${quest.theme.border}`}>
                <CardHeader>
                  <CardTitle className={`text-lg ${quest.theme.titleText} flex items-center`}>
                    <Briefcase size={20} className="mr-2" />
                    Required Vibe
                  </CardTitle>
                </CardHeader>
                <CardContent className="bg-vibe-blue-light/10 text-vibe-blue-dark">
                  <p className={`text-xl font-semibold ${quest.theme.descText}`}>{quest.vibe}</p>
                  <p className="text-sm text-ghibli-muted mt-1">
                    Match your unique coding style to this quest's energy!
                  </p>
                </CardContent>
              </Card>
            </div>

            <section>
              <h2 className={`text-2xl font-semibold ${quest.theme.titleText} mb-3`}>Skills Needed</h2>
              <div className="flex flex-wrap gap-2">
                {quest.skillsNeeded.map((skill) => (
                  <Badge key={skill} className="bg-vibe-blue-light/80 text-vibe-blue-dark border-vibe-blue px-3 py-1 text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </section>

            <section className="pt-6 border-t border-ghibli-gray/50 text-center">
              <h2 className={`text-2xl font-semibold ${quest.theme.titleText} mb-4`}>Ready to Embark on this Quest?</h2>
              <Button
                size="lg"
                className={`w-full max-w-md mx-auto text-base py-3 ${quest.theme.primaryButton} ${isRegisteredToApply ? "bg-ghibli-green hover:bg-ghibli-green/90 text-ghibli-darker" : ""}`}
                onClick={handleApplyClick}
              >
                {isRegisteredToApply ? <CheckCircle size={20} className="mr-2" /> : <Tag size={20} className="mr-2" />}
                {isRegisteredToApply ? "Proceed to Apply (Coming Soon)" : "Register to Apply"}
              </Button>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
