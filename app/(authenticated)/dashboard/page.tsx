"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Calendar, Mail, MessageSquare, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"

// Mock data - in a real app, this would come from your API
const mockData = {
  totalAppointments: 128,
  confirmedAppointments: 98,
  emailReminders: 245,
  smsReminders: 189,
  appointmentTrend: [
    { date: "Mon", appointments: 12 },
    { date: "Tue", appointments: 8 },
    { date: "Wed", appointments: 15 },
    { date: "Thu", appointments: 10 },
    { date: "Fri", appointments: 13 },
    { date: "Sat", appointments: 6 },
    { date: "Sun", appointments: 4 },
  ],
  appointmentTypes: [
    { type: "Initial Consultation", count: 45 },
    { type: "Property Viewing", count: 65 },
    { type: "Follow-up", count: 18 },
  ],
  recentAppointments: [
    { id: 1, client: "John Smith", property: "123 Main St", date: "2024-02-15", time: "10:00 AM", status: "Confirmed" },
    { id: 2, client: "Sarah Johnson", property: "456 Oak Ave", date: "2024-02-15", time: "2:30 PM", status: "Pending" },
    { id: 3, client: "Michael Brown", property: "789 Pine Rd", date: "2024-02-16", time: "11:15 AM", status: "Confirmed" },
    { id: 4, client: "Emma Davis", property: "321 Elm St", date: "2024-02-16", time: "3:45 PM", status: "Confirmed" },
  ],
}

export default function DashboardPage() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <Button onClick={() => setIsChatOpen(true)}>Open AI Assistant</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Appointments</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockData.totalAppointments}</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Confirmed Appointments</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockData.confirmedAppointments}</div>
            <p className="text-xs text-muted-foreground">+10.5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Email Reminders</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockData.emailReminders}</div>
            <p className="text-xs text-muted-foreground">+12.2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">SMS Reminders</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockData.smsReminders}</div>
            <p className="text-xs text-muted-foreground">+7.8% from last month</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Appointment Trend</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={mockData.appointmentTrend}>
                <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value: number) => `${value}`}
                />
                <Bar dataKey="appointments" fill="#BA55D3" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Appointment Types</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={mockData.appointmentTypes}
                  dataKey="count"
                  nameKey="type"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {mockData.appointmentTypes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={["#BA55D3", "#40E0D0", "#000000"][index % 3]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4">
              {mockData.appointmentTypes.map((type, index) => (
                <div key={type.type} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-2 bg-[${["#BA55D3", "#40E0D0", "#000000"][index % 3]}]`} />
                    <span>{type.type}</span>
                  </div>
                  <span>{type.count}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Recent Appointments</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client</TableHead>
                <TableHead>Property</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockData.recentAppointments.map((appointment) => (
                <TableRow key={appointment.id}>
                  <TableCell>{appointment.client}</TableCell>
                  <TableCell>{appointment.property}</TableCell>
                  <TableCell>{`${appointment.date} ${appointment.time}`}</TableCell>
                  <TableCell>{appointment.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Sheet open={isChatOpen} onOpenChange={setIsChatOpen}>
        <SheetContent side="right" className="w-[400px] sm:w-[540px]">
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
    </div>
  )
} 