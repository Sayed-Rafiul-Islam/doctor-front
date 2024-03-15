"use client"

import { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { CalendarDays, Clock } from "lucide-react";
import { Button } from "./ui/button";
import "./bookAppointment.css"
import axios from "axios";
import { Textarea } from "./ui/textarea";
import toast, { Toaster } from "react-hot-toast";
const BookAppointment = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [note, setNote] = useState('')
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [timeSlot, setTimeSlot] = useState([])
    const [selectedSlot, setSelectedSlot] = useState('')

    useEffect(() => {
        getTtime()
    },[])
    
    const getTtime = () => {
        const timeList : any = []

        for (let i = 10; i < 12; i++) {
            timeList.push({
                time : i + ':00 AM'
            })
            timeList.push({
                time : i + ':30 AM'
            })
        }

        for (let i = 12; i <= 12; i++) {
            timeList.push({
                time : i + ':00 PM'
            })
            timeList.push({
                time : i + ':30 PM'
            })
        }

        for (let i = 1; i <= 6; i++) {
            timeList.push({
                time : i + ':00 PM'
            })
            timeList.push({
                time : i + ':30 PM'
            })
        }

        setTimeSlot(timeList)
    }

    const isPastDay = (day : any) => day < new Date()

    const handleBooking = async () => {
        try {
            axios.post(`http://localhost:5000/api/appointments`,{name,email,phone,note,date,selectedSlot})
            toast.success("Appointment Booked")
            setName('')
            setEmail('')
            setPhone('')
            setNote('')
         
        } catch (error) {
            toast.error("Something went wrong")
        }
        
    }
    return ( 
        <div className="booking-card">
            <div className="flex items-center justify-center mt-10">
                <h1 className="my-5 font-bold text-primary lg:text-4xl md:text-3xl text-2xl">Book Appointment</h1>
            </div>
                <div className="grid grid-cols-2 gap-2">
                    <div>
                        <label className="opacity-70">Name <span className="text-red-500">*</span></label>
                        <Input onChange={(e)=>setName(e.target.value)} value={name} required placeholder="John doe" />
                    </div>
                    <div>
                        <label className="opacity-70">Phone <span className="text-red-500">*</span></label>
                        <Input onChange={(e)=>setPhone(e.target.value)} value={phone} required placeholder="+880197..." />
                    </div>
                    <div className="col-span-2">
                        <label className="opacity-70">Email <span className="text-red-500">*</span></label>
                        <Input onChange={(e)=>setEmail(e.target.value)} value={email} required placeholder="john@gmail.com" />
                    </div>
                    <div className="col-span-2">
                        <label className="opacity-70">Note</label>
                        <Textarea onChange={(e)=>setNote(e.target.value)} value={note} placeholder="Optional" />
                    </div>
                </div>
                <div className="flex justify-center">
                <Dialog>
                    <DialogTrigger 
                    className="dialogue-trigger dialogue-trigger-btn border-b-2 border-primary text-primary font-semibold py-2 lg:px-32 mx-2 px-20 my-5 rounded-lg"
                    >
                        Book
                    </DialogTrigger>
                    {
                        (name === '' || email === '' || phone === '') ?
                        <DialogContent>
                        <DialogHeader>
                            <DialogTitle className="text-red-500">Cannot Book Appointment</DialogTitle>
                        </DialogHeader>
                        <DialogDescription className="text-center lg:text-left">
                            Fill in all the fields
                        </DialogDescription>
                        <DialogFooter>
                            <DialogClose>
                                <Button type="button" variant='destructive'>Close</Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                        
                    :
                    <DialogContent>
                        <DialogHeader>
                        <DialogTitle className="text-center">Book Appointment</DialogTitle>
                        <DialogDescription>
                            <div className="flex lg:flex-row md:flex-row flex-col lg:pt-0 md:pt-0 pt-48 max-h-[550px] overflow-y-scroll items-center justify-center gap-2">
                                {/* calender */}
                                <div className="flex flex-col gap-3 items-baseline">
                                    <h2 className="flex gap-2 items-center">
                                        <CalendarDays className="text-cyan-500" size={15}/>
                                        Select Date
                                    </h2>
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        className="rounded-md border"
                                        disabled={isPastDay}
                                    />
                                </div>
                                <div className="mt-3">
                                    <h2 className="flex gap-2 items-center mb-3">
                                            <Clock className="text-cyan-500" size={15}/>
                                            Select Time Slot
                                        </h2>
                                    <div className="grid grid-cols-3 gap-2 border rounded-lg p-3">
                                        {   timeSlot &&
                                            timeSlot.map(({time},index) => 
                                                <h2 
                                                onClick={()=>setSelectedSlot(time)}
                                                className={`p-2 border rounded-lg text-xs
                                                text-center cursor-pointer hover:bg-primary hover:text-white transition-all
                                                ${selectedSlot === time && 'bg-primary text-white'}`}
                                                key={index}>{time}</h2>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </DialogDescription>
                        </DialogHeader>
                        <DialogFooter className="mx-auto lg:mx-0 md:mx-0">
                            <DialogClose>
                                <Button className="mr-4" type="button" variant='destructive'>Close</Button>
                                <Button onClick={handleBooking} type="button" variant='default'>Submit</Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                    }
                    
                </Dialog>
                </div>
                <Toaster />
            </div>
     );
}
 
export default BookAppointment;