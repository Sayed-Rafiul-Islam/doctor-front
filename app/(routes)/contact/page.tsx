import ContackForm from "@/components/contact-form";
import Info from "@/components/info";
import Map from "@/components/map";

const Contact = () => {
    return ( 
        <div>
            <h1 className="text-5xl font-bold text-primary text-center lg:mt-20">Contact</h1>
            <div className="bg-white w-11/12 mx-auto shadow-xl rounded-xl">
                <Info />
                <Map />
                <ContackForm />
            </div>
        </div>
     );
}
 
export default Contact;