
import { BookOpenText, Student, UsersFour, ChalkboardTeacher} from '@/components/UI/icons/icons'
import { IconProps } from "@phosphor-icons/react";

interface InfoProps {
icon?: React.FC<IconProps>;
text: string
size?: string
textSize?: string
color?: string
}

export const Info = ({icon: Icon, text, size = "42", textSize, color = "text-white"}: InfoProps) => {
    return (
        <div>
            <div className="flex gap-3 items-center " >
                <figure>
                    {Icon && <Icon className={`${color} self-center"`} size={size} weight="fill" />}
                </figure>
                <p className={`${color} font-bold text-base md:text-lg ${textSize}`}>{text}</p>
            </div>
        </div>


    )
}
 