import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthProvider from './context/authprovider.jsx';
import Register from './register/register.jsx';
import Home from './Home/home.jsx';
import Successful from './register/successful.jsx';

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