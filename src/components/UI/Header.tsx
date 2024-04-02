'use client'
import { useSelectedLayoutSegments } from "next/navigation"
import { Button } from "./Button"
import { Logo } from "./Logo"
import { List, X, SignIn, ChalkboardTeacher, GraduationCap, Handshake } from '@/components/UI/icons/icons'
import { useState, useEffect } from "react"
import Link from 'next/link';



export const Header = () => {


    const segment = useSelectedLayoutSegments();
    const isTransparent = segment[1] === 'blog' || segment[1] === 'apoie' || segment[1] === 'eventos'
    const [display, setDisplay] = useState(false)
    const [color, setColor] = useState(false);

    const routes = [
        { name: "Início", href: "/", current: `${segment}` == "" ? true : false },
        { name: "Apoie", href: "/apoie", current: `${segment[1]}` === "apoie" ? true : false },
        { name: "Contato", href: "/contato", current: `${segment[1]}` === "contato" ? true : false },
        { name: "Eventos", href: "/eventos", current: `${segment[1]}` === "eventos" ? true : false},
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
                    `fixed text-[#1B2E3A] w-full shadow-sm z-30 top-0 px-3 md:py-1 lg:py-3 flex items-center bg-white`
                }>
                {isTransparent ? (<Logo Variant={color ? `default` : `white`} />) : (<Logo Variant="default" />)}

                <nav className="m-auto flex items-center xg:max-w-[1050px] min-[1200px]:max-w-6xl min-[1380px]:max-w-7xl">
                    <ul className="max-md:hidden flex gap-5 lg:gap-8 items-center text-[1.20rem] justify-center">
                        {routes.map((route, index) => {
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
                    <Link href={"https://daperiferiaparafarialima.org/?pagina=login"} target="_blank">
                        {isTransparent ? renderButton() : (<Button title="Entrar" color="blue" NotFill />)}
                    </Link>
                    <Link href={"/#cards"} >
                        {isTransparent ? renderButton2() : (<Button title="Registrar" color="blue" />)}
                    </Link>
                </aside>
                <figure>
                    <div className="md:hidden">
                        <List size={32} onClick={() => setDisplay(!display)} className="lg:hidden" />
                    </div>
                    <div className="max-md:hidden">
                        <List size={52} onClick={() => setDisplay(!display)} className="lg:hidden" />
                    </div>
                </figure>
            </header>
            <section className="text-[#1B2E3A] lg:hidden">
                <aside className={`flex flex-col w-full max-w-[220px] sl:max-w-[280px] fixed h-screen top-0 z-50 transition-all ease-in duration-300 bg-white ${display ? "right-0" : "right-[-100%]"}`}>
                    <nav className="px-2 pt-5">
                        <figure className="flex justify-between">
                            <Logo />
                            <X size={38} onClick={() => setDisplay(!display)} className={`mr-0 ${display ? "" : "hidden"}`} />
                        </figure>
                        <ul className={`py-5 px-3 flex flex-col gap-2 text-lg font-semibold ${display ? "" : "hidden"} items-start`}>
                            {routes.map((route, index) => {
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
                    <h4 className={`text-lg px-5 pb-3 font-semibold text-blue-custom ${display ? "" : "hidden"}`}>Registre-se como:</h4>
                    <Link className={`px-4 py-1 ${display ? "" : "hidden"} flex items-center gap-1 text-black-custom font-semibold`} href={"https://daperiferiaparafarialima.org/?pagina=mentee"} target="_blank" >
                        <GraduationCap size={32} weight="fill" /><span> Aluno</span>
                    </Link>
                    <Link className={`px-4 py-1 ${display ? "" : "hidden"} flex items-center gap-1 text-black-custom font-semibold`} href={"https://daperiferiaparafarialima.org/?pagina=mentee"} target="_blank">
                        <ChalkboardTeacher size={32} weight="fill" /><span> Mentor</span>
                    </Link>
                    <Link className={`px-4 py-1 ${display ? "" : "hidden"} flex items-center gap-1 text-black-custom font-semibold`} href={"https://daperiferiaparafarialima.org/?pagina=mentee"} target="_blank">
                        <Handshake size={32} weight="fill" /><span> Parceiro</span>
                    </Link>
                    <Link href={"https://daperiferiaparafarialima.org/?pagina=login"} target="_blank" className={`px-5 py-3 ${display ? "" : "hidden"}`}>
                        <Button color="blue" title="Entrar" icon={SignIn} />
                    </Link>
                </aside>
            </section>
            <div className={`lg:hidden w-full h-screen fixed bg-black opacity-70 z-30 transition-all ease-in duration-300 ${display ? "" : "hidden"}`} onClick={() => setDisplay(!display)}></div>
        </>
    )
}
