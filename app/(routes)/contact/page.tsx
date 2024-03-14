import ContackForm from "@/components/contact-form";
import Info from "@/components/info";
import Map from "@/components/map";

const Contact = () => {
    return ( 
        <div>
            <h1 className="text-5xl font-bold text-primary text-center lg:mt-20 mb-10">Contact</h1>
            <div className="bg-white w-11/12 mx-auto shadow-xl rounded-xl overflow-hidden">
                <Info />
                <div className="flex flex-col md:flex-col gap-6 justify-center items-center lg:flex-row mt-20 w-full px-12 pb-20">
                    <Map />
                    <ContackForm />
                </div>
            </div>
        </div>
     );
}
 
export default Contact;