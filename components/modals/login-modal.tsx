"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "../ui/input"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog"
import axios from "axios"

interface LoginModalProps {
    isOpen : boolean,
    onClose : () => void,
    onConfirm : () => void,
    loading : boolean,
}

export const LoginModal : React.FC<LoginModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    loading,

}) => {
    const [isMounted, setIsMounted] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(()=>{
        setIsMounted(true)
    },[])

    if (!isMounted) {
        return null
    }

    const login = async () => {
        try {
            const {data} = await axios.post(`https://doctor-portfolio-server.vercel.app/api/login`,{email,password})
            localStorage.setItem("accessToken", data.accessToken)
            return onConfirm()
        } catch (error : any) {
            localStorage.removeItem("accessToken")
            if (error?.response?.status === 404) {
                console.log("no account with this email")
            } else if (error?.response?.status === 401) {
                console.log("email password did not match")
            } else {
                console.log("something went wrong")
            }
        }
        
        
    }



    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle className="text-center text-3xl text-primary">Login</DialogTitle>
                <DialogDescription className="text-center">Authenticate to get access</DialogDescription>
            </DialogHeader>
             <div className="space-x-2 flex flex-col gap-2 items-center justify-end w-3/4 mx-auto">
                 <Input className="my-2" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="jon@gmail.com"/>
                 <Input className="my-2" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="********"/>
                 
                 <Button disabled={ email === '' || password === ''} variant='default' onClick={login}>
                     Login
                 </Button>
             </div>
        </DialogContent>
    </Dialog>
       
            // <div className="pt-6 space-x-2 flex items-center justify-end w-full">
            //     <Input />
            //     <Input />
            //     <Button disabled={loading} variant='default' onClick={onConfirm}>
            //         Submit
            //     </Button>
            // </div>
        
    )
}