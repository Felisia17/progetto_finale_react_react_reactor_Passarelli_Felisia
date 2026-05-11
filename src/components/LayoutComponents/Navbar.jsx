import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import  routes  from "../../router/routes.js";
import { FaSearch } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function Navbar(){
  const [slug, setSlug] = useState("");

  const handleChange = (e)=>{
    setSlug(e.target.value);
  };

  const navigate = useNavigate();

  const { user, signOut } = useContext(UserContext);

  const handleLogout = async ()=>{
    await navigate('/');
    signOut();
  }
    return (
  <div className="w-full bg-base-300 shadow-md relative z-50">
    <div className="navbar max-w-[1400px] mx-auto px-4 overflow-visible">

      <div className="flex-1">
        <Link
          className="btn btn-ghost text-xl font-bold font-electro tracking-tight"
          to={routes.home}
        >
          Reactor
        </Link>
      </div>

      <div className="flex gap-4 items-center">

        <div className="form-control flex flex-row items-center gap-2 min-w-0">

  <input type="text" placeholder="Search..." className="input input-bordered bg-base-100 w-24 md:w-64 max-w-full focus:w-full md:focus:w-80 transition-all duration-300"
    onChange={handleChange} />

           <Link className="btn btn-square flex-shrink-0" to={`/search/${slug}`}>
        <FaSearch />
            </Link>

         </div>

        <div className="dropdown dropdown-end">

          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar border border-base-100"
          >
            <div className="w-10 rounded-full">
              {user ? (
                <img
                  alt="User Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              ) : (
                <FaArrowRightToBracket className="text-3xl" />
              )}
            </div>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-200 rounded-box mt-3 w-52 p-2 shadow-2xl border border-white/5"
            style={{ zIndex: 99999, position: "absolute" }}
          >
            {!user ? (
              <>
                <li>
                  <Link className="py-3" to={routes.register}>
                    Register
                  </Link>
                </li>
                <li>
                  <Link className="py-3" to={routes.login}>
                    Login
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to={routes.profile}>Profile</Link>
                </li>
                <li onClick={handleLogout}>
                  <p className="py-3 text-error">Logout</p>
                </li>
              </>
            )}
          </ul>

        </div>
      </div>

    </div>
  </div>
);
}