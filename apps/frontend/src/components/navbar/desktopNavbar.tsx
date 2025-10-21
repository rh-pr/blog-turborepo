"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { PropsWithChildren, useEffect, useState } from "react"

type Props = PropsWithChildren;

const DesktopNavbar = (props: Props) => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        setScrollPosition(window.scrollY);    
    }

    const pathName = usePathname();

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const isScrolled = scrollPosition > 10;
    const isHome = pathName == '/'

    return (
        <nav className={cn("hidden md:block fixed transition-color w-full z-50 text-white top-0", {
            "bg-white text-gray-700 shadow-md transition-all": isScrolled || !isHome,
        })} >
            <div className="flex items-center px-4 py-4 container">
                {props.children}
            </div>
            <hr className="border-1 border-gray-100 opacity-25" />
        </nav>
    );
}

export default DesktopNavbar;