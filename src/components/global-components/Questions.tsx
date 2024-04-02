import { Dialog } from "@/components/global-components/Dialog"
 

export const Questions = () => {

    return (
        <section className='flex flex-col py-20 max-w-[65rem] m-auto w-full gap-3'>
            <Dialog Question="Qual o valor para se inscrever?" Text="Nada! O programa é totalmente gratuito, com conteúdos de qualidade para você evoluir."/>
            
            <Dialog Question="Onde o programa é realizado?" Text="O programa é realizado 100% online, assim você pode estudar de qualquer lugar e a qualquer hora. Prático, não é mesmo?"/>
           
            <Dialog Question="Qual a duração?" Text="O curso dura em média 3 meses, mas você pode realizá-lo conforme tiver disponibilidade. O importante é evoluir e aprender!"/>
        </section>
    )
}