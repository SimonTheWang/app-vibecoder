"use client"

import { useState } from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { BetaGateModal } from "@/components/beta-gate-modal"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { UserPlus } from "lucide-react" // Sparkles icon removed as logo is used
import Link from "next/link"
import Image from "next/image" // Import Image

export default function ApplyAsCoderPage() {
  const router = useRouter()
  const [showBetaGateModal, setShowBetaGateModal] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    // Redirect to signup page with source parameter
    router.replace("/signup?source=apply_as_vibecoder")
  }, [router])

  const handleBetaGateSuccess = () => {
    setShowBetaGateModal(false)
    toast({
      title: "Application Received!",
      description: "Thanks for your interest in becoming a VibeCoder! We'll be in touch soon.",
      className: "bg-vibe-blue text-white", // Adjusted toast color
    })
  }

  const handleModalClose = () => {
    setShowBetaGateModal(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-vibe-bg-soft via-vibe-blue-light/20 to-vibe-pink/10 text-vibe-text-dark flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-xl p-8 bg-white/90 backdrop-blur-md border border-slate-200 rounded-xl shadow-2xl">
        <Image
          src="/vibecoder_logo.png"
          alt="VibeCoder Logo"
          width={64}
          height={64}
          className="mx-auto mb-6 h-16 w-16"
        />
        <h1 className="text-4xl font-bold text-vibe-blue-dark mb-4">Become a VibeCoder</h1>
        <p className="text-vibe-text-medium mb-8 text-lg">
          Ready to share your unique coding vibe with the world? Join our community of talented developers and connect
          with exciting projects.
        </p>
        <Button
          onClick={() => setShowBetaGateModal(true)}
          size="lg"
          className="bg-vibe-blue hover:bg-vibe-blue/90 text-white font-semibold text-lg px-8 py-6"
        >
          <UserPlus className="mr-2 h-5 w-5" />
          Join the VibeCoder Waitlist
        </Button>
        <p className="mt-6 text-sm text-vibe-text-light">Already applied? Check your email for updates from us.</p>
        <Link href="/" passHref>
          <Button variant="link" className="mt-4 text-vibe-blue hover:text-vibe-blue-dark">
            Or, explore coders first
          </Button>
        </Link>
      </div>

      <BetaGateModal
        isOpen={showBetaGateModal}
        onClose={handleModalClose}
        triggerSource="apply_as_vibecoder"
        onSuccess={handleBetaGateSuccess}
      />
    </div>
  )
}
