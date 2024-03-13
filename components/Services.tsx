"use client"
import Image from "next/image";
import service from '@/images/service.jpg'
import { CustomBtn } from "./ui/custom-btn";
import { useRouter } from "next/navigation";

const Services = () => {
    const router = useRouter()
    return ( 
        <div className="flex lg:flex-row md:flex-col-reverse flex-col-reverse w-5/6 items-center justify-center mx-auto mt-36
         px-20 gap-10 bg-black bg-opacity-10 py-10 shadow-lg rounded-lg
         
         ">
            <div className="lg:w-1/3 flex flex-col justify-center">
                <h2 className="lg:text-4xl lg:text-left md:text-2xl text-2xl text-center font-bold mb-4">Services I <span className="text-primary">Provide</span></h2>
                <p className="text-sm text-justify text-slate-800">As a cardiologist, I can provide a range of services related to the diagnosis, 
                treatment, and management of cardiovascular conditions. Some of the services he can provide include
                Cardiac Consultations, Diagnostic Testing, Treatment Planning, Management of Heart Conditions, 
                Interventional Procedures, Preventive Care, Patient Education and so on. To learn more, go to 
                services section
                </p>
                <div className="mt-5 lg:mx-0 mx-auto" onClick={()=> router.push('/services')}>
                    <CustomBtn text="Services" />
                </div>
            </div>
            <div className="relative lg:h-[400px] lg:w-[600px] md:w-[500px] md:h-[300px] w-full h-[200px]">
                <Image className="rounded-lg shadow-lg" fill src={service} alt="service" />
            </div>
        </div>
     );
}
 
export default Services;