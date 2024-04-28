import { NavLink, Outlet } from "react-router-dom";
import "./appwrapper.css";
import { CgNotes } from "react-icons/cg";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoHomeOutline, IoWalletOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { LiaSignOutAltSolid } from "react-icons/lia";
import AppLogo from "../logo/AppLogo";


const Appwrapper = () => {
  return (
    <>
      <div className="app__container">
        <div className="sidebarWrapper">
          <div className="logoWrapper">
           <AppLogo/>
          </div>
          <div className="sidebar">
            <ul>
              <li>
             
                <NavLink to={"/app"} ><IoHomeOutline />Home</NavLink>
              </li>
              <li>
                
                <NavLink to={"/app/order"}><CgNotes />Orders</NavLink>
              </li>
              <li>
                
                <NavLink to={"/app/pitch"}><HiOutlineSpeakerphone />Sales</NavLink>
              </li>
              <li>
                
                <NavLink to={"/app/wallet"}><IoWalletOutline />Wallet</NavLink>
              </li>
              <li>
                
                <NavLink to={"/app/profile"}><FaRegUser />Profile</NavLink>
                <div><IoIosArrowDown /></div>
              </li>
              <li>
                
                <NavLink to={"/app/signout"}><LiaSignOutAltSolid fill="#B3261E"/>Sign Out</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="app__content">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Appwrapper
