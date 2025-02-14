"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ExternalLink } from "lucide-react"
import { BackButton } from "@/components/back-button"

type Appointment = {
  id: number
  date: string
  type: string
  status: string
  location: string
  mlsListing?: string
}

type Client = {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
  appointments: Appointment[]
  probabilityOfClose: number
  preferences: string[]
  notes: string
}

const defaultClient: Client = {
  id: 0,
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  appointments: [],
  probabilityOfClose: 0,
  preferences: [],
  notes: "",
}

export default function ClientDetailsPage() {
  const params = useParams()
  const [client, setClient] = useState<Client>(defaultClient)
  const [isLoading, setIsLoading] = useState(true)
  const [newAppointment, setNewAppointment] = useState<Omit<Appointment, "id">>({
    date: "",
    type: "",
    status: "Scheduled",
    location: "",
    mlsListing: "",
  })
  const [editingAppointment, setEditingAppointment] = useState<Appointment | null>(null)
  const [notes, setNotes] = useState("")

  useEffect(() => {
    // Simulate API call with setTimeout to avoid immediate state updates
    const fetchClient = async () => {
      setIsLoading(true)
      try {
        // In a real application, you would fetch this data from your API
        await new Promise(resolve => setTimeout(resolve, 100)) // Add small delay to prevent hydration issues
        const mockClient: Client = {
          id: Number(params.id),
          firstName: "John",
          lastName: "Doe",
          email: "john@example.com",
          phone: "123-456-7890",
          appointments: [
            {
              id: 1,
              date: "2024-02-15",
              type: "Initial Consultation",
              status: "Completed",
              location: "Office",
              mlsListing: "",
            },
            {
              id: 2,
              date: "2024-02-20",
              type: "Property Viewing",
              status: "Scheduled",
              location: "123 Main St",
              mlsListing: "MLS123456",
            },
          ],
          probabilityOfClose: 0.7,
          preferences: ["3 bedrooms", "2 bathrooms", "Garden", "Close to schools"],
          notes: "Client is looking for a family home in the suburbs. Prefers modern design.",
        }
        setClient(mockClient)
        setNotes(mockClient.notes)
      } catch (error) {
        console.error("Error fetching client:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchClient()
  }, [params.id])

  const handleAddAppointment = () => {
    if (client && newAppointment.date && newAppointment.type) {
      const updatedClient = {
        ...client,
        appointments: [...client.appointments, { id: client.appointments.length + 1, ...newAppointment }],
      }
      setClient(updatedClient)
      setNewAppointment({ date: "", type: "", status: "Scheduled", location: "", mlsListing: "" })
    }
  }

  const handleEditAppointment = (appointment: Appointment) => {
    setEditingAppointment(appointment)
  }

  const handleUpdateAppointment = () => {
    if (client && editingAppointment) {
      const updatedAppointments = client.appointments.map((app) =>
        app.id === editingAppointment.id ? editingAppointment : app
      )
      setClient({ ...client, appointments: updatedAppointments })
      setEditingAppointment(null)
    }
  }

  const handleDeleteAppointment = (id: number) => {
    if (client) {
      const updatedAppointments = client.appointments.filter((app) => app.id !== id)
      setClient({ ...client, appointments: updatedAppointments })
    }
  }

  const handleUpdateNotes = () => {
    if (client) {
      setClient({ ...client, notes })
      // In a real app, you would save this to your backend
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <BackButton />
          <h2 className="text-3xl font-bold tracking-tight">Client Details</h2>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p>
                <strong>Name:</strong> {client.firstName} {client.lastName}
              </p>
              <p>
                <strong>Email:</strong> {client.email}
              </p>
            </div>
            <div>
              <p>
                <strong>Phone:</strong> {client.phone}
              </p>
              <p>
                <strong>Probability of Close:</strong> {(client.probabilityOfClose * 100).toFixed(0)}%
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Appointments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>MLS Listing</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {client.appointments.map((appointment) => (
                  <TableRow key={appointment.id}>
                    <TableCell>{appointment.date}</TableCell>
                    <TableCell>{appointment.type}</TableCell>
                    <TableCell>{appointment.status}</TableCell>
                    <TableCell>{appointment.location}</TableCell>
                    <TableCell>
                      {appointment.mlsListing ? (
                        <a
                          href={`https://www.mls.com/listing/${appointment.mlsListing}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline flex items-center"
                        >
                          {appointment.mlsListing} <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      ) : (
                        "N/A"
                      )}
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" className="mr-2" onClick={() => handleEditAppointment(appointment)}>
                        Edit
                      </Button>
                      <Button variant="destructive" onClick={() => handleDeleteAppointment(appointment.id)}>
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-4">Add Appointment</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Appointment</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="date" className="text-right">
                    Date
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={newAppointment.date}
                    onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="type" className="text-right">
                    Type
                  </Label>
                  <Input
                    id="type"
                    value={newAppointment.type}
                    onChange={(e) => setNewAppointment({ ...newAppointment, type: e.target.value })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="status" className="text-right">
                    Status
                  </Label>
                  <Select
                    value={newAppointment.status}
                    onValueChange={(value) => setNewAppointment({ ...newAppointment, status: value })}
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Scheduled">Scheduled</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                      <SelectItem value="Cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="location" className="text-right">
                    Location
                  </Label>
                  <Input
                    id="location"
                    value={newAppointment.location}
                    onChange={(e) => setNewAppointment({ ...newAppointment, location: e.target.value })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="mlsListing" className="text-right">
                    MLS Listing
                  </Label>
                  <Input
                    id="mlsListing"
                    value={newAppointment.mlsListing}
                    onChange={(e) => setNewAppointment({ ...newAppointment, mlsListing: e.target.value })}
                    className="col-span-3"
                  />
                </div>
              </div>
              <Button onClick={handleAddAppointment}>Add Appointment</Button>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5">
            {client.preferences.map((preference, index) => (
              <li key={index}>{preference}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Textarea
              value={notes}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNotes(e.target.value)}
              placeholder="Add notes about the client..."
              className="min-h-[100px]"
            />
            <Button onClick={handleUpdateNotes}>Save Notes</Button>
          </div>
        </CardContent>
      </Card>

      {editingAppointment && (
        <Dialog open={!!editingAppointment} onOpenChange={() => setEditingAppointment(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Appointment</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-date" className="text-right">
                  Date
                </Label>
                <Input
                  id="edit-date"
                  type="date"
                  value={editingAppointment.date}
                  onChange={(e) => setEditingAppointment({ ...editingAppointment, date: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-type" className="text-right">
                  Type
                </Label>
                <Input
                  id="edit-type"
                  value={editingAppointment.type}
                  onChange={(e) => setEditingAppointment({ ...editingAppointment, type: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-status" className="text-right">
                  Status
                </Label>
                <Select
                  value={editingAppointment.status}
                  onValueChange={(value) => setEditingAppointment({ ...editingAppointment, status: value })}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Scheduled">Scheduled</SelectItem>
                    <SelectItem value="Completed">Completed</SelectItem>
                    <SelectItem value="Cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-location" className="text-right">
                  Location
                </Label>
                <Input
                  id="edit-location"
                  value={editingAppointment.location}
                  onChange={(e) => setEditingAppointment({ ...editingAppointment, location: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-mlsListing" className="text-right">
                  MLS Listing
                </Label>
                <Input
                  id="edit-mlsListing"
                  value={editingAppointment.mlsListing}
                  onChange={(e) => setEditingAppointment({ ...editingAppointment, mlsListing: e.target.value })}
                  className="col-span-3"
                />
              </div>
            </div>
            <Button onClick={handleUpdateAppointment}>Update Appointment</Button>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

