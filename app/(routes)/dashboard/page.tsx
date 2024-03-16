"use client"

import { AlertModal } from "@/components/modals/alert-modal";
import { FilterModal } from "@/components/modals/filter-modal";
import { LoginModal } from "@/components/modals/login-modal";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface AppointmentProps {
    name : string,
    email : string,
    date : string,
    selectedSlot : string,
    note : string,
    phone : string,
    _id : string
}

const Dashboard = () => {

    const router = useRouter()

    const [appointments, setAppointments] = useState([])
    const [isFilter, setIsFilter] = useState(false)
    const [all, setAll] = useState([])
    const [open, setOpen] = useState(false)
    const [filterModal, setFilterModal] = useState(false)
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
                setAll(data)
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

    const removeAppointment = async () => {
        try {
            await axios.delete(`https://doctor-portfolio-server.vercel.app/api/removeAppointment?id=${targetedId}`)
            const updatedAppointments = appointments.filter(({_id}) => targetedId !== _id)
            setAppointments(updatedAppointments)
            setDeleteModal(false)
            toast.success("Appointment Removed.")
        } catch (error) {
            toast.error("Something went wrong.")
        }
    }

    const dateFilter = (from : string, to : string) => {
        if( from > to) {
            toast.error("From Date must be less than To Date")
        } else {
        const filtered = all.filter((item : any) => {
            if ( from+'T00:00:00.000Z' <= item.date && to+'T23:59:59.000Z' >= item.date) {
                return item
            }
        })
        setIsFilter(true)
        setAppointments(filtered)
        setFilterModal(false)
        }
    }

    const showAll =  () => {
        setAppointments(all)
        setIsFilter(false)
    }

    return ( 
        <div>
            <LoginModal
                isOpen={open} 
                onClose={()=>router.push('/')} 
                onConfirm={()=>setFetch(!fetch)} 
                loading={loading}
                
            />
            <FilterModal
                isOpen={filterModal} 
                onClose={()=>setFilterModal(false)} 
                onConfirm={({from,to})=>dateFilter(from,to)} 
                loading={loading}
                
            />
            <AlertModal
            isOpen={deleteModal} 
            onClose={()=>setDeleteModal(false)} 
            onConfirm={removeAppointment} 
            loading={loading}
            />
            <div className="w-3/4 mx-auto mt-8 shadow-md py-8">
                <h1 className="md:text-5xl text-2xl text-center text-primary "><span className=" font-bold">{isFilter ? "Filtered" : "Appointments"}</span> [{appointments.length}]</h1>
                <div className="flex flex-col md:flex-row md:justify-end gap-2 md:w-3/4 w-1/2 mx-auto mt-10">
                    <Button variant='default' onClick={()=>setFilterModal(true)} >Filter by Date</Button>
                    <Button disabled={!isFilter} variant='outline' onClick={showAll} >Show All</Button>
                </div>
                <div>
                {   !loading ? 
                    <>
                       { appointments &&
                    appointments.map(({name,email,date,note,phone,selectedSlot,_id} : AppointmentProps,index) => 
                    <div className="flex overflow-hidden justify-between border-b border-r border-cyan-500 
                    rounded-md mx-auto w-3/4 my-5 md:pl-4 pl-2 bg-cyan-400 bg-opacity-10
                    hover:scale-105 hover:shadow-lg hover:bg-white hover:bg-opacity-30 transition-all" key={_id}>
                        <div className="py-2 w-full flex flex-col px-0 md:px-2">
                            <div className="flex items-center justify-between border-b border-cyan-200 rounded-lg py-2">
                                <h1 className="text-xs md:text-sm">Appt. No : <span className="font-semibold text-black">{index+1}</span></h1>
                                <Button 
                                    variant='destructive' 
                                    className="bg-transparent text-red-500 hover:text-white ml-20 p-2"
                                    onClick={()=>openModal(_id)}
                                    >
                                        <Trash2 />
                                </Button>
                            </div>
                            <div className="px-2">
                                <h1><span className="text-3xl font-semibold text-cyan-500">{name}</span></h1>
                                <h3 className="mb-2">{email} | {phone}</h3>
                                <p className="text-xs text-slate-700 pr-6"><i>{note}</i></p>
                                <div className="my-2">
                                    <p className="text-xs font-semibold">Date : {date.split("T")[0]}</p>
                                    <p className="text-xs font-semibold">Time Slot : {selectedSlot}</p>
                                </div>
                            </div>
                        </div>

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
        </div>
     );
}
 
export default Dashboard;