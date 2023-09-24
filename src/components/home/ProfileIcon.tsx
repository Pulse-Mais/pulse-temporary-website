import { GraduationCap } from '@/components/UI/icons/icons'
import { Icon, IconProps } from '@phosphor-icons/react'

interface ProfileIconProps extends IconProps {
    icon?: React.FC<IconProps>;
    color: "yellow" | "blue" | "green"
    children?: React.ReactNode
     
}

export const ProfileIcon = ({ icon: Icon, color, children }: ProfileIconProps) => {


    return (
        <>
            <div className='flex flex-col text-center gap-10 items-center'>
                <figure className={`bg-${color}-custom bg-${color}cape bg-cover ${color == "yellow" ? "bg-top" : "bg-bottom "} rounded-full w-52 h-52 flex items-center justify-center`}>
                    {Icon && <Icon className="text-white self-center" size={150} />}
                    {children}
                </figure>
            </div>
        </>
    )

}