import Link from "next/link"
import { ArrowRight } from "@phosphor-icons/react"
import { Button } from "../UI/Button"
import { useState, useEffect } from "react"

interface DonateProps {
    value: string
    color?: "green" | "yellow" | "blue"
    href: string
}

export const Donate = ({ value, color, href }: DonateProps) => {
    const renderButton = () => {
        switch (color) {
            case "blue":
                return <Button color="blue" title="Quero doar" />
            case "green":
                return <Button color="green" title="Quero doar" />
            case "yellow":
                return <Button color="yellow" title="Quero doar" />
            default:
                return <Button title="Quero doar" />
        }
    }

    return (
        <Link href={href} target="_blank">
            <div className={`shadow-xl bg-white w-[260px] max-h-[250px] md:gap-5 text-center flex items-center justify-center md:py-16 md:px-3 md:rounded-3xl max-md:flex md:flex-col max-md:px-11 max-md:gap-2 max-md:py-3 max-md:rounded-xl ${color == "green" ? "text-[#27C86F]  " : color == "yellow" ? "text-[#FFD31B]" : color == "blue" ? "text-[#009EE6]" : "text-[#004DBC] "}`}>
                <p className='text-xl md:text-3xl'><span className="md:hidden">Doar</span><span className="max-md:hidden">Apoie doando</span></p>
                <p className='text-xl md:text-6xl font-bold'>R$ {value}</p>
                <div className="flex justify-center m-auto max-md:hidden">
                    {renderButton()}
                </div>
                <ArrowRight size={25} weight="bold" className="md:hidden" />
            </div>
        </Link >
    )
}