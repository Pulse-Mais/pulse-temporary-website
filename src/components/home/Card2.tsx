import { UserCircle } from "@/components/UI/icons/icons"
import { Button } from "../UI/Button"
import Link from "next/link"

interface Card2Props {
    Theme?: "green" | "yellow" | "blue"
    Title: string
    Text: string
}

export const Card2 = ({ Theme, Title, Text }: Card2Props) => {

    function RenderButton() {
        switch (Theme) {

            case "green":
                return (<Link href="https://daperiferiaparafarialima.org/?pagina=mentor" className="px-3" target="_blank">
                    <Button title="Quero ser Mentor(a)" color="green" Custom="text-base" />
                </Link>);
            case "yellow":
                return (<Link href="https://daperiferiaparafarialima.org/?pagina=mentee" className="px-3" target="_blank">
                    <Button title="Quero ser aluno(a)" color="yellow" Custom="text-base" />
                </Link>);
            case "blue":
                return (<Link href="https://daperiferiaparafarialima.org/?pagina=parceiro" className="px-3" target="_blank">
                    <Button title="Quero ser parceiro" color="blue" Custom="text-base" />
                </Link>);
            default:
                return (<Link href="/apoie" className="px-3">
                    <Button title="Quero ser Doador(a)" Custom="text-base" />
                </Link>
                );
                break
        }
    }


    return (
        <>  
                                                                                                 
            <section className={`lg:hidden bg-white shadow-lg rounded-xl relative flex flex-col before:absolute before:h-10 before:top-0 before:left-0 before:w-full ${Theme == "yellow" ? "before:bg-yellow-custom before:bg-yellowcape" : Theme == "green" ? "before:bg-green-custom before:bg-greencape" : Theme == "blue" ? "before:bg-blue-custom before:bg-bluecape" : "before:bg-strongblue-custom before:bg-strongbluecape"} before:bg-cover before:rounded-t-xl py-5 px-3 w-[95%] max-md:max-w-xl md:w-full`}>
                <aside className="px-3 flex items-center gap-2 pt-8">
                    <figure className={`md:hidden ${Theme == "yellow" ? "text-yellow-custom" : Theme == "green" ? "text-green-custom" : Theme == "blue" ? "text-blue-custom" : "text-strongblue-custom"}  relative flex items-center justify-center`}>
                        <UserCircle size={60} weight="fill" className="absolute z-20 " />
                        <div className={`relative w-[2.90rem] h-[2.90rem] rounded-full bg-white z-10 flex shadow-moldure`}></div>
                    </figure>
                    <figure className={`max-md:hidden ${Theme == "yellow" ? "text-yellow-custom" : Theme == "green" ? "text-green-custom" : Theme == "blue" ? "text-blue-custom" : "text-strongblue-custom"} relative flex items-center justify-center`}>
                        <UserCircle size={90} weight="fill" className="absolute z-20 " />
                        <div className={`relative w-[4rem] h-[4rem] rounded-full bg-white z-10 flex shadow-moldure`}></div>
                    </figure>
                    <h3 className={`${Theme == "yellow" ? "text-yellow-custom" : Theme == "green" ? "text-green-custom" : Theme == "blue" ? "text-blue-custom" : "text-strongblue-custom"} font-semibold text-lg`}>{Title}</h3>
                </aside>
                <p className="text-black-custom m-auto px-3 py-5 sl:py-10 text-base md:text-lg">
                    {Text}
                </p>
                {RenderButton()}
            </section>
            <section className={`max-lg:hidden bg-white shadow-lg rounded-xl relative flex flex-col before:absolute before:h-32 before:top-0 before:left-0 before:w-full ${Theme == "yellow" ? "before:bg-yellow-custom before:bg-yellowcape" : Theme == "green" ? "before:bg-green-custom before:bg-greencape" : Theme == "blue" ? "before:bg-blue-custom before:bg-bluecape" : "before:bg-strongblue-custom before:bg-strongbluecape"} before:bg-cover before:rounded-t-xl py-5 px-3 w-[95%] max-w-lg`}>
                <aside className="pt-10 flex flex-col items-center gap-2">
                    <figure className={`${Theme == "yellow" ? "text-yellow-custom" : Theme == "green" ? "text-green-custom" : Theme == "blue" ? "text-blue-custom" : "text-strongblue-custom"} relative flex items-center justify-center`}>
                        <UserCircle size={150} weight="fill" className="absolute z-20 " />
                        <div className={`relative w-[7rem] h-[7rem] rounded-full bg-white z-10 flex shadow-moldure`}></div>
                    </figure>
                    <h2 className={`${Theme == "yellow" ? "text-yellow-custom" : Theme == "green" ? "text-green-custom" : Theme == "blue" ? "text-blue-custom" : "text-strongblue-custom"} font-semibold text-lg lg:text-2xl`}>{Title}</h2>
                </aside>
                <p className="text-black-custom m-auto px-3 py-5 sl:py-10 text-base md:text-lg lg:text-center">
                    {Text} 
                </p>
                {RenderButton()}
            </section>
        </>
    )
}