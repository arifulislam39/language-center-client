import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
     
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}

          <Outlet></Outlet>

          <label
            htmlFor="my-drawer-2"
            className="btn bg-[#123821] text-white drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-[#A79132] text-base-content">
            {/* Sidebar content here */}

            {/* student home  */}
           <li><NavLink to="/dashboard/mySelectedClasses">My Selected Classes</NavLink></li>

           <li><NavLink to="/dashboard/myEnrolledClasses">My Enrolled Classes</NavLink></li>

           <li><NavLink to="/dashboard/paymentHistory">Payment History</NavLink></li>

           {/* instructor home  */}
           <li><NavLink to="/dashboard/addClass">Add Class</NavLink></li>
           <li><NavLink to="/dashboard/myClasses">My Classes</NavLink></li>

           {/* Admin home  */}
           <li><NavLink to="/dashboard/manageClasses">Manage Classes</NavLink></li>
           <li><NavLink to="/dashboard/manageUsers">Manage Users</NavLink></li>


           <div className="divider"></div>
           <li><NavLink to="/">Home</NavLink> </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
