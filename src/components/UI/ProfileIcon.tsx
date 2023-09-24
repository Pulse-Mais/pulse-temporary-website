import Image from "next/image"
interface ProfileIconProps {
    Scale: "small" | "regular" | "medium" | "big"
    src: string
    alt: string
}

export const ProfileIcon = ({ Scale, src, alt }: ProfileIconProps) => {
    return (
        <div className={` 
        ${Scale == "small" ? "max-w-[6.875rem] w-[6.875rem] max-h-[6.875rem] h-[6.875rem]" :
                Scale == "regular" ? "w-[10.32rem] h-[10.32rem]" :
                    Scale == "medium" ? "max-w-[13.44rem] min-w-[13.44rem] max-h-[13.44rem] min-h-[13.44rem]" :
                        "w-[15.625rem] h-[15.625rem]"}
         rounded-full bg-black`}>
            <Image src={src} width={110} height={110} quality={100} alt={alt} style={{borderRadius: 100}}/>
        </div>
    )
}