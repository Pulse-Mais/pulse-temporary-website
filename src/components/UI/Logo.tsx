import Image from "next/image"

interface LogoProps {
    Variant?: "default" | "white"
}

export const Logo = ({ Variant = "default" }: LogoProps) => {

    return (
        <figure className="flex gap-2 items-center">
        <Image src={Variant == "default" ? '/assents/brand/pulse_sop.svg' : '/assents/brand/pulse_sop.svg'} alt="Logo da DPFL" width={42} height={24} quality={100} className="max-md:px-2 max-md:py-2" />
            <p className={`max-lg:hidden font-semibold text-4xl  ${Variant == "default" ? "text-black-custom" : "text-white"}`}>Pulse +</p>
        </figure>
    )
}