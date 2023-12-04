import { Button } from "@/components/UI/Button"
import Image from "next/image"


type PastEventsProps = {
    title: string
    description: string
    srcImage: string
    altImage: string
}


export const PastEvents = ({title, description, srcImage, altImage}: PastEventsProps) => {

    return (
        <article className="w-full max-w-[24.75rem] flex flex-col gap-5">
            <picture>
                <Image src={srcImage} alt={altImage} quality={100} width={396} height={375}/>
            </picture>
            <h4 className="font-bold text-lg lg:text-xl">{title}</h4>
            <p className="text-lg">{description}</p>
            <Button title="Veja mais" color="green" NotFill Custom="max-w-[11rem]"/>
        </article>
    )
}