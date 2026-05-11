import { Link } from "react-router-dom";

export default function Sidebar({ genres = []}){
    return(
        <>  

        
            <nav className="h-screen bg-nav-gray">

             <h2 className="px-5 pt-6 pb-3 text-lg font-electro font-bold tracking-widest text-blue-300 uppercase">
                    Generi
                </h2>
                <ul className="px-5">
                    {genres.map((genre)=>{
                        return(
                            <li className="mb-2" key={genre.id}>
                                <Link to={`/genre/${genre.slug}`}>{genre.name}</Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}