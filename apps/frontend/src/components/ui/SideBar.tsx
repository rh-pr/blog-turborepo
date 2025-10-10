"use client"

import { PropsWithChildren, ReactNode, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useOnClickOutside } from "usehooks-ts";

type Props = PropsWithChildren<{
    trigerIcon: ReactNode;
    trigerClassName?: string;
}>;

const SideBar = (props: Props) => {
    const [show, setShow] = useState<boolean>(false);

    const ref = useRef<HTMLDivElement>(null);

    useOnClickOutside(ref as React.RefObject<HTMLElement>, () => setShow(false))
    
    return (
        <>
            <button className={props.trigerClassName} onClick={() => setShow(prev => !prev)}>
                {props.trigerIcon}
            </button>

            <div 
                ref={ref}
                className={cn(
                    "w-60 absolute top-0 duraction-300 transitioon-all bg-white rounded min-h-screen",
                    {
                        "left-full": !show,
                        "left-0": show,
                    }
                )}
            >
                {props.children}
            </div>
        </>
    );
}

export default SideBar;