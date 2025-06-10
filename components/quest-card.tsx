"use client"

import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import type { Quest } from "@/lib/types"
import { Users, CalendarDays, Tag } from "lucide-react"

interface QuestCardProps {
  quest: Quest
  onApply?: (questId: string) => void
  isClickable?: boolean
  isPreview?: boolean
}

export function QuestCard({ quest, onApply, isClickable = false, isPreview = false }: QuestCardProps) {
  // Adapting theme properties for light theme.
  const cardBg = quest.theme.cardBg.includes("dark") ? "bg-white" : quest.theme.cardBg
  const titleTextClass = quest.theme.titleText.includes("white") ? "text-vibe-blue-dark" : quest.theme.titleText
  const descTextClass = quest.theme.descText.includes("white") ? "text-vibe-text-medium" : quest.theme.descText
  const skillBadgeClass = quest.theme.skillBadge.includes("dark")
    ? "bg-vibe-blue-light/50 text-vibe-blue-dark border-vibe-blue-light"
    : quest.theme.skillBadge
  const prizeTextClass =
    quest.theme.prizeText.includes("yellow") || quest.theme.prizeText.includes("green")
      ? "text-vibe-blue-dark font-bold"
      : quest.theme.prizeText
  const primaryButtonClass =
    quest.theme.primaryButton.includes("dark") || quest.theme.primaryButton.includes("text-white")
      ? "bg-vibe-blue hover:bg-vibe-blue/90 text-white"
      : quest.theme.primaryButton
  const iconBgClass = quest.theme.iconBg?.includes("dark")
    ? "bg-vibe-blue-light/40"
    : quest.theme.iconBg || "bg-vibe-blue-light/40"

  if (isPreview) {
    const previewCardContent = (
      <Card
        className={`bg-white border-slate-200/90 h-full flex flex-col overflow-hidden transition-all duration-300 group hover:shadow-lg hover:border-vibe-blue/70 ${isClickable ? "cursor-pointer" : ""}`}
      >
        {quest.theme.pattern && <div className={`absolute inset-0 ${quest.theme.pattern} opacity-[0.03]`}></div>}
        <CardHeader className="relative z-10 pb-2 pt-3 px-3">
          <div className="flex items-start justify-between mb-1.5">
            <div className={`p-1.5 rounded-md bg-vibe-blue-light/40 mr-2 shadow-sm`}>
              <quest.icon className={`h-5 w-5 text-vibe-blue-dark`} />
            </div>
            <Badge className="bg-vibe-blue-light/80 text-vibe-blue-dark border-vibe-blue text-xs px-1.5 py-0.5 font-semibold">
              {quest.status}
            </Badge>
          </div>
          <CardTitle className={`text-md font-semibold text-vibe-blue-dark group-hover:text-vibe-blue line-clamp-2`}>
            {quest.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow space-y-2 relative z-10 px-3 pb-2 pt-1 bg-vibe-blue-light/10 text-vibe-blue-dark">
          <p className={`text-vibe-text-medium text-xs line-clamp-2`}>{quest.description}</p>
        </CardContent>
        <CardFooter className="relative z-10 flex justify-between items-center pt-2 pb-3 px-3 border-t border-slate-200/70">
          <p className={`text-sm font-bold text-vibe-blue-dark`}>{quest.prize}</p>
          <div className={`flex items-center text-xs text-vibe-text-medium opacity-80`}>
            <span className="truncate max-w-[80px]">{quest.vibe}</span>
          </div>
        </CardFooter>
      </Card>
    )

    return isClickable ? (
      <Link href={`/quests/${quest.id}`} className="block h-full">
        {previewCardContent}
      </Link>
    ) : (
      previewCardContent
    )
  }

  const cardContent = (
    <Card
      className={`bg-white border-slate-200/90 h-full flex flex-col overflow-hidden transition-all duration-300 group hover:shadow-xl hover:border-vibe-blue/70 ${isClickable ? "cursor-pointer" : ""}`}
    >
      {quest.theme.pattern && <div className={`absolute inset-0 ${quest.theme.pattern} opacity-[0.03]`}></div>}
      <CardHeader className="relative z-10 pb-3">
        <div className="flex items-start justify-between mb-2">
          <div className={`p-2 rounded-lg bg-vibe-blue-light/40 mr-3 shadow-sm`}>
            <quest.icon className={`h-6 w-6 text-vibe-blue-dark`} />
          </div>
          <Badge className="bg-vibe-blue-light/80 text-vibe-blue-dark border-vibe-blue text-xs font-semibold">
            {quest.status}
          </Badge>
        </div>
        <CardTitle className={`text-xl font-semibold text-vibe-blue-dark group-hover:text-vibe-blue`}>
          {quest.title}
        </CardTitle>
        <CardDescription className={`text-vibe-text-medium text-xs flex items-center mt-1`}>
          <Image
            src={quest.postedByAvatar || "/placeholder.svg?width=20&height=20&query=avatar"}
            alt={quest.postedBy}
            width={20}
            height={20}
            className="rounded-full mr-1.5 border border-slate-300"
          />
          Posted by {quest.postedBy}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-3 relative z-10 bg-vibe-blue-light/10 text-vibe-blue-dark">
        <p className={`text-sm line-clamp-3`}>{quest.description}</p>
        <div>
          <h4 className="text-xs font-semibold uppercase text-vibe-text-light mb-1">Skills Needed:</h4>
          <div className="flex flex-wrap gap-1.5">
            {quest.skillsNeeded.slice(0, 4).map((skill) => (
              <Badge key={skill} className="bg-vibe-blue-light/80 text-vibe-blue-dark border-vibe-blue text-xs">
                {skill}
              </Badge>
            ))}
            {quest.skillsNeeded.length > 4 && (
              <Badge className="bg-vibe-blue-light/80 text-vibe-blue-dark border-vibe-blue text-xs">+{quest.skillsNeeded.length - 4} more</Badge>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="relative z-10 flex flex-col sm:flex-row justify-between items-center pt-3 border-t border-slate-200/70">
        <div className="text-left mb-2 sm:mb-0">
          <p className={`text-lg font-bold ${prizeTextClass}`}>{quest.prize}</p>
          <div className="flex items-center text-xs text-vibe-text-light gap-2 mt-0.5">
            <span className="flex items-center">
              <CalendarDays size={12} className="mr-1" />
              {quest.timeline}
            </span>
            {quest.applicants !== undefined && (
              <span className="flex items-center">
                <Users size={12} className="mr-1" />
                {quest.applicants} Applicants
              </span>
            )}
          </div>
        </div>
        {onApply && (
          <Button
            size="sm"
            className={`${primaryButtonClass} group-hover:scale-105 transition-transform`}
            onClick={(e) => {
              e.preventDefault() // Prevent Link navigation
              e.stopPropagation()
              onApply(quest.id)
            }}
          >
            Apply Now <Tag size={14} className="ml-2" />
          </Button>
        )}
      </CardFooter>
    </Card>
  )

  return isClickable ? (
    <Link href={`/quests/${quest.id}`} className="block h-full">
      {cardContent}
    </Link>
  ) : (
    cardContent
  )
}
