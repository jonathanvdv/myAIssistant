import Link from "next/link"
import { Button } from "@/components/ui/button"
import MobileMenu from "./mobile-menu"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="py-4 px-6 lg:px-8 flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-9GV3FoZXRPqhqxiIrPfusWIBvR78pF.png"
          alt="myAIssistant Logo"
          width={180}
          height={45}
          priority
        />
      </Link>
      <div className="hidden md:flex items-center gap-8">
        <Link href="#process" className="text-gray-600 hover:text-gray-900">
          Our Process
        </Link>
        <Link href="#features" className="text-gray-600 hover:text-gray-900">
          Features
        </Link>
        <Link href="/login">
          <Button variant="outline" className="rounded-full px-6">
            Log In
          </Button>
        </Link>
        <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">Book a Demo</Button>
      </div>
      <MobileMenu />
    </nav>
  )
}

