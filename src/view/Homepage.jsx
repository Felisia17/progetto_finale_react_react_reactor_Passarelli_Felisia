// import { useLoaderData } from "react-router-dom"
// import GameList from "../components/HomeComponents/GameList.jsx";

// export default function Homepage(){

//     const games = useLoaderData();

//     return(
//         <>
//             <h1 className="font-electro text-3xl text-center font-bold"> Homepage </h1> 
//             <GameList>
//                 {games.map((game)=>{
//                     return(
//                         <GameList.Card key={game.id} game={game}/>
//                     )
//                 })}
//             </GameList>


//         </>
//     )
// }

import { useLoaderData } from "react-router-dom"
import GameList from "../components/HomeComponents/GameList.jsx";

export default function Homepage() {
  const games = useLoaderData();

  return (
    <main className="min-h-screen px-4 py-10">

      <header className="text-center mb-10">
        <h1 className="font-electro text-4xl font-bold text-blue-300">
          Homepage
        </h1>

        <p className="text-slate-400 mt-2 text-sm">
          Scopri tutti i giochi
        </p>
      </header>

      <section className="max-w-[1400px] mx-auto">
        <GameList>
          {games.map((game) => (
            <GameList.Card key={game.id} game={game} />
          ))}
        </GameList>
      </section>

    </main>
  );
}