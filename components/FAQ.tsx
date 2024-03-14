import Image from "next/image";
import onlineConsult from '@/images/online consult.jpg'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  import './FAQ.css'
  

const FAQ = () => {

    const consultations = [
        {
            id : '1',
            label : "What to do if your head or neck hurts too often?",
            solution : `If a headache has become a fairly common occurrence in your life,
             you feel discomfort in the occipital or temporal region, then you can undergo a preventive 
             examination under the "If your head hurts often program, which will help determine the 
             source of the headache and choose an individual treatment that will eliminate the problem 
             and restore your good health.`
        },
        {
            id : '2',
            label : "What to do if it hurts in the chest or pricks the heart?",
            solution : `To minimize the likelihood of developing cardiovascular diseases, it is enough 
            to undergo a preventive examination once a year. The program allows for a short period of 
            time to conduct an extensive analysis of the main parameters of the cardiovascular system, 
            to detect asymptomatic and hidden forms of heart disease, to identify predisposition to 
            atherosclerosis, to assess the risk of developing coronary heart disease, as well as 
            angina pectoris and myocardial infarction, to give an objective assessment of the 
            effectiveness of the treatment.`
        },
        {
            id : '3',
            label : "How to prepare for an appointment with a cardiologist?",
            solution : `Special preparation is not required, but for maximum informativeness of the consultation, 
            it is advisable to have an archive of all available medical documents (outpatient medical record or 
            an extract from it), an ECG less than 2 weeks old, and information about home blood pressure figures.`
        },
        {
            id : '4',
            label : "What type of anesthesia is used in your medical center?",
            solution : `Surgery in our medical center takes place both under local anesthesia and under general 
            anesthesia. The choice of type of anesthesia depends on the indications, contraindications and wishes 
            of the patient.`
        },
        {
            id : '5',
            label : "Are surgeries performed at your medical center?",
            solution : `All surgical interventions that are listed in the "Services" section, in the Aesthetic 
            Surgery section, are performed on the basis of our medical center. We have all the necessary and 
            modern equipment and tools for surgical interventions, and we also have the best plastic and 
            laser surgeons!`
        }
    ]
    return ( 
        <div className="consult-container shadow-xl">
            <div className="relative online w-1/2">
                <Image className="rounded-xl shadow-lg" fill src={onlineConsult} alt="image" />
                <div className="consult-cover">
                    <h3 className="text-white text-center"><i>I will be there for you whenever you need me&quot;</i></h3>
                </div>
            </div>
            <div className="w-1/2 consult-text">
                <h2 className="text-3xl font-bold text-primary mb-10">Online Consultation</h2>
                {
                    consultations.map(({id,label,solution}) =>
                    <Accordion key={id} type="single" collapsible>
                        <AccordionItem value={id}>
                            <AccordionTrigger className="font-semibold">{label}</AccordionTrigger>
                            <AccordionContent className="text-slate-400">
                            <p>{solution}</p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    )
                }
            </div>
        </div>
     );
}
 
export default FAQ;