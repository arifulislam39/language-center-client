
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
   

  const navItems = (
    <>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/instructors">Instructors</Link></li>
      <li><Link to="/classes">Classes</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><button>LogOut</button></li>
      
    </>
  );

  return (
   <div className={colorChange ? "bg-[#123821] sticky top-0 z-10": "bg-opacity-30 bg-black z-10 navbar fixed max-w-screen-xl"}>
     <div className="navbar rounded-2xl text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost font-bold text-2xl">LANGUAGE CENTER</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
   </div>
  );
};

export default NavBar;
