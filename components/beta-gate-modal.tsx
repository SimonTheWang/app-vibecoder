"use client"

import type React from "react"
import { useState, useTransition } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { saveToWaitlist } from "@/app/actions/waitlist-actions"
import { Loader2 } from "lucide-react"
import Image from "next/image" // Import Image

export function BetaGateModal({ isOpen, onClose, triggerSource, onSuccess }: BetaGateModalProps) {
  const [email, setEmail] = useState("")
  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!email) {
      toast({
        title: "Missing Information",
        description: "Please enter your email.",
        variant: "destructive",
      })
      return
    }

    startTransition(async () => {
      try {
        const result = await saveToWaitlist({ email, referral_source: triggerSource })
        if (result.success) {
          setEmail("")
          onSuccess?.()
        } else {
          throw new Error(result.error || "An unknown error occurred.")
        }
      } catch (error) {
        toast({
          title: "Submission Failed",
          description: (error as Error).message || "Could not add you to the waitlist. Please try again.",
          variant: "destructive",
        })
      }
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-white border-slate-200 text-vibe-text-dark shadow-xl">
        <DialogHeader className="text-center pt-2">
          <Image
            src="/vibecoder_logo.png"
            alt="VibeCoder Logo"
            width={48}
            height={48}
            className="mx-auto mb-3 h-12 w-12"
          />
          <DialogTitle className="text-vibe-blue-dark text-2xl">Join the PersonalVibeCoder Beta!</DialogTitle>
          <DialogDescription className="text-vibe-text-medium">
            To explore full project details or connect, please join our beta waitlist.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right text-vibe-text-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="col-span-3 bg-slate-50 border-slate-300 focus:ring-vibe-blue focus:border-vibe-blue"
                placeholder="your@email.com"
                disabled={isPending}
              />
            </div>
            {triggerSource && (
              <p className="text-xs text-vibe-text-light px-3 py-1.5 bg-slate-100 rounded-md col-span-4 mt-2 border border-slate-200">
                Action: {triggerSource.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
              </p>
            )}
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isPending}
              className="border-slate-300 text-vibe-text-medium hover:bg-slate-100"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isPending}
              className="bg-vibe-blue hover:bg-vibe-blue/90 text-white font-semibold"
            >
              {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Join Waitlist
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

interface BetaGateModalProps {
  isOpen: boolean
  onClose: () => void
  triggerSource?: string
  onSuccess?: () => void
}
