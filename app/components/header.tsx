import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="py-4 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          RealRemind
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="#features" className="text-sm font-medium hover:text-primary">
            Features
          </Link>
          <Link href="#benefits" className="text-sm font-medium hover:text-primary">
            Benefits
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
            Testimonials
          </Link>
        </nav>
        <Button>Get Started</Button>
      </div>
    </header>
  )
}