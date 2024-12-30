import { IconProps } from '@phosphor-icons/react'

interface ProfileIconProps extends IconProps {
    icon?: React.FC<IconProps>;
    color: "yellow" | "blue" | "green" | "white"
    children?: React.ReactNode
}

export const ProfileIcon = ({ icon: Icon, color, children }: ProfileIconProps) => {

    let colorClass;
    let bgColorClass;

    switch (color) {
    case 'yellow':
        colorClass = '#ffd31b';
        bgColorClass = 'bg-[#ffd31b] bg-yellowcape bg-cover bg-bottom';
        break;
    case 'blue':
        colorClass = '#14a9ff';
        bgColorClass = 'bg-[#009EE6] bg-smallwaveblue bg-cover bg-bottom';
        break;
    case 'green':
        colorClass = '#25b957';
        bgColorClass = 'bg-[#25b957] bg-bigwavegreen bg-cover bg-bottom';
        break;
    default:
        colorClass = '#ffd31b'; // Default color if none of the above match
        bgColorClass = 'bg-[#ffd31b] bg-cover bg-mediumwaveyellow';
    }

    return (
        <div className='flex flex-col text-center gap-10 items-center'>
            <figure className={`bg-white-custom rounded-full w-52 h-52 flex items-center justify-center border-4 ${bgColorClass}`} style={{ borderColor: colorClass }}>
                {Icon && <Icon className="text-white self-center" size={150} />}
                {children}
            </figure>
        </div>
    )
}