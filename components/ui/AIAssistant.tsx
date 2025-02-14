"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { MessageSquare } from "lucide-react"

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-4 right-4 rounded-full shadow-lg"
          onClick={() => setIsOpen(true)}
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[90vw] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>AI Assistant</SheetTitle>
        </SheetHeader>
        <div className="mt-4 h-[calc(100vh-100px)]">
          <iframe
            src="https://www.voiceflow.com/embed/YOUR_VOICEFLOW_PROJECT_ID"
            width="100%"
            height="100%"
            allow="microphone *"
          ></iframe>
        </div>
      </SheetContent>
    </Sheet>
  )
}

