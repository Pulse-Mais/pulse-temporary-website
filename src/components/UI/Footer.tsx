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
            {/* ========== VERSÃO MOBILE (v1) - Visível apenas em mobile ========== */}
            <footer className="md:hidden bg-white w-full text-[#486284]">
                <section className="flex flex-col justify-between px-[30px] pt-[116px] pb-10">
                    {/* Quadrante 1 — Logos */}
                    <div className="flex flex-col items-start">
                        <figure className="w-[180px] h-[50px] mb-6">
                            <Logo Variant="default" />
                        </figure>
                        <div className="flex gap-[15px]">
                            <Link href={"https://www.instagram.com/pulsemaisong/"} target="_blank" className="w-[50px] h-[50px] flex items-center justify-center">
                                <InstagramLogo size={50} color="#486284" weight="fill" />
                            </Link>
                            <Link href={"https://www.linkedin.com/company/pulsemaisong/"} target="_blank" className="w-[50px] h-[50px] flex items-center justify-center">
                                <LinkedinLogo size={50} color="#486284" weight="fill" />
                            </Link>
                            <Link href={"https://www.youtube.com/channel/UC1PcHxk0zG-9EiPaboq_NpQ"} target="_blank" className="w-[50px] h-[50px] flex items-center justify-center">
                                <FaYoutube size={50} color="#486284" />
                            </Link>
                        </div>
                    </div>

                    {/* Quadrante 2 — Contatos */}
                    <div className="flex flex-col items-start mt-10">
                        <p className="text-[40px] font-bold text-[#486284] mt-[33px]">+55 11 98821-3886</p>
                        <p className="text-[30px] font-normal text-[#486284] mt-[5px]">Envie um email</p>
                        <Link href="/contato" className="text-[30px] font-bold text-[#486284] underline mt-[5px]">
                            contato@pulsemais.org.br
                        </Link>
                        <p className="text-[30px] font-normal text-[#486284] mt-[23px] w-full text-center">
                            CNPJ: 00.000.000/0001-00
                        </p>
                    </div>
                </section>
            </footer>

            {/* ========== VERSÃO DESKTOP - Visível apenas em desktop ========== */}
            <footer className="hidden md:block bg-[#009EE6] w-full text-white">
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
