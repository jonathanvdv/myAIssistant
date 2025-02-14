"use client"

import { ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export function BackButton() {
  const router = useRouter()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => router.back()}
      className="h-9 w-9"
      aria-label="Go back"
    >
      <ChevronLeft className="h-4 w-4" />
    </Button>
  )
} 