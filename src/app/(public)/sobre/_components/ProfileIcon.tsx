import { IconProps } from '@phosphor-icons/react'

interface ProfileIconProps extends IconProps {
    icon?: React.FC<IconProps>;
    color: "yellow" | "blue" | "green" | "white"
    children?: React.ReactNode
     
}

export const ProfileIcon = ({ icon: Icon, color, children }: ProfileIconProps) => {

    let colorClass;

    switch (color) {
    case 'yellow':
        colorClass = '#ffd31b';
        break;
    case 'blue':
        colorClass = '#14a9ff';
        break;
    case 'green':
        colorClass = '#25b957';
        break;
    default:
        colorClass = '#ffd31b'; // Default color if none of the above match
    }
    return (
        <>
            <div className='flex flex-col text-center gap-10 items-center'>
                {/* <figure className={`bg-white-custom bg-whitecape bg-cover rounded-full w-52 h-52 flex items-center justify-center border-4 ${colorClass}`}> */}
                <figure className={`bg-white-custom bg-whitecape bg-cover rounded-full w-52 h-52 flex items-center justify-center border-4`} style={{ borderColor: colorClass }}>
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