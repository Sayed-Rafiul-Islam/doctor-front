import BookAppointment from "@/components/BookAppointment";



const Appointment = () => {

    return ( 
        <div className="shadow-md rounded-lg mx-auto w-1/2">
            <div className="flex items-center justify-center mt-10">
                <h1 className="my-5 font-bold bg-gradient-to-tr from-blue-800 via-blue-400 to-primary lg:text-5xl md:text-4xl text-xl bg-clip-text
                inline-block text-transparent">Book Appointment</h1>
            </div>
            <BookAppointment />
        </div>
     );
}
 
export default Appointment;