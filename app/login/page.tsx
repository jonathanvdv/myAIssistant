'use client'

import { useEffect } from 'react'
import { LoginForm } from "@/components/auth/login-form"
import Image from "next/image"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const supabase = createClientComponentClient()

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session }, error } = await supabase.auth.getSession()
      if (error) {
        console.error('Error checking session:', error)
        return
      }
      if (session) {
        router.replace('/dashboard')
      }
    }
    
    checkSession()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        router.replace('/dashboard')
      }
    })

    return () => subscription.unsubscribe()
  }, [supabase, router])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="https://i.ibb.co/CKh9zbTB/final-logo-logo-1.png"
            alt="myAIssistant Logo"
            width={180}
            height={45}
            priority
            className="h-12 w-auto"
          />
        </div>

        {/* Sign in card */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-2xl font-semibold text-center mb-2">Sign in</h2>
          <p className="text-sm text-gray-600 text-center mb-6">
            Stay updated on your professional world
          </p>
          <LoginForm />
        </div>

        {/* New to platform */}
        <p className="text-sm text-center text-gray-600">
          New to myAIssistant?{" "}
          <a href="/signup" className="text-primary hover:underline font-medium">
            Join now
          </a>
        </p>

        {/* Testimonial */}
        <blockquote className="text-center max-w-lg mx-auto">
          <p className="text-gray-600 italic">
            "This platform has completely transformed how I handle my real estate business, saving me countless hours every week."
          </p>
          <footer className="mt-2 text-sm text-gray-500">
            - Sofia Davis, Top Performing Agent
          </footer>
        </blockquote>
      </div>
    </div>
  )
}