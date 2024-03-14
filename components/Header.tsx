"use client"

import Image from "next/image";
import Link from "next/link";
import logo from '@/public/logo.svg'
import './header.css'
import { usePathname } from "next/navigation";

const Header = () => {

    const pathname = usePathname()

    const menu = [
        {
            id : 1,
            label : "Home",
            path : '/'
        },
        {
            id : 2,
            label : "About",
            path : '/about'
        },
        {
            id : 3,
            label : "Contact",
            path : '/contact'
        },
        {
            id : 4,
            label : "Services",
            path : '/services'
        },
        {
            id : 5,
            label : "Appointment",
            path : '/appointment'
        }
    ]
    return ( 
        <div className="flex items-center justify-between py-2 px-36 shadow-sm">
            <Image src={logo} alt="logo"/>
            <ul className="hidden lg:flex gap-8">
                {
                    menu.map(({id,label,path}) => 
                    <Link prefetch 
                    className={`${path === pathname && 'border-b-2 border-primary text-primary font-semibold'} nav-item nav-item-btn`}
                    key={id} href={path}>{label}</Link>
                    )
                }
            </ul>
        </div>
     );
}
 
export default Header;