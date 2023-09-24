import { ProfileIcon } from "@/components/home/ProfileIcon"
import { Question } from "@phosphor-icons/react"
import { UserCircle } from "@/components/UI/icons/icons"
import { Icon, IconProps } from '@phosphor-icons/react'

export interface RootCardProps {
    children: React.ReactNode,
    HasFill?: string,
    HasCape?: "green" | "yellow" | "blue" | boolean,
    Default?: boolean
    icon?: React.FC<IconProps>;

}

export const CardRoot = ({ children, HasFill, HasCape = false, Default, icon: Icon}: RootCardProps) => {


    return (
        <div className={`${HasFill ? "shadow-xl rounded-3xl" : ""} ${HasFill}`}>
            {HasCape && <div className={`flex justify-end px-3 py-3 z-10 w-full h-36 rounded-t-3xl ${HasCape == "green" ? " bg-greencape bg-no-repeat bg-cover bg-green-custom" : HasCape == "yellow" ? " bg-yellowcape bg-no-repeat bg-right bg-yellow-custom" : HasCape == "blue" ? "bg-bluecape bg-cover bg-[#008BE8]" : ""}`}>
                {/* <Question size={32} weight="fill" className="text-white" /> */}
            </div>}
            {Default &&
                <figure className={`relative flex items-center justify-center mt-[-6.25rem] ${HasCape == "green" ? "text-[#27946F]" : HasCape == "yellow" ? "text-[#FBBF11]" : HasCape == "blue" ? "text-[#009EE6]" : ""}`}>
                    <UserCircle size={200} weight="fill" className="absolute z-20 " />
                    <div className={`relative w-[9.40rem] h-[9.40rem] rounded-full bg-white z-10 flex transition-all delay-150 shadow-moldure`}></div>
                </figure>
            }

            {Icon &&
                <figure className={`relative flex items-center justify-center mt-[-6.25rem] text-white`}>
                    <Icon size={110} weight="fill" className="absolute z-20" />
                    <div className={`relative w-[9.40rem] h-[9.40rem] rounded-full z-10 flex transition-all delay-150 ${HasCape == "green" ? "bg-green-custom" : HasCape == "yellow" ? "bg-[#FBBF11]" : HasCape == "blue" ? "bg-blue-custom" : ""}`}></div>
                </figure>
            }



            {children}

        </div>
    )
}

