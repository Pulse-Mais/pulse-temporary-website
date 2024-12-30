import Image from "next/image"

interface LogoProps {
    Variant?: "default" | "white"
}

export const Logo = ({ Variant = "default" }: LogoProps) => {
    return (
        <figure className="flex gap-2 items-center">
        <Image src={Variant == "white" ? '/assents/logos/Logo_Horizontal_PulseMais_white.svg' : '/assents/logos/Logo_Horizontal_PulseMais.svg'} alt="Logo da Pulse Mais" width={135} height={95} quality={100} className="max-md:px-2 max-md:py-2" />
        </figure>
    )
}