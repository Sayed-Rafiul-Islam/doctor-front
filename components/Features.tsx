import calendar from '@/images/calender.png'
import masked from '@/images/masked guy.png'
import lab from '@/images/lab.png'
import Image from 'next/image';

const Features = () => {
    return ( 
        <div className="bg-white mx-auto lg:w-11/12 md:w-11/12 w-full rounded-lg shadow-lg grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-10">
            <div className='flex p-10 gap-3'>
                <div className='relative w-[50px] h-[50px]'>
                    <Image className='w-1/6' fill src={calendar} alt='calendar' />
                </div>
                <div className='w-5/6'>
                    <h3 className='text-xl font-bold text-primary mb-2'>Online Booking</h3>
                    <p className='text-slate-400 text-sm'>
                We offer a wide range of paid medical services and consultations, as well as high quality service. Order a specialist or services.
                </p>
                </div>
            </div>
            <div className='flex p-10 gap-3'>
                <div className='relative w-[50px] h-[50px]'>
                <Image className='w-1/6' fill src={masked} alt='calendar' />
                </div>
                <div className='w-5/6'>
                    <h3 className='text-xl font-bold text-primary mb-2'>Сovid 19 Protection</h3>
                    <p className='text-slate-400 text-sm'>
                    During the COVID-19 pandemic, we do our best to ensure your safety when visiting Nordis medical center.
                </p>
                </div>
            </div>
            <div className='flex p-10 gap-3'>
                <div className='relative w-[50px] h-[50px]'>
                <Image className='w-1/6' fill src={lab} alt='calendar' />
                </div>
                <div className='w-5/6'>
                    <h3 className='text-xl font-bold text-primary mb-2'>Own Laboratory</h3>
                    <p className='text-slate-400 text-sm'>
                    We invite everyone who takes care of their health to undergo a comprehensive examination of the body at affordable prices.
                </p>
                </div>
            </div>

        </div>
     );
}
 
export default Features;