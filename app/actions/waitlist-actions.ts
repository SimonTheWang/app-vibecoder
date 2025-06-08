"use server"

import { createClient } from "@supabase/supabase-js"

// Ensure these environment variables are set in your Vercel project
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

interface WaitlistEntry {
  email: string
  referral_source?: string // Changed from triggerSource to match schema
}

interface ActionResult {
  success: boolean
  error?: string
}

export async function saveToWaitlist(entry: WaitlistEntry): Promise<ActionResult> {
  if (!supabaseUrl || !supabaseServiceRoleKey) {
    console.error("Supabase URL or Service Role Key is not defined.")
    return { success: false, error: "Server configuration error." }
  }

  const supabase = createClient(supabaseUrl, supabaseServiceRoleKey)

  const { email, referral_source } = entry // Destructure referral_source

  if (!email) {
    return { success: false, error: "Email is required." }
  }

  // Basic email validation
  if (!/\S+@\S+\.\S+/.test(email)) {
    return { success: false, error: "Invalid email format." }
  }

  try {
    const { data, error } = await supabase
      .from("waitlist_v0")
      .insert([
        {
          email,
          referral_source: referral_source, // Use referral_source here
          role: referral_source?.includes("coder")
            ? "coder"
            : referral_source?.includes("quest") || referral_source?.includes("seeker")
              ? "seeker"
              : "unknown",
          // created_at is handled by Supabase default or trigger
        },
      ])
      .select()

    if (error) {
      console.error("Supabase error:", error)
      if (error.code === "23505") {
        return { success: false, error: "This email is already on the waitlist." }
      }
      return { success: false, error: error.message || "Failed to add to waitlist." }
    }

    console.log("Successfully added to waitlist:", data)
    return { success: true }
  } catch (e) {
    console.error("Unexpected error in saveToWaitlist:", e)
    return { success: false, error: (e as Error).message || "An unexpected error occurred." }
  }
}
