"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { BadgeCheck, CreditCard } from "lucide-react"

interface UserProfile {
  name: string
  email: string
  company: string
}

interface Subscription {
  plan: string
  status: string
  nextBillingDate: string
  amount: string
}

export default function SettingsPage() {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: "John Doe",
    email: "john@example.com",
    company: "Acme Realty",
  })

  const [subscription] = useState<Subscription>({
    plan: "Professional",
    status: "Active",
    nextBillingDate: "2024-03-15",
    amount: "$49.99",
  })

  const [isPasswordResetOpen, setIsPasswordResetOpen] = useState(false)
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your API
    alert("Profile updated successfully!")
  }

  const handlePasswordReset = (e: React.FormEvent) => {
    e.preventDefault()
    if (newPassword === confirmPassword) {
      // In a real application, you would send this data to your API
      alert("Password reset successfully!")
      setIsPasswordResetOpen(false)
      setNewPassword("")
      setConfirmPassword("")
    } else {
      alert("Passwords do not match!")
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <h2 className="text-3xl font-bold tracking-tight">Settings</h2>

      <Tabs defaultValue="profile">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleProfileUpdate}>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={userProfile.name}
                      onChange={(e) => setUserProfile({ ...userProfile, name: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={userProfile.email}
                      onChange={(e) => setUserProfile({ ...userProfile, email: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={userProfile.company}
                      onChange={(e) => setUserProfile({ ...userProfile, company: e.target.value })}
                    />
                  </div>
                  <Button type="submit">Update Profile</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                <Button variant="outline">Enable 2FA</Button>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Password</h3>
                <p className="text-sm text-gray-500">Change your password or reset it if forgotten</p>
                <Dialog open={isPasswordResetOpen} onOpenChange={setIsPasswordResetOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline">Reset Password</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Reset Password</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handlePasswordReset} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input
                          id="new-password"
                          type="password"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm Password</Label>
                        <Input
                          id="confirm-password"
                          type="password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>
                      <Button type="submit">Update Password</Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing">
          <Card>
            <CardHeader>
              <CardTitle>Billing and Subscription</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Current Plan</h3>
                <div className="flex items-center space-x-2">
                  <BadgeCheck className="h-5 w-5 text-green-500" />
                  <span>{subscription.plan}</span>
                </div>
                <p className="text-sm text-gray-500">
                  Your plan renews on {subscription.nextBillingDate} for {subscription.amount}
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Payment Method</h3>
                <div className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5" />
                  <span>Visa ending in 1234</span>
                </div>
                <Button variant="outline">Update Payment Method</Button>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Billing History</h3>
                <Button variant="outline">View Billing History</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 