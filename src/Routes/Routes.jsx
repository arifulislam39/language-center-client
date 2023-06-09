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
       }

      ]
    }
  ]);