import React from 'react';
import { Icon, IconProps } from '@phosphor-icons/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    color?: "green" | "yellow" | "blue" | "white"
    NotFill?: boolean;
    Custom?: string
    icon?: React.FC<IconProps>
}

export const Button = ({ title, color, NotFill = false, Custom = "text-xl", icon: Icon, ...rest }: ButtonProps) => {

    const commonClass = "transition-all md:px-7 px-3 py-1 rounded-3xl w-full text-lg";
    let finalClass;

    switch (color) {
        case "green":
            finalClass = `${commonClass} ${NotFill ? "border-[1px] border-green-custom border-solid text-green-custom hover:bg-green-custom hover:text-white" : "bg-green-custom text-white hover:bg-[#27A06F]"}`;
            break;
        case "yellow":
            finalClass = `${commonClass} ${NotFill ? "border-[1px] border-yellow-custom border-solid text-yellow-custom hover:bg-yellow-custom hover:text-white" : "bg-yellow-custom text-white hover:bg-[#F8B800]"}`;
            break;
        case "blue":
            finalClass = `${commonClass} ${NotFill ? "border-[1px] border-blue-custom border-solid text-blue-custom hover:bg-blue-custom hover:text-white" : "bg-blue-custom text-white hover:bg-[#0071BD]"}`;
            break;
            case "white":
            finalClass = `${commonClass} ${NotFill ? "border-[1px] border-white border-solid text-white hover:bg-blue-custom hover:text-white" : "bg-white text-blue-custom"}`;
            break;
        default:
            finalClass = `${commonClass} bg-[#004DBC] text-white hover:bg-[#003581]`
    }

    return (
        <button className={`${Custom} ${finalClass} ${Icon && "flex gap-1 items-center justify-center" }` } {...rest} >
            {title} {Icon && <Icon size={24}/> }
        </button>
    );
};
