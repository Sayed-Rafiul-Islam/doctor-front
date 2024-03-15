"use client"

import Image from "next/image";
import Link from "next/link";
import logo from '@/public/logo.svg'
import './header.css'
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import NavbarToggle from "./ui/navbar-toogle";

const Header = () => {

    const pathname = usePathname()
    const [ navbar, setNavbar] = useState(false)

    useEffect(() => window.addEventListener('scroll', changeBackground), []);
    const changeBackground = () => {
        if (window.scrollY > 100) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }

    }


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
        <div>
            <div className="navbar-small z-50">
            <NavbarToggle />
            </div>
            <div className={`${navbar ? "bg-white shadow-lg rounded-b-2xl" : "bg-transparent"} fixed w-full z-50 navbar-large transition-all duration-500`}>
                <div className='w-11/12 mx-auto'>
                    <div className="flex items-center justify-between shadow-sm relative">
                        <div className="relative logo">
                            <Image fill src={logo} alt="logo"/>
                        </div>
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
                </div>
        </div>
        </div>
        
     );
}
 
export default Header;