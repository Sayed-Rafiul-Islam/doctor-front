import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
    return ( 
        <div className="w-full border-t-2 border-white mt-20 flex justify-between lg:py-20 md:py-20 py-10 lg:px-16 md:px-16 px-5">
            <h3 className="text-xs font-semibold"><span className="lg:mr-3 mr-0">&copy;</span> 2023 All right reserved</h3>
            <div className="flex">
                <Twitter size={17} className="mx-2 hover:scale-110 hover:shadow-lg transition-all cursor-pointer" />
                <Linkedin size={17} className="mx-2 hover:scale-110 hover:shadow-lg transition-all cursor-pointer" />
                <Facebook size={17} className="mx-2 hover:scale-110 hover:shadow-lg transition-all cursor-pointer" />
                <Instagram size={17} className="mx-2 hover:scale-110 hover:shadow-lg transition-all cursor-pointer" />
            </div>
        </div>
     );
}
 
export default Footer;