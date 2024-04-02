import Image from "next/image"

 

export const Partness = ( ) => {

    const C3 = [
        {
            image: "/assents/logos/google.svg",
            alt: "logo da Google",
        },
        {
            image: "/assents/logos/cerc.svg",
            alt: "Logo da cerc",
        },
        {
            image: "/assents/logos/crossfox.svg",
            alt: "logo da CrossFox",
        },
        {
            image: "/assents/logos/googlecloud.svg",
            alt: "Logo da Google Cloud",
        },
        {
            image: "/assents/logos/foxbit.svg",
            alt: "logo da FoxBit",
        },
        {
            image: "/assents/logos/vor.svg",
            alt: "logo da Vor",
        },
        {
            image: "/assents/logos/livesports.svg",
            alt: "logo do Live Sports",
        },
        {
            image: "/assents/logos/italo.svg",
            alt: "logo da Itálo Brasileiro",
        },
        // {
        //     image: "/assents/logos/tria.svg",
        //     alt: "logo da Tria",
        // },
        // {
        //     image: "/assents/logos/lit.svg",
        //     alt: "logo da lit",
        // },
        // {
        //     image: "/assents/logos/sala37.svg",
        //     alt: "logo da Sala 37",
        // },
        // {
        //     image: "/assents/logos/mvp.svg",
        //     alt: "logo da Mvp Builders",
        // },
    ]

    return (
        <> 
        {
            C3.map((logo, id) => {
                return (
                    <>
                        <figure key={id} className='flex items-center justify-center py-10'>
                            <div className='max-w-[15.625rem] h-full flex items-center justify-center'>
                                <Image src={logo.image} alt={logo.alt} width={200} height={90} />
                            </div>
                        </figure>
                    </>
                )
            })
        }
        </>
    )

}