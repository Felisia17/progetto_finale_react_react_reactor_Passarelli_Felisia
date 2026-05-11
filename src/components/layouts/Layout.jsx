import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../LayoutComponents/Navbar.jsx";
import Footer from "../LayoutComponents/Footer.jsx";
import Sidebar from "../LayoutComponents/Sidebar.jsx";


export default function Layout(){
    const genres = useLoaderData();
    return(
        <>
          <Navbar />
<div className="lg:hidden bg-base-300 px-2 py-2 overflow-x-auto">
  <div className="flex gap-2 whitespace-nowrap">
    {genres.map((genre) => (
      <a
        key={genre.id}
        href={`/genre/${genre.slug}`}
        className="btn btn-sm btn-ghost"
      >
        {genre.name}
      </a>
    ))}
  </div>
</div>

<section className="grid grid-cols-1 lg:grid-cols-7 gap-4">

  <div className="hidden lg:block">
    <Sidebar genres={genres}/>
  </div>

  <div className="lg:col-span-6">
    <Outlet/>
  </div>

</section>
            <Footer/>
        </>
    )
}
