import { NavLink, Outlet } from "react-router-dom";
import {AiFillHome, AiOutlineFileDone} from "react-icons/ai"
import {FaUsersCog, FaShoppingCart, FaFileAlt} from "react-icons/fa"
import {MdPayment,MdLibraryAdd} from "react-icons/md"
import {RiFileSettingsLine} from "react-icons/ri"
import { useContext } from "react";
import { AuthContext } from "../Pages/Providers/AuthProvider";
import {BiLogOut} from "react-icons/bi"


const Dashboard = () => {
  const { logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
     
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}

          <Outlet></Outlet>

          <label
            htmlFor="my-drawer-2"
            className="btn bg-[#123821] hover:bg-[#dabd3a] mt-10 text-white drawer-button lg:hidden"
          >
            Menu
          </label>
        </div>
        <div className="drawer-side bg-[#123821] text-white">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-60 h-full mt-5 font-bold ">
            {/* Sidebar content here */}
            <li><NavLink className="bg-red" to="/"><AiFillHome /> Home</NavLink> </li>

            {/* student home  */}

           <li ><NavLink to="/dashboard/mySelectedClasses"><FaShoppingCart /> My Selected Classes</NavLink></li>

           <li><NavLink to="/dashboard/myEnrolledClasses"><AiOutlineFileDone /> My Enrolled Classes</NavLink></li>

           <li><NavLink to="/dashboard/paymentHistory"><MdPayment /> Payment History</NavLink></li>

           {/* instructor home  */}
           <li><NavLink to="/dashboard/addClass"><MdLibraryAdd /> Add Class</NavLink></li>
           <li><NavLink to="/dashboard/myClasses"><FaFileAlt /> My Classes</NavLink></li>

           {/* Admin home  */}
           <li><NavLink to="/dashboard/manageClasses"><RiFileSettingsLine /> Manage Classes</NavLink></li>
           <li><NavLink to="/dashboard/manageUsers"><FaUsersCog /> Manage Users</NavLink></li>
           <li className="mt-60"><button onClick={handleLogout}><BiLogOut /> LogOut</button></li>

           <div className="divider"></div>
          
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
