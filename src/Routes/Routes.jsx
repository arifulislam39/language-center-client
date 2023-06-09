import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login-registration/Login/Login";
import Registration from "../Pages/Login-registration/Registration/Registration";
import Classes from "../Pages/Classes/Classes";
import Instructors from "../Pages/Instructors/Instructors";
import Dashboard from "../Layout/Dashboard";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import InstructorHome from "../Pages/Dashboard/InstructorHome/InstructorHome";
import StudentHome from "../Pages/Dashboard/StudentHome/StudentHome";
import MySelectedClasses from "../Pages/Dashboard/MySelectedClasses/MySelectedClasses";
import MyEnrolledClasses from "../Pages/Dashboard/MyEnrolledClasses/MyEnrolledClasses";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element:<Home></Home>,
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/registration",
            element:<Registration></Registration>
        },
        {
          path:"/classes",
          element:<Classes></Classes>
        },
        {
          path:"/instructors",
          element:<Instructors></Instructors>
        }
      ]
      
    },
    {
      path:"dashboard",
      element:<Dashboard></Dashboard>,
      children:[
       {
        path:"adminHome",
        element:<AdminHome></AdminHome>
       },
       {
        path:"instructorHome",
        element:<InstructorHome></InstructorHome>
       },
       {
        path:"studentHome",
        element:<StudentHome></StudentHome>
       },
       {
        path:"mySelectedClasses",
        element:<MySelectedClasses></MySelectedClasses>
       },
       {
        path:"myEnrolledClasses",
        element:<MyEnrolledClasses></MyEnrolledClasses>
       },
       {
        path:"paymentHistory",
        element:<PaymentHistory></PaymentHistory>
       },
       {
        path:"addClass",
        element:<AddClass></AddClass>
       },
       {
        path:"myClasses",
        element:<MyClasses></MyClasses>
       },
       {
        path:"manageClasses",
        element:<ManageClasses></ManageClasses>
       },
       {
        path:"manageUsers",
        element:<ManageUsers></ManageUsers>
       }

      ]
    }
  ]);