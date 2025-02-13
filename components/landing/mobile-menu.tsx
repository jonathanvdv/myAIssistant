"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4">
          <Link href="#process" className="block px-2 py-1 text-lg" onClick={() => setOpen(false)}>
            Our Process
          </Link>
          <Link href="#features" className="block px-2 py-1 text-lg" onClick={() => setOpen(false)}>
            Features
          </Link>
          <Link href="/login" onClick={() => setOpen(false)}>
            <Button variant="outline" className="w-full rounded-full">
              Log In
            </Button>
          </Link>
          <Button
            className="w-full bg-primary hover:bg-primary/90 text-white rounded-full"
            onClick={() => setOpen(false)}
          >
            Book a Demo
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
} 