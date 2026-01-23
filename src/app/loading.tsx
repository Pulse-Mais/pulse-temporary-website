export default function Loading() {
    return (
        <section className="h-[100dvh] w-full flex flex-col justify-center items-center bg-white gap-4">
            
            <div
                className="w-12 h-12 md:w-16 md:h-16 border-4 border-gray-200 border-t-[#003870] rounded-full animate-spin"
            ></div>

            <h2 className="text-[#003870] text-lg font-bold animate-pulse">
                Carregando...
            </h2>
        </section>
    )
}