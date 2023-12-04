
type EventProps = {
    time: string
    event: string
    hasIndeed?: string
}
export const Event = ({ time, event, hasIndeed }: EventProps) => {


    return (
        <>
            <li className="px-3 flex items-center gap-3 w-full self-start justify-start font-bold text-xl lg:text-2xl text-black-custom">
                <time className="text-xl lg:text-2xl">{time}</time><dl className="text-lg lg:text-xl">{event}</dl><dl className="text-lg lg:text-xl">{hasIndeed}</dl>
            </li>
            <hr className="w-full bg-gray-600 px-5" />
        </>

    )
}