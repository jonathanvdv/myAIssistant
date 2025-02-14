"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface Appointment {
  id: number
  client: string
  property: string
  date: string
  time: string
  status: "Pending" | "Confirmed" | "Cancelled"
}

// Mock data - in a real app, this would come from your API
const mockAppointments: Appointment[] = [
  { id: 1, client: "John Smith", property: "123 Main St", date: "2024-02-15", time: "10:00 AM", status: "Confirmed" },
  { id: 2, client: "Sarah Johnson", property: "456 Oak Ave", date: "2024-02-15", time: "2:30 PM", status: "Pending" },
  { id: 3, client: "Michael Brown", property: "789 Pine Rd", date: "2024-02-16", time: "11:15 AM", status: "Confirmed" },
  { id: 4, client: "Emma Davis", property: "321 Elm St", date: "2024-02-16", time: "3:45 PM", status: "Confirmed" },
]

const chartData = [
  { date: "Mon", total: 4, confirmed: 3 },
  { date: "Tue", total: 6, confirmed: 4 },
  { date: "Wed", total: 5, confirmed: 5 },
  { date: "Thu", total: 7, confirmed: 6 },
  { date: "Fri", total: 3, confirmed: 2 },
  { date: "Sat", total: 2, confirmed: 2 },
  { date: "Sun", total: 1, confirmed: 1 },
]

export default function AppointmentsPage() {
  const [appointments] = useState<Appointment[]>(mockAppointments)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Appointments</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>New Appointment</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Appointment</DialogTitle>
            </DialogHeader>
            {/* Add appointment form would go here */}
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-full lg:col-span-5">
          <CardHeader>
            <CardTitle>Upcoming Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Client</TableHead>
                  <TableHead>Property</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {appointments.map((appointment) => (
                  <TableRow key={appointment.id}>
                    <TableCell>{appointment.client}</TableCell>
                    <TableCell>{appointment.property}</TableCell>
                    <TableCell>{`${appointment.date} ${appointment.time}`}</TableCell>
                    <TableCell>{appointment.status}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">View</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="col-span-full md:col-span-1 md:row-span-2 lg:col-span-2">
          <CardHeader>
            <CardTitle>Appointment Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={(date: Date | undefined) => date && setSelectedDate(date)}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        <Card className="col-span-full md:col-span-1 lg:col-span-5">
          <CardHeader>
            <CardTitle>Appointments This Week</CardTitle>
          </CardHeader>
          <CardContent className="h-[200px] md:h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="total" fill="#cb6ce6" name="Total" />
                <Bar dataKey="confirmed" fill="#00c3cc" name="Confirmed" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 