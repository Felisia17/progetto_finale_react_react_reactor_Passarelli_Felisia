import { useState } from "react";
import { Link } from "react-router-dom";
import  routes  from "../../router/routes.js";
import { FaSearch } from "react-icons/fa";

export default function Navbar(){
  const [slug, setSlug] = useState("");

  const handleChange = (e)=>{
    setSlug(e.target.value);
  }
    return(
      
        <>
       <div className="w-full bg-base-300 shadow-md">
  <div className="navbar max-w-[1400px] mx-auto px-4">
    
    <div className="flex-1">
      <Link className="btn btn-ghost text-xl font-bold font-electro tracking-tight" to={routes.home}>Reactor </Link>
    </div>

    <div className="flex gap-4 items-center">
      <div className="form-control">
        <input 
          type="text" 
          placeholder="Search..." 
          className="input input-bordered bg-base-100 w-24 md:w-64 focus:w-80 transition-all duration-300"
          onChange={handleChange} 
        />
        <Link className="btn btn-square" to={`/search/${slug}`}>
          <FaSearch />
        </Link>
      </div>

      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border border-base-100">
          <div className="w-10 rounded-full">
            <img
              alt="User Avatar"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[10] mt-3 w-52 p-2 shadow-2xl border border-white/5">
          <li>
            <a className="justify-between py-3">
              Profile
              <span className="badge badge-primary">New</span>
            </a>
          </li>
          <li><a className="py-3">Settings</a></li>
          <li>
            <Link className="py-3" to={routes.register}>Register</Link>
          </li>
          <li>
            <Link className="py-3" to={routes.login}>Login</Link>
          </li>
          <hr className="my-1 border-white/10" />
          <li><a className="py-3 text-error">Logout</a></li>
        </ul>
      </div>
    </div>

  </div>
</div>
        </>
    )
}