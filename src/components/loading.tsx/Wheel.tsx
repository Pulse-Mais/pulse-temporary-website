interface WheelProps {
    direction: "left" | "right"

}

export const Wheel = ({ direction }: WheelProps) => {
    return (
        <>
            {direction == "left" ?
                (<figure className="wheelOne z-0 absolute left-[-14px] bottom-[-14px] w-12 h-12 rounded-full bg-[#0071BD] border-gray-700 border-dashed border-[2.5px] py-2">
                    <div className="m-auto flex justify-between px-1 py-3">
                        {/* <div className=" bg-black w-2 h-2 rounded-full" />
                        <div className=" bg-black w-2 h-2 rounded-full" /> */}
                    </div>
                </figure>)
                :
                (<figure className="wheelOne z-0 absolute right-[-14px] bottom-[-14px] w-12 h-12 rounded-full bg-green-custom border-gray-700 border-dashed border-[2.5px] py-2">
                    <div className="m-auto flex justify-between px-1 py-3">
                        {/* <div className=" bg-black w-2 h-2 rounded-full" />
                        <div className=" bg-black w-2 h-2 rounded-full" /> */}
                    </div>
                </figure>)
            }


        </>
    )
}