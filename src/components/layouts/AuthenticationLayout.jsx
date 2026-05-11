import { Outlet } from "react-router-dom";
import Navbar from "../LayoutComponents/Navbar.jsx";
import Footer from "../LayoutComponents/Footer.jsx";

export default function AuthenticationLayout(){
    return(
        <>
            {/* <Navbar/> */}
            <Outlet/>
            
        </>
    )
}