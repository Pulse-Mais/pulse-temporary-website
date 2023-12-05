import { Bike } from "@/components/UI/loading.tsx/Bike";
import { Button } from "@/components/UI/Button";
import Link from "next/link";

export default function NotFound() {

    return (
        <>
            <section className="h-[100dvh] w-full flex justify-center items-center">
                <aside className="m-auto flex flex-col justify-center items-center px-3">
                    <h2 className="text-black-custom text-2xl font-bold pt-24 pb-10 text-center">Página não encontrada!</h2>
                    <Bike />
                    <Link href={"/"} className="py-10 px-3">
                        <Button title="Voltar ao ínicio" />
                    </Link>
                </aside>
            </section>
        </>
    )
}