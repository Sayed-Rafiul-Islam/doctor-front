"use client"
import Image from 'next/image';
import './service-gallery.css'
import { ServiceModal } from './modals/service-modal';
import { useState } from 'react';

interface ServiceGalleryProps {
    id : number,
    label : string,
    image : string,
    service : string,
}

const ServiceGallery : React.FC<ServiceGalleryProps> = ({
    id,
    label,
    service,
    image
}) => {
    const [open, setOpen] = useState(false)

    const [loading, setLoading] = useState(false)


    return ( 
            <div>
            <ServiceModal
                    image={image}
                    service={service}
                    label={label}
                    isOpen={open} 
                    onClose={()=>setOpen(false)} 
                    loading={loading}
            />
            <div onClick={()=>setOpen(true)} className="service-item shadow-xl" key={id}>
                        
                        <Image src={image} alt='image' fill />
                        <div className='service-item-cover'>
                            <h3>{label}</h3>
                </div>
            </div>
            </div>
     );
}
 
export default ServiceGallery;