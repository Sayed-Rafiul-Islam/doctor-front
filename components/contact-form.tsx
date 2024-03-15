"use client"
import { Input } from "./ui/input";
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

import './contact-form.css'
import { useState } from "react";
import toast from "react-hot-toast";

const ContackForm = () => {
    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')

    const handleMessage = () => {
        if ( name === '' || email === '' || phone === '' || message === '') {
            toast.error("Mendatory Unfilled field exists.")
        } else {
            console.log({name,email,phone,message})
            toast.success("Message sent.")
            setName('')
            setEmail('')
            setPhone('')
            setMessage('')
        }
    }
    return ( 
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-2 contact-container">
            <h2 className="col-span-2 text-3xl font-bold lg:text-left text-center mb-4"><span className="text-primary">Message</span> Us</h2>
            <div className="">
                <label>Name <span className="text-red-500">*</span></label>
                <Input value={name} onChange={e=>setName(e.target.value)} required type="text" />
            </div>
            <div className="">
                <label>Phone <span className="text-red-500">*</span></label>
                <Input value={phone} onChange={e=>setPhone(e.target.value)} required type="text" />
            </div>
            <div className="col-span-2">
                <label>Email <span className="text-red-500">*</span></label>
                <Input value={email} onChange={e=>setEmail(e.target.value)} required type="text" />
            </div>
            <div className="col-span-2 row-span-8">
                <label>Message <span className="text-red-500">*</span></label>
                <Textarea value={message} onChange={e=>setMessage(e.target.value)} required placeholder="Type your message here." />
            </div>
            <Button onClick={handleMessage} className="col-span-2">Send</Button>
        </div>
     );
}
 
export default ContackForm;