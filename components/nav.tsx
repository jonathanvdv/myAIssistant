'use client'

import Link from 'next/link'
import { useAuth } from '@/lib/auth'
import { Button } from '@/components/ui/button'
import MobileMenu from '@/components/landing/mobile-menu'
import Image from 'next/image'

export function Nav() {
  const { user } = useAuth()

  return (
    <nav className="py-4 px-6 lg:px-8 flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <Image
          src="https://i.ibb.co/CKh9zbTB/final-logo-logo-1.png"
          alt="myAIssistant Logo"
          width={180}
          height={45}
          priority
          className="h-12 w-auto"
        />
      </Link>
      <div className="hidden md:flex items-center gap-8">
        <Link href="#process" className="text-gray-600 hover:text-gray-900">
          Our Process
        </Link>
        <Link href="#features" className="text-gray-600 hover:text-gray-900">
          Features
        </Link>
        {user ? (
          <Button variant="ghost" asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
        ) : (
          <>
            <Link href="/login">
              <Button variant="outline" className="rounded-full px-6">
                Log In
              </Button>
            </Link>
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
              Book a Demo
            </Button>
          </>
        )}
      </div>
      <MobileMenu />
    </nav>
  )
} 