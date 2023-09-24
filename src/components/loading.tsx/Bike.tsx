import Image from "next/image"
import { Wheel } from "./Wheel"


export const Bike = () => {
    return (
        <figure className="relative m-auto flex">
            <div className="absolute top-10 w-full max-w-[150px] left-[-50px] flex flex-col gap-3">
                <div className="relative bg-yellow-custom h-3 w-full max-w-[70px] animate-moveRight duration-10000 infinite linear rounded-full" />
                <div className="relative bg-yellow-custom h-3 w-full max-w-[70px] animate-moveLeft duration-10000 infinite linear rounded-full" />
                <div className="relative bg-yellow-custom h-3 w-full max-w-[70px] animate-moveRight duration-10000 infinite linear rounded-full" />
            </div>
            <Image src={"/assents/images/magicbike.svg"} width={180} height={167} alt="Imagem da logo descontruída para a reconstrução" className="z-10" />
            <Wheel direction="right" />
            <Wheel direction="left" />
        </figure>
    )
}