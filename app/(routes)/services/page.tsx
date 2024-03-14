import ServiceGallery from "@/components/Service-gallery";

const Services = () => {
    const services = [
        {
            id : 1,
            image : 'https://i.ibb.co/kByj7zx/cardiac.jpg',
            label : "Cardiac Consultations",
            service : "Conducting comprehensive evaluations of patients with heart-related concerns, including symptoms such as chest pain, shortness of breath, palpitations, and fatigue."
        },
        {
            id : 2,
            image : 'https://i.ibb.co/FV4QRtN/lab.jpg',
            label : "Diagnostic Testing",
            service : "Ordering and interpreting various diagnostic tests to assess cardiac health, such as electrocardiograms (ECG/EKG), echocardiograms, stress tests, Holter monitoring, and cardiac catheterization."
        },
        {
            id : 3,
            image : 'https://i.ibb.co/8K7h1KN/planning.jpg',
            label : "Treatment Planning",
            service : "Developing individualized treatment plans based on the patient's medical history, diagnostic results, and current health status. This may involve medication management, lifestyle modifications, or interventional procedures."
        },
        {
            id : 4,
            image : 'https://i.ibb.co/XXhJ5nr/followup.jpg',
            label : "Follow-Up Care",
            service : "Monitoring patients progress over time, adjusting treatment plans as needed, and providing ongoing support and guidance to optimize cardiovascular health."
        },
        {
            id : 5,
            image : 'https://i.ibb.co/z7fYrMS/methods.jpg',
            label : "Interventional Procedures",
            service : "Performing interventional procedures such as angioplasty, stent placement, and cardiac catheterization to treat blockages or abnormalities in the heart's blood vessels and chambers."
        },
        {
            id : 6,
            image : 'https://i.ibb.co/njXCrSr/care.jpg',
            label : "Preventive Care",
            service : "Providing guidance on preventive measures to reduce the risk of heart disease, including advice on diet, exercise, smoking cessation, and medication adherence."
        },
        {
            id : 7,
            image : 'https://i.ibb.co/GCJK5QK/education.jpg',
            label : "Patient Education",
            service : "Educating patients about their heart condition, treatment options, and self-care strategies to empower them to take an active role in managing their health."
        },
        {
            id : 8,
            image : 'https://i.ibb.co/kByj7zx/cardiac.jpg',
            label : "Management of Heart Conditions",
            service : "Managing a wide range of heart conditions, including coronary artery disease, heart failure, arrhythmias, valvular heart disease, congenital heart defects, and hypertension."
        },
    ]
    return ( 
        <div className="flex flex-col items-center">
            <h1 className="lg:text-5xl text-3xl font-bold my-10"><span className="text-primary">Services</span> I Provide</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
            {
                services.map(({id,label,image,service}) =>
                <ServiceGallery
                    key={id}
                    service={service}
                    id={id}
                    image={image}
                    label={label}
                />
                )
            }
            </div>
            
        </div>
     );
}
 
export default Services;