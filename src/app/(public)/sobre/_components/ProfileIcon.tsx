import { IconProps } from '@phosphor-icons/react'

interface ProfileIconProps extends IconProps {
    icon?: React.FC<IconProps>;
    color: "yellow" | "blue" | "green" | "white"
    children?: React.ReactNode
     
}

export const ProfileIcon = ({ icon: Icon, color, children }: ProfileIconProps) => {


    return (
        <>
            <div className='flex flex-col text-center gap-10 items-center'>
                <figure className={`bg-white-custom bg-whitecape bg-cover rounded-full w-52 h-52 flex items-center justify-center border border-${color}-600`}>
                    {Icon && <Icon className="text-white self-center" size={150} />}
                    {children}
                </figure>
                {/* <figure className={`bg-${color}-custom bg-${color}cape bg-cover ${color == "yellow" ? "bg-top" : "bg-bottom "} rounded-full w-52 h-52 flex items-center justify-center border border-black`}>
                    {Icon && <Icon className="text-white self-center" size={150} />}
                    {children}
                </figure> */}
            </div>
        </>
    )

}