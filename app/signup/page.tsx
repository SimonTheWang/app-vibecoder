"use client"

import type React from "react"

import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { saveToWaitlist } from "@/app/actions/waitlist-actions"
import { Loader2 } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

export default function SignUpPage() {
  const [email, setEmail] = useState("")
  const [userType, setUserType] = useState<"coder" | "seeker" | "">("")
  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()
  const router = useRouter()
  const searchParams = useSearchParams()
  const source = searchParams.get("source") || "direct_signup"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !userType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    startTransition(async () => {
      try {
        const result = await saveToWaitlist({
          email,
          referral_source: `${source}_${userType}`,
        })

        if (result.success) {
          toast({
            title: "Welcome Aboard!",
            description: `Thanks for joining as a Vibe ${userType === "coder" ? "Coder" : "Seeker"}! We'll be in touch soon.`,
            className: "bg-vibe-blue text-white",
          })

          // Redirect to home page after successful signup
          setTimeout(() => {
            router.push("/")
          }, 2000)
        } else {
          throw new Error(result.error || "An unknown error occurred.")
        }
      } catch (error) {
        toast({
          title: "Submission Failed",
          description: (error as Error).message || "Could not complete signup. Please try again.",
          variant: "destructive",
        })
      }
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-vibe-bg-soft via-vibe-blue-light/20 to-vibe-pink/10 flex items-center justify-center p-4">
      {/* Floating Orbs Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute rounded-full bg-gradient-to-r from-blue-200/20 to-purple-200/20 animate-float"
            style={{
              width: `${Math.random() * 80 + 40}px`,
              height: `${Math.random() * 80 + 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 30 + 20}s`,
              animationDelay: `${Math.random() * 10}s`,
              opacity: Math.random() * 0.3 + 0.1,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-2xl border border-slate-200 p-8 text-center">
          <Image
            src="/vibecoder_logo.png"
            alt="VibeCoder Logo"
            width={64}
            height={64}
            className="mx-auto mb-6 h-16 w-16"
          />
          <h1 className="text-4xl font-bold text-vibe-blue-dark mb-4">Sign Up for VibeCoder</h1>
          <p className="text-vibe-text-medium mb-8 text-lg">
            Join our community of talented developers and connect with exciting projects.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-700 font-medium">
                What's your Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-400 focus:ring-0 bg-white text-slate-800 placeholder:text-slate-400"
                disabled={isPending}
                required
              />
            </div>
            {/* User Type Selection */}
            <div className="space-y-3">
              <Label className="text-slate-700 font-medium">
                Are You a <span className="text-red-500">*</span>
              </Label>
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => setUserType("coder")}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                    userType === "coder"
                      ? "border-blue-400 bg-blue-50 text-blue-700"
                      : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                  }`}
                  disabled={isPending}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-6 h-6 rounded border-2 flex items-center justify-center text-sm font-bold ${
                        userType === "coder" ? "border-blue-400 bg-blue-400 text-white" : "border-slate-300"
                      }`}
                    >
                      A
                    </div>
                    <span className="font-medium">Vibe Coder</span>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => setUserType("seeker")}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                    userType === "seeker"
                      ? "border-blue-400 bg-blue-50 text-blue-700"
                      : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                  }`}
                  disabled={isPending}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-6 h-6 rounded border-2 flex items-center justify-center text-sm font-bold ${
                        userType === "seeker" ? "border-blue-400 bg-blue-400 text-white" : "border-slate-300"
                      }`}
                    >
                      B
                    </div>
                    <span className="font-medium">Vibe Seeker</span>
                  </div>
                </button>
              </div>
            </div>
            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isPending || !email || !userType}
              className="w-full py-4 px-6 bg-vibe-blue hover:bg-vibe-blue/90 text-white font-semibold text-lg rounded-xl transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </form>
          {source && source !== "direct_signup" && (
            <div className="mt-6 p-3 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-xs text-slate-600 text-center">
                Referred from: {source.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
              </p>
            </div>
          )}
          <Link href="/" passHref>
            <Button variant="link" className="mt-6 text-vibe-blue hover:text-vibe-blue-dark w-full">
              Or, explore coders first
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
