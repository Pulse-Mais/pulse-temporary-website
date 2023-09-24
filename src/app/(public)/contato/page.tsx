import { Image, Button } from '@/components/home/utils/Utils'
import Link from 'next/link';
import { Questions } from '@/components/apoie/Questions';


export default function Contato() {
    return (
        <>
            <main className='pt-20 bg-[#FEFEFE] flex flex-col sl:items-center sl:max-w-md sl:m-auto min-[660px]:max-w-[575px] md:max-w-2xl min-[992px]:max-w-[940px] lg:flex-row lg:justify-between xg:max-w-[1050px] min-[1200px]:max-w-6xl min-[1380px]:max-w-7xl'>
                <aside className='px-4 flex flex-col sl:items-center max-w-3xl'>
                    <div className="flex flex-col">
                        <h1 className='font-extrabold text-3xl md:text-[2.75rem] lg:text-6xl'>Contato</h1>
                        <p className='text-lg py-6 max-w-[34.375rem] lg:text-2xl'>Dúvidas, sugestões ou elogios? Estamos à sua disposição, basta nos mandar uma mensagem</p>
                    </div>
                    <div className='lg:self-start py-1 sl:w-full lg:max-w-[280px]'>
                        <Link href={"#contato"} className='w-full'>
                            <Button title='Entrar em contato' color='blue' Custom='text-[24px]' />
                        </Link>
                    </div>
                </aside>
                <div className='m-auto max-w-[450px] max-sm:m-auto max-lg:py-10'>
                    <Image src="/assents/images/celular.svg" alt="DPFL Summit" width={672} height={449} quality={100} className='py-1 px-3' />
                </div>
            </main>

            <section id='contato' className='lg:py-24 py-8 bg-[#FEFEFE] flex flex-col-reverse sl:items-center sl:max-w-md sl:m-auto min-[660px]:max-w-[575px] md:max-w-2xl min-[992px]:max-w-[940px] lg:flex-row lg:justify-between xg:max-w-[1050px] min-[1200px]:max-w-6xl min-[1380px]:max-w-7xl'>
                <picture className='max-w-[450px] max-sm:m-auto max-lg:py-10'>
                    <Image src="/assents/images/metro.svg" alt="DPFL Summit" width={672} height={449} quality={100} className='py-1 px-3' />
                </picture>
                <aside className='px-4 flex flex-col sl:items-center w-full max-w-2xl'>
                    <h2 className='text-3xl font-semibold py-8'>Nos mande uma mensagem</h2>
                    <form className='flex flex-col gap-5 w-full' action="https://formsubmit.co/contato@daperiferiaparafarialima.org" method="POST">
                        <div className='flex flex-col'>
                            <label htmlFor='nome'>Nome completo</label>
                            <input type='text' placeholder='Digite seu nome completo' name='nome' id='nome' className='border-[1px] border-[#D1D5DB] px-3 py-4 w-full rounded-lg ' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='email'>E-mail</label>
                            <input type='text' placeholder='Por exemplo: email@email.com' name='e-mail' id='email' className='border-[1px] border-[#D1D5DB] px-3 py-4 w-full rounded-lg' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='about'>Assunto da mensagem</label>
                            <input type='text' placeholder='Sobre o que se trata a mesagem' name='about' id='about' className='border-[1px] border-[#D1D5DB] px-3 py-4 w-full rounded-lg' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='text'>Mensagem</label>
                            <textarea title='teste' id='mensagem' className='border-[1px] border-[#D1D5DB] px-3 py-4 w-full overflow-y rounded-lg' />
                        </div>
                        <input type="hidden" name="_captcha" value="false"></input>
                        <Button title='Enviar mensagem' color='blue' />
                    </form>
                </aside>
            </section>

            <section className='max-lg:px-3 flex flex-col sl:max-w-md sl:m-auto min-[660px]:max-w-[575px] md:max-w-2xl min-[992px]:max-w-[940px] xg:max-w-[1050px] min-[1200px]:max-w-6xl min-[1380px]:max-w-7xl'>
                <Questions />
            </section>


        </>

    )
}