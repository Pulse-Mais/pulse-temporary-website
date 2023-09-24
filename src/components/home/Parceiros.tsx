type ParceirosProps = {
    id: number
}

export const Parceiros = ({ id }: ParceirosProps) => {

    const C3 = [
        {
             image: "/assents/logos/crossfox.svg",
            alt: "logo da Crossfox",
        },
        {
            image: "/assents/logos/recode.svg",
            alt: "Logo da Recode",
        },
        {
            image: "/assents/logos/voitto.svg",
            alt: "Logo da Voitto",
        },
        {
            image: "/assents/logos/horizon.svg",
            alt: "logo da Horizon",
        },
        {
            image: "/assents/logos/soulcode.svg",
            alt: "logo da SoulCode",
        },
        {
            image: "/assents/logos/toro.svg",
            alt: "logo da Rafael Toro",
        },
        {
            image: "/assents/logos/livesports.svg",
            alt: "logo do Live Sports",
        }
       
    ]

    return (
        <figure className='flex justify-center py-10'>
            <div className='max-w-[15.625rem]'>
                <img src={C3[id].image} alt={C3[id].alt} className='w-full' />
            </div>
        </figure>
    )
}