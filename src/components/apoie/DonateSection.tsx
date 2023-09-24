'use client'

import { Donate } from "../home/Donate"
import { CopyText } from "../home/CopyText"


export const DonateSection = () => {
    return (
        <section id='apoie' className="bg-[#27C86F] bg-bigwavegreen bg-cover bg-right w-full scroll-mt-20">
            <aside className='text-white py-16 flex flex-col justify-center items-center px-3 sl:max-w-md sl:m-auto min-[660px]:max-w-[575px] md:max-w-2xl min-[992px]:max-w-[940px] xg:max-w-[1050px] min-[1200px]:max-w-6xl min-[1380px]:max-w-7xl'>
                <h2 className="text-center font-semibold text-3xl md:text-[2.75rem]">
                    Você também pode mudar o futuro dos jovens!
                </h2>
                <h2 className="text-center font-semibold text-3xl pt-20">
                    Doação Pontual
                </h2>
                <p className="text-lg max-w-4xl py-6 text-center">
                    Dentro do seu aplicativo bancário, escaneie o QRCODE abaixo para realizar sua doação, qualquer valor é bem-vindo. Venha conosco e ajude a construir um futuro promissor para jovens de periferia!
                </p>

                <CopyText />
                <h2 className="font-semibold text-3xl m-auto text-white text-center">Doação Mensal</h2>
                <p className="pb-10 py-5 text-lg text-center max-w-4xl">
                    Você também pode doar mensalmente através de uma assinatura via PIX, cartão de crédito ou boleto, clicando nos valores abaixo:
                </p>
                <div className='flex flex-col justify-evenly w-full px-3 sl:flex-row'>
                    <div className='px-3 py-3 flex items-center max-xl:flex-col gap-8'>
                        <Donate value='50' color='yellow' href='https://app.cobrefacil.com.br/link-de-pagamento/1EO6R07N8556N45X82WL' />
                        <Donate value='100' color='green' href='https://app.cobrefacil.com.br/link-de-pagamento/8PVXZG3JPRRGNW16REOD' />
                    </div>
                    <div className='flex px-3 py-3 items-center max-xl:flex-col gap-8'>
                        <Donate value='300' color='blue' href='https://app.cobrefacil.com.br/link-de-pagamento/0PXYQ45N6QQKN2DELO8K' />
                        <Donate value='500' href='https://app.cobrefacil.com.br/link-de-pagamento/PQRME31J3GG5NV20Z564' />
                    </div>
                </div>
            </aside>
        </section>
    )
}