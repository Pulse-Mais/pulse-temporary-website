"use client"; // if you are planing to use it in the component which is not marker with use client directive this is a must

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation"; // usePathname is a hook now imported from navigation

export const Linking = ({
    children,
    ...rest
}: { children: React.ReactNode } & LinkProps) => {
    const { href } = rest;
    const pathName = usePathname();

    const isActive = pathName === href;
    return (
       
        <Link {...rest} className={`relative ${isActive ? 'font-bold hover:after:opacity-100 hover:after:w-full after:bg-yellow-custom after:opacity-100 after:w-full' : ' '} after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-300 after:opacity-0 after:w-0 after:h-[3px]`}>
            {children}
        </Link>
    );
};

 