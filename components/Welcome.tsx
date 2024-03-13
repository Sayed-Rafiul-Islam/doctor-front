"use client"
import doc from '@/images/doc.png'
import Image from 'next/image';
import './welcome.css'
import { CustomBtn }  from './ui/custom-btn';
import { useRouter } from 'next/navigation';

const Welcome = () => {

  const router = useRouter()
    return ( 
        <section className='relative lg:h-[900px] md:h-[800px] h-[600px] mx-10'>
            <div className='absolute lg:top-72 lg:right-0 md:-right-32 md:top-96 right-20 top-32 welcome-text'>
              <div className='w-2/3'>
                <h1 className='text-6xl '>
                  I&aposm doctor <br /><b className='text-primary'>John Doe</b>
                </h1>
                <p className='text-sm text-justify mt-6 mb-5'>I give all clients of my center a 30 percent discount on the vaccine against covid 19.</p>
                <div onClick={()=>router.push('/about')}>
                  <CustomBtn text='About Me' />
                </div>
              </div>
            </div>
            <div className='absolute lg:left-10 md:left-10 left-20'>
              <div className='lg:w-[1000px] lg:h-[900px] md:w-[700px] md:h-[800px] w-[600px] h-[600px] relative mx-auto'>
                <Image fill src={doc} alt='doc' />
              </div>
            </div>
        </section>
     );
}
 
export default Welcome;
