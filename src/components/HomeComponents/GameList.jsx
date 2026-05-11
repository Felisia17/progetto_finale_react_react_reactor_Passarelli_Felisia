import GameCard from "./GameCard.jsx"


export default function GameList({children}){
    return(
        <>
            <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-2 sm:px-4 lg:px-5">{children}
            </main>
        </>
    )
}

GameList.Card = GameCard;
