"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "../ui/input"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog"
import axios from "axios"

interface Data {
    from : string,
    to : string
}

interface LoginModalProps {
    isOpen : boolean,
    onClose : () => void,
    onConfirm : ({from,to} : Data) => void,
    loading : boolean,
}

export const FilterModal : React.FC<LoginModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    loading,

}) => {
    const [isMounted, setIsMounted] = useState(false)
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')

    useEffect(()=>{
        setIsMounted(true)
    },[])

    if (!isMounted) {
        return null
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle className="text-center text-3xl text-primary">Enter Dates</DialogTitle>
            </DialogHeader>
             <div className="space-x-2 flex flex-col gap-2 items-center justify-end w-3/4 mx-auto">
               <div>
               <label>From</label>
                 <Input className="my-2" type="date" value={from} onChange={(e)=>setFrom(e.target.value)} />
               </div>
                 <div>
                 <label>To</label>
                 <Input className="my-2" type="date" value={to} onChange={(e)=>setTo(e.target.value)} />
                 </div>
                 
                 <div className="flex gap-x-2">
                 <Button disabled={ from === '' || to === ''} variant='default' onClick={()=>onConfirm({from,to})}>
                    Filter
                 </Button>
                 <Button variant='destructive' onClick={onClose}>
                    Cancel
                 </Button>
                 </div>
             </div>
        </DialogContent>
    </Dialog>        
    )
}