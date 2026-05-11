import { Link } from "react-router";

export default function GameCard({ game }) {

  return (
    <Link to={`/detail/${game.id}`}>

      <div className="relative h-[220px] rounded-xl overflow-hidden shadow-lg group cursor-pointer">

        <img
          src={game.background_image}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          alt=""
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"></div>

        <div className="absolute bottom-0 w-full p-3">
          <p className="text-white font-bold text-sm sm:text-base tracking-wide">
            {game.name}
          </p>
        </div>

      </div>

    </Link>
  );
}