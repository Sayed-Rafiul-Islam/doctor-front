"use client"
import { MenuIcon } from "lucide-react";
import { Button } from "./button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerTrigger,
  } from "@/components/ui/drawer"


import { usePathname, useRouter } from "next/navigation"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { useState } from "react";



const NavbarToggle = ({
    className,
    ...props
} : React.HtmlHTMLAttributes<HTMLElement>) => {

    const pathname = usePathname()
    const router = useRouter()
    const [open,setOpen] = useState(false)
   
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
        <Drawer direction="left">
            <DrawerTrigger asChild>
                <Button variant="outline" size="icon">
                    <MenuIcon />    
                </Button>
            </DrawerTrigger>
            <DrawerContent >
                <nav 
                className={cn("flex flex-col mt-5", className)}
                    >
                        {
                            menu.map(({id,label,path})=>(
                                <Link 
                                onClick={()=>router.refresh()}
                                key={id}
                                    href={path}
                                    className={cn(
                                        "text-sm font-medium transition-colors hover:text-primary w-full pl-4 my-1 text-slate-500",
                                        pathname === path && "border-l-4 border-primary text-primary font-semibold" 
                                    )}
                                >
                                    <DrawerClose>
                                    {label}
                                    </DrawerClose>
                                </Link>
                            ))
                        }
                </nav>
            </DrawerContent>
            </Drawer>
     );
}
 
export default NavbarToggle;
