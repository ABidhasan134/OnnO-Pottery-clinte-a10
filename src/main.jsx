import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthProvider from './context/authprovider.jsx';
import Register from './register/register.jsx';
import Home from './Home/home.jsx';
import Successful from './register/successful.jsx';
import LogIn from './log/LogIn.jsx';
import LogOut from './log/logOut.jsx';
import Error from './error/error.jsx';
import PriveteRoute from './privetroute/priveteRoute.jsx';
import CardDetails from './Home/components/cardDitails.jsx';
import AddCraft from './addcraft/addCraft.jsx';
import ArtAndCraft from './artAndCraft/artAndCraft.jsx';
import CraftDetails from './artAndCraft/components/craftDetails.jsx';
import MyList from './myList/myList.jsx';
import UpdateInfo from './update/updateInfo.jsx';

const router=createBrowserRouter([
{
  path: "/",
    element: <App></App>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,        
      },
      {
        path:"/successregester",
        element:<Successful></Successful>
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/logout",
        element: <LogOut></LogOut>,
      },
      {
        path: "/artcraft",
        element: <ArtAndCraft></ArtAndCraft>,
        loader: ()=>fetch("http://localhost:5000/newCraft")
      },
      {
        path: "/craftdetails/:id",
        loader: ({params})=>params.id,
        element: <PriveteRoute><CraftDetails></CraftDetails></PriveteRoute>,
      },
      {
        path: "/details/:id", // Corrected path and added leading slash
        loader: ({params}) =>params.id ,
        element:<PriveteRoute><CardDetails></CardDetails></PriveteRoute>
      },
      {
        path: "/addcraft",
        element: <PriveteRoute><AddCraft></AddCraft></PriveteRoute>
      },
      {
        path: "/mycraft",
        element: <PriveteRoute><MyList></MyList> </PriveteRoute>,
        loader: ()=>fetch("http://localhost:5000/newCraft")
      },
      {
        path: "/updateInfo/:id",
        element: <PriveteRoute><UpdateInfo></UpdateInfo></PriveteRoute>,
        loader: ({params})=>params.id
      }
    ]
}
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);