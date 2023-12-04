import { Event } from "./Event"

export const Timeline = () => {





    return (
        <ul className="flex flex-col gap-5 w-full max-w-3xl items-center m-auto">
            <Event event="Abertura" time="00:00" />
            <Event event="Jantar" time="00:00" hasIndeed="(Parte 1)"/>
            <Event event="Painel com convidado renomado" time="00:00" />
            <Event event="Jantar" time="00:00" hasIndeed="(Parte 2)"/>
            <Event event="Atingindo o sonho de impactar 1000 jovens" time="00:00" />
            <Event event="Jantar" time="00:00" hasIndeed="(Parte 3)"/>
            <Event event="Encerramento" time="00:00" />
        </ul>
    )
}