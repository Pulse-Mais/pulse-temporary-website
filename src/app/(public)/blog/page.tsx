import { Container } from "@/components/UI/Container"
import { Button } from "@/components/UI/Button"
import Carrousel from "@/components/about/Carrousel"

export default function Sobre() {

    return (
        <>
            <main className="flex items-center lg:bg-about bg-cover bg-center max-lg:bg-aboutsmall max-lg:bg-right">
                <section className="min-h-[70vh] py-20 m-auto w-full text-white flex flex-col justify-center px-5 sl:max-w-md min-[660px]:max-w-[575px] md:max-w-2xl min-[992px]:max-w-[940px] xg:max-w-[1050px] min-[1200px]:max-w-6xl min-[1380px]:max-w-7xl">
                    <h1 className="font-semibold text-[2.125rem] md:text-[2.75rem]">
                        Leve o DPFL aonde <br className="max-[425px]:hidden" />você for
                    </h1>
                    <p className="max-w-[630px] text-[1.25rem] py-10">
                        <span className="max-md:hidden">Ouça entrevistas impactantes com líderes e inovadores, gratuitamente e onde quiser. Transforme seu tempo livre em aprendizado e inspiração.</span>
                        <span className="md:hidden">Eleve seu dia com nosso podcast grátis! Ouça líderes e inovadores onde quiser e transforme tempo livre em aprendizado.</span>
                    </p>
                    <aside className="max-w-[630px]">
                        <Button color="green" title="Ouça agora" />
                    </aside>
                </section>
            </main>
            <section className="py-20 m-auto w-full sl:max-w-md min-[660px]:max-w-[575px] md:max-w-2xl min-[992px]:max-w-[940px] xg:max-w-[1050px] min-[1200px]:max-w-6xl min-[1380px]:max-w-7xl">
                <article>
                    <Carrousel CA1/>
                </article>
            </section>
        </>
    )
}