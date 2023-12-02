import Image from "next/image"

interface LogoProps {
    Variant?: "default" | "white"
}

export const Logo = ({ Variant = "default" }: LogoProps) => {

    return (
        <figure className="flex gap-2 text-2xl items-center">
            <p className="max-lg:hidden font-semibold text-4xl">DPFL</p>
            <Image src={Variant == "default" ? '/assents/logos/DPFL.svg' : '/assents/logos/DPFLWhite.svg'} alt="Logo da DPFL" width={52} height={34} quality={100} className="max-md:px-2 max-md:py-2" />
        </figure>
    )
}