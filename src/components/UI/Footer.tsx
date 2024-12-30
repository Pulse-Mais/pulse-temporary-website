"use client";

import { Logo } from "./Logo"
import { InstagramLogo, LinkedinLogo } from '../UI/icons/icons'
import Link from "next/link"
import { FaYoutube } from 'react-icons/fa'
import { useEffect, useState } from 'react';

export const Footer = () => {

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // or a loading spinner
    }

    return (
        <>
            <footer className="bg-[#009EE6] w-full text-white">
                <section className="flex justify-between px-5 py-5 m-auto xg:max-w-[1050px] min-[1200px]:max-w-6xl min-[1380px]:max-w-7xl">
                    <figure>
                        <Logo Variant="white" />
                    </figure>
                    <nav className="text-xl">
                        <ul>
                            <li>
                                <span className="font-bold py-2">Redes Sociais</span>
                                <Link href={"https://www.instagram.com/pulsemaisong/"} target="_blank" className="py-2 flex gap-1 items-center"><span><InstagramLogo size={32} color="white" weight="fill" /></span>@pulsemaisong</Link>
                                <Link href={"https://www.linkedin.com/company/pulsemaisong/"} target="_blank" className="py-2 flex gap-1 items-center"><span><LinkedinLogo size={32} color="white" weight="fill" /></span>pulsemaisong</Link>
                                <Link href={"https://www.youtube.com/channel/UC1PcHxk0zG-9EiPaboq_NpQ"} target="_blank" className="py-2 flex gap-1 items-center"><span><FaYoutube size={32} color="white" /></span>pulsemaisong</Link>
                            </li>
                        </ul>
                    </nav>
                </section>
                <div className="text-center py-3 bg-[#004DBC]">
                    <span className="text-white text-xl">Pulse Mais - Da Periferia para a Faria Lima</span>
                </div>
            </footer>
        </>
    )
}