"use client"

import { AlertModal } from "@/components/modals/alert-modal";
import { LoginModal } from "@/components/modals/login-modal";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Trash, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface AppointmentProps {
    name : string,
    email : string,
    date : string,
    selectedSlot : string,
    _id : string
}

const Dashboard = () => {

    const router = useRouter()

    const [appointments, setAppointments] = useState([])
    const [open, setOpen] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [fetch, setFetch] = useState(false)
    const [targetedId, setTargetedId] = useState('')

    useEffect(()=> {
        const token = Boolean(localStorage.getItem("accessToken")) ? localStorage.getItem("accessToken") : null;
        const getAppointments = async () => {
            try {
                setOpen(false)
                setLoading(true)
                const {data} = await axios(`https://doctor-portfolio-server.vercel.app/api/getAppointments?token=${token}`)
                setAppointments(data)
                setLoading(false)
            } catch (error) {

                setOpen(true)
            }
        }
        getAppointments()
    },[fetch])

    const openModal = (id : string) => {
        setTargetedId(id)
        setDeleteModal(true)
    }

    const removeAppointment = () => {
        const updatedAppointments = appointments.filter(({_id}) => targetedId !== _id)
        setAppointments(updatedAppointments)
        setDeleteModal(false)
    }

    return ( 
        <div>
            <LoginModal
                isOpen={open} 
                onClose={()=>router.push('/')} 
                onConfirm={()=>setFetch(!fetch)} 
                loading={loading}
                
            />
            <AlertModal
            isOpen={deleteModal} 
            onClose={()=>setDeleteModal(false)} 
            onConfirm={removeAppointment} 
            loading={loading}
            />
            <div className="w-3/4 mx-auto mt-8 shadow-md py-8">
                <h1 className="text-5xl text-center text-primary "><span className=" font-bold">Appointments</span> [{appointments.length}]</h1>
                {   !loading ? 
                    <>
                       { appointments &&
                    appointments.map(({name,email,date,selectedSlot,_id} : AppointmentProps,index) => 
                    <div className="flex justify-between border-b border-r border-cyan-500 rounded-md mx-auto w-3/4 my-5 p-4 bg-cyan-400 bg-opacity-10" key={_id}>
                        <div className="">
                            <h1 >Appointment No : <span className="font-semibold text-black">{index+1}</span></h1>
                            <h1><span className="text-3xl font-semibold text-black">{name}</span></h1>
                            <h3 className="text-lg">{email}</h3>
                            <p>Date : {date.split("T")[0]}</p>
                            <p>Time Slot : {selectedSlot}</p>
                        </div>
                        <Button 
                        variant='destructive' 
                        className="bg-transparent text-red-500 hover:text-white"
                        onClick={()=>openModal(_id)}
                        >
                            <Trash2 />
                        </Button>

                    </div>
                    )}
                    </>
                    :
                    <>
                        {
                            [1,2,3,4].map((item,index)=>
                            <div className="animate-pulse flex justify-between border-b border-r border-cyan-500 rounded-md mx-auto w-3/4 my-5 p-4 bg-cyan-400 bg-opacity-10" key={index}>
                                    <div className=" flex w-full opacity-20">
                                        <div className="flex-1 space-y-6 py-1">
                                        <div className="h-2 bg-primary rounded"></div>
                                        <div className="space-y-3">
                                            <div className="grid grid-cols-3 gap-4">
                                            <div className="h-2 bg-primary rounded col-span-2"></div>
                                            <div className="h-2 bg-primary rounded col-span-1"></div>
                                            </div>
                                            <div className="h-2 bg-primary rounded"></div>
                                        </div>
                                        </div>
                                    </div>
                            </div>  

                            )
                        }
                    </>
                    
                }
            </div>
        </div>
     );
}
 
export default Dashboard;