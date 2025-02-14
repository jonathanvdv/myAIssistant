'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Icons } from '@/components/ui/icons'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export function LoginForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)
  const supabase = createClientComponentClient()

  // Handle form submission for email/password login
  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      })

      if (error) throw error

      router.refresh()
      router.push('/dashboard')
    } catch (error) {
      console.error('Error:', error)
      alert('Invalid credentials. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  // Handle Google OAuth sign in
  async function signInWithGoogle() {
    try {
      setIsLoading(true)
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      })
      if (error) throw error
    } catch (error) {
      console.error('Error:', error)
      alert('Google sign in failed. Please try again.')
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <form onSubmit={onSubmit} className="space-y-4">
        {/* Email Input */}
        <Input
          type="email"
          placeholder="Email"
          disabled={isLoading}
          value={formData.email}
          onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
          className="h-12 text-base px-4"
        />

        {/* Password Input with Toggle */}
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            disabled={isLoading}
            value={formData.password}
            onChange={e => setFormData(prev => ({ ...prev, password: e.target.value }))}
            className="h-12 text-base px-4 pr-20"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            {showPassword ? 
              <EyeOff className="h-4 w-4 text-gray-500" /> : 
              <Eye className="h-4 w-4 text-gray-500" />
            }
          </button>
        </div>

        <a href="/forgot-password" className="block text-primary hover:underline text-sm font-medium">
          Forgot password?
        </a>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full h-12 bg-primary hover:bg-primary/90 text-white rounded-full"
        >
          {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
          Sign in
        </Button>
      </form>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-gray-500">or</span>
        </div>
      </div>

      {/* Google Sign In Button */}
      <Button
        type="button"
        variant="outline"
        disabled={isLoading}
        onClick={signInWithGoogle}
        className="w-full h-12 rounded-full border-2 hover:border-gray-300 hover:bg-transparent"
      >
        {isLoading ? 
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" /> : 
          <Icons.google className="mr-2 h-4 w-4" />
        }
        Sign in with Google
      </Button>
    </div>
  )
} 