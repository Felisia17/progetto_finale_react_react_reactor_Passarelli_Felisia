import { useLoaderData, useParams } from "react-router-dom";
import GameList from "../components/HomeComponents/GameList.jsx";

export default function GenrePage(){
    const games = useLoaderData();
    const { slug } = useParams();

    return(
        <>
            <h1 className="text-xl sm:text-2xl lg:text-3xl text-center mt-6 sm:mt-10 px-2"> Filtered by genre: {slug}</h1>
            <GameList>
                {games.map((game)=>{
                    return <GameList.Card key={game.id} game={game} />;
                })}
            </GameList>
        </>
    )
}