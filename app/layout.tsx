import "./styles/globals.css"
import { Inter } from "next/font/google"
import { AuthProvider } from "@/lib/auth"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "myAIssistant - Automated Admin for Real Estate Agents",
  description:
    "Save 10+ hours a week with automated scheduling, follow-ups, and contract management for real estate professionals.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}

