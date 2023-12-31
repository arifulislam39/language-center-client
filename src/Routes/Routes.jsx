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
import Payment from "../Pages/Dashboard/Payment/Payment";
import Error from "../Pages/Error/Error";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import StudentRoute from "./StudentRoute";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
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
      errorElement:<Error></Error>,
      children:[
       {
        path:"adminHome",
        element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
       },
       {
        path:"instructorHome",
        element:<InstructorRoute><InstructorHome></InstructorHome></InstructorRoute>
       },
       {
        path:"studentHome",
        element:<StudentRoute><StudentHome></StudentHome></StudentRoute>
       },
       {
        path:"mySelectedClasses",
        element:<StudentRoute><MySelectedClasses></MySelectedClasses></StudentRoute>
       },
       {
        path:"payment/:id",
        element:<StudentRoute><Payment></Payment></StudentRoute>,
        loader:({params})=>fetch(`https://language-center-server-nu.vercel.app/cart/${params.id}`),
       },
       {
        path:"myEnrolledClasses",
        element:<StudentRoute><MyEnrolledClasses></MyEnrolledClasses></StudentRoute>
       },
       {
        path:"paymentHistory",
        element:<StudentRoute><PaymentHistory></PaymentHistory></StudentRoute>
       },
       {
        path:"addClass",
        element:<InstructorRoute><AddClass></AddClass></InstructorRoute>
       },
       {
        path:"myClasses",
        element:<InstructorRoute><MyClasses></MyClasses></InstructorRoute>
       },
       {
        path:"manageClasses",
        element:<AdminRoute><ManageClasses></ManageClasses></AdminRoute>
       },
       {
        path:"manageUsers",
        element:<AdminRoute><ManageUsers></ManageUsers></AdminRoute>
       }

      ]
    }
  ]);