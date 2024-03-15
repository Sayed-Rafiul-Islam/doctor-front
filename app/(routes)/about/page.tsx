import Image from "next/image";
import doc from '@/images/doc1.png'
import './about.css'

const About = () => {
    return ( 
        <div>
            <h1 className="text-5xl font-bold text-center lg:mt-20 mb-10">About <span className="text-primary">Me</span></h1>
            <div className="w-11/12 mx-auto shadow-xl rounded-xl overflow-hidden flex lg:flex-row flex-col-reverse items-center">
                <div className="doc-text lg:w-1/2 w-full text-justify px-6 py-10">
                    <p className="text-slate-700">    
                        I&apos;m John Doe, and I&apos;m a cardiologist, I&apos;ve dedicated my career to the study, diagnosis, and treatment 
                        of heart-related conditions. My journey into cardiology began with a deep fascination for the 
                        intricacies of the cardiovascular system and a desire to make a meaningful impact on patients lives.
                        <br />
                        <br />
                        After completing medical school and my residency in internal medicine, I pursued specialized 
                        training in cardiology. This involved rigorous coursework, hands-on clinical experience, and 
                        research opportunities to deepen my understanding of cardiac diseases and their management.
                        <br />
                        <br />
                        Throughout my career, I&apos;ve remained committed to staying at the forefront of medical advancements 
                        in cardiology. Whether it&apos;s adopting innovative diagnostic techniques, staying updated on the 
                        latest treatment modalities, or actively participating in clinical trials, I strive to provide 
                        my patients with the best possible care.
                        <br />
                        <br />
                        In addition to my clinical work, I also value patient education and empowerment. I believe in 
                        fostering open communication with my patients, ensuring they understand their condition and 
                        treatment options. By empowering them with knowledge, I aim to help them make informed 
                        decisions about their cardiac health and lifestyle.
                        <br />
                        <br />
                        Ultimately, as a cardiologist, my goal is to not only treat cardiac diseases but also to promote 
                        heart health and prevent future complications. I am dedicated to helping my patients lead 
                        fulfilling lives with healthy hearts.
                    </p>
                </div>
                <div className='doc-container relative mx-auto'>
                    <Image fill src={doc} alt='doc' />
                </div>
            </div>
        </div>
     );
}
 
export default About;