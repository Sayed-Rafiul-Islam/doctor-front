import location from '@/images/location.png'
import clock from '@/images/clock.png'
import phone from '@/images/phone.png'
import Image from 'next/image';

import './info.css'

const Info = () => {
    return ( 
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 mt-16">
            <div className='flex contact-container px-12 py-20'>
                <div className='wrapper'>
                    <div className='wrapper-img'>
                        <Image fill src={location} alt='location' />
                    </div>
                </div>
                <div className='w-2/3 wrapper-text'>
                    <h3 className='text-2xl font-semibold'>Location</h3>
                    <p className='text-sm text-slate-400 mt-5'>United States America New York, NY 10002 543 Lane <br />Date Street</p>
                </div>
            </div>
            <div className='flex contact-container px-12 py-20'>
                <div className='wrapper'>
                    <div className='wrapper-img'>
                        <Image fill src={phone} alt='phone' />
                    </div>
                </div>
                <div className='w-2/3 wrapper-text'>
                    <h3 className='text-2xl font-semibold'>Contacts</h3>
                    <p className='text-sm text-slate-400 mt-5'>+7 10 34 7892 34 <br />+7 10 54 3491 44 <br />info@nordis.com</p>
                </div>
            </div>
            <div className='flex contact-container px-12 py-20'>
                <div className='wrapper'>
                    <div className='wrapper-img'>
                        <Image fill src={clock} alt='clock' />
                    </div>
                </div>
                <div className='w-2/3 wrapper-text'>
                    <h3 className='text-2xl font-semibold'>Work Time</h3>
                    <p className='text-sm text-slate-400 mt-5'>Mon - Fri: 9:00 AM - 6:00 <br />Saturday: 9:00 AM - 5:00 <br />Sunday: Closed</p>
                </div>
            </div>
        </div>
     );
}
 
export default Info;