"use client"
import { MenuIcon } from "lucide-react";
import { Button } from "./button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";


import { useParams, usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import Link from "next/link"



const NavbarToggle = ({
    className,
    ...props
} : React.HtmlHTMLAttributes<HTMLElement>) => {

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
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <MenuIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="ml-4" align="end">
            <nav 
                    className={cn("flex flex-col", className)}
                >
                    {
                        menu.map(({id,label,path})=>(
                            <DropdownMenuItem key={id}  asChild >
                            <Link 
                                href={path}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary ",
                                    pathname === path && "border-l-4 border-primary text-primary font-semibold" 
                                )}
                            >
                                {label}
                            </Link>
                            </DropdownMenuItem>
                        ))
                    }
            </nav>
            </DropdownMenuContent>
        </DropdownMenu>
     );
}
 
export default NavbarToggle;
