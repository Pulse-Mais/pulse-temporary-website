'use client'
import { useSelectedLayoutSegments } from "next/navigation"
import { Button } from "./Button"
import { Logo } from "./Logo"
import { List, X } from '@/components/UI/icons/icons'
import { useState, useEffect } from "react"
import Link from 'next/link';



export const Header = () => {


    const segment = useSelectedLayoutSegments();
    const isTransparent = segment[1] === 'blog' || segment[1] === 'apoie' || segment[1] === 'eventos'
    const [display, setDisplay] = useState(false)
    const [color, setColor] = useState(false);

    // Rotas desktop (versão original)
    const routesDesktop = [
        { name: "Início", href: "/", current: `${segment}` == "" ? true : false },
        { name: "Apoie", href: "/apoie", current: `${segment[1]}` === "apoie" ? true : false },
        { name: "Contato", href: "/contato", current: `${segment[1]}` === "contato" ? true : false },
        { name: "Eventos", href: "/eventos", current: `${segment[1]}` === "eventos" ? true : false},
    ]

    // Rotas mobile (versão v1)
    const routesMobile = [
        { name: "Início", href: "/", current: `${segment}` == "" ? true : false },
        { name: "Sobre", href: "/sobre", current: `${segment[1]}` === "sobre" ? true : false },
        { name: "Apoie", href: "/apoie", current: `${segment[1]}` === "apoie" ? true : false },
        { name: "Transparência", href: "/transparencia", current: `${segment[1]}` === "transparencia" ? true : false },
        { name: "Contato", href: "/contato", current: `${segment[1]}` === "contato" ? true : false },
    ]

    const changeColor = () => {
        if (window.scrollY >= 64) {
            setColor(true);
        } else {
            setColor(false);
        }
    };


    const renderButton = () => {
        switch (color) {
            case true:
                return <Button title="Entrar" color="blue" NotFill />;
                break;
            case false:
                return <Button title="Entrar" color="white" NotFill />;
                break;
        }
    }

    const renderButton2 = () => {
        switch (color) {
            case true:
                return <Button title="Registrar" color="blue" />;
                break;
            case false:
                return <Button title="Registrar" color="white" />
                break;
        }
    }

    useEffect(() => {
        changeColor();
        window.addEventListener("scroll", changeColor);
    });

    return (
        <>
            <header className=
                {isTransparent ?
                    `fixed ${color ? "bg-white text-[#1B2E3A] shadow-md" : "bg-transparent text-white"} w-full fixed z-30 top-0 px-3 md:py-1 lg:py-3 flex items-center`
                    :
                    `fixed text-[#1B2E3A] w-full shadow-sm z-30 top-0 h-[100px] md:h-auto pl-[30px] pt-[42px] md:pl-3 md:pt-0 md:py-1 lg:py-3 flex items-center bg-white`
                }>
                <div className="ml-[30px] mt-[42px] md:ml-0 md:mt-0">
                    {isTransparent ? (<Logo Variant={color ? `default` : `white`} />) : (<Logo Variant="default" />)}
                </div>

                <nav className="m-auto flex items-center xg:max-w-[1050px] min-[1200px]:max-w-6xl min-[1380px]:max-w-7xl">
                    <ul className="max-md:hidden flex gap-5 lg:gap-8 items-center text-[1.20rem] justify-center">
                        {routesDesktop.map((route, index) => {
                            return (
                                <li key={index} className={`relative ${route.current ? 'font-bold hover:after:opacity-100 hover:after:w-full after:bg-yellow-custom after:opacity-100 after:w-full' : ' '} after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-300 after:opacity-0 after:w-0 after:h-[3px]`}>
                                    <Link href={route.href}>
                                        {route.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <aside className="flex gap-3 px-2 max-lg:hidden">
                    {/* <Link href={"https://app.pulsemais.org.br/?pagina=login"} target="_blank">
                        {isTransparent ? renderButton() : (<Button title="Entrar" color="blue" NotFill />)}
                    </Link>
                    <Link href={"/#cards"} >
                        {isTransparent ? renderButton2() : (<Button title="Registrar" color="blue" />)}
                    </Link> */}
                </aside>
                <figure className="mr-[30px] md:mr-3">
                    <div className="md:hidden">
                        <List size={32} onClick={() => setDisplay(!display)} className="lg:hidden" style={{ color: '#EEF2F6' }} />
                    </div>
                    <div className="max-md:hidden">
                        <List size={52} onClick={() => setDisplay(!display)} className="lg:hidden" />
                    </div>
                </figure>
            </header>
            <section className="text-[#1B2E3A] lg:hidden">
                <aside className={`flex flex-col w-full max-w-[220px] sl:max-w-[280px] fixed h-screen top-0 z-50 transition-all ease-in duration-300 bg-white ${display ? "right-0" : "right-[-100%]"}`}>
                    <nav className="px-2 pt-5 flex flex-col h-full">
                        <figure className="flex justify-between items-center pt-4">
                            <div className="flex-1 flex justify-center">
                                <Logo />
                            </div>
                            <X size={38} onClick={() => setDisplay(!display)} className={`mr-0 ${display ? "" : "hidden"}`} style={{ color: '#EEF2F6' }} />
                        </figure>
                        <ul className={`py-5 px-3 flex flex-col gap-2 text-lg font-semibold ${display ? "" : "hidden"} items-start`}>
                            {routesMobile.map((route, index) => {
                                return (
                                    <li key={index} className={`relative ${route.current ? 'font-bold hover:after:opacity-100 hover:after:w-full after:bg-yellow-custom after:opacity-100 after:w-full' : ' '} after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-300 after:opacity-0 after:w-0 after:h-[3px]`}>
                                        <Link href={route.href} onClick={() => setDisplay(false)}>
                                            {route.name}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </aside>
            </section>
            <div className={`lg:hidden w-full h-screen fixed bg-black opacity-70 z-30 transition-all ease-in duration-300 ${display ? "" : "hidden"}`} onClick={() => setDisplay(!display)}></div>
        </>
    )
}
