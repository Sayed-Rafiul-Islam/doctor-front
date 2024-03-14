import { Input } from "./ui/input";
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

import './contact-form.css'

const ContackForm = () => {
    return ( 
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-2 contact-container">
            <h2 className="col-span-2 text-3xl font-bold lg:text-left text-center mb-4"><span className="text-primary">Message</span> Us</h2>
            <div className="">
                <label>Name</label>
                <Input type="text" />
            </div>
            <div className="">
                <label>Phone</label>
                <Input type="text" />
            </div>
            <div className="col-span-2">
                <label>Email</label>
                <Input type="text" />
            </div>
            <div className="col-span-2 row-span-8">
                <label>Message</label>
                <Textarea placeholder="Type your message here." />
            </div>
            <Button className="col-span-2">Send</Button>
        </div>
     );
}
 
export default ContackForm;