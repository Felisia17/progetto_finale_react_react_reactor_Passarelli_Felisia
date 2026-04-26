export default function GameCard({game}){
    return(
        <>
            <div className="h-[200px] relative">
                <img src={`${game.background_image}`} className="w-full h-full brightness-80" alt=""/>
                <p className="absolute-bottom-px w-full -translate-y-8 text-center text-white">{game.name}</p>
            </div>
        </>
    )
}

