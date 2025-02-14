"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth"

export default function LogoutPage() {
  const router = useRouter()
  const { signOut } = useAuth()

  useEffect(() => {
    async function handleLogout() {
      try {
        await signOut()
        router.push("/login")
      } catch (error) {
        console.error("Error during logout:", error)
        router.push("/login")
      }
    }

    handleLogout()
  }, [router, signOut])

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-2">Logging out...</h2>
        <p className="text-muted-foreground">Thank you for using myAIssistant</p>
      </div>
    </div>
  )
} 