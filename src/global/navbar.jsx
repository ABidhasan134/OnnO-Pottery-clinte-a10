import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { AuthContext } from "../context/authprovider";
import './style.css'
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa6";

const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
    const links = (
    <>
      <li >
      <NavLink to="/">Home</NavLink>
      </li >
      <li >
        <NavLink to="/artcraft"> Art & craft</NavLink>
      </li>
      <li>
        <NavLink to="/addcraft">Add Craft</NavLink>
      </li>
      <li >
        <NavLink to="/mycraft">My List</NavLink>
      </li>
      <li >
      <NavLink to="/crafter">Crafter</NavLink>
      </li >
      <li >
      <NavLink to="/blogs">Blogs</NavLink>
      </li >
    </>
  );
  
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const loginRegister = (
    <>
      <li>
        <NavLink to="/login">Log In</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );

  const handleCurrentUserLogOut = () => {
    logOut();
  };

  return (
    <div className="navbar border-b-2 border-sky-400  rounded-b-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul  id="sidebar"
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <span className="md:text-3xl sm:text-xl font-bold">OnnO Pottery</span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      {/* extra route */}

      {/* theam part */}
      <div className="flex-none">
        {/* Toggle button here */}
        <button className="btn btn-square btn-ghost">
          <label className="swap swap-rotate w-12 h-12">
            <input
              type="checkbox"
              onChange={handleToggle}
              // show toggle image based on localstorage theme
              checked={theme === "light" ? false : true}
            />
            {/* light theme sun image */}
            <MdOutlineWbSunny  className="w-8 h-8 swap-on" />
            {/* dark theme moon image */}
            <FaRegMoon className="w-8 h-8 swap-off" />
          </label>
        </button>
      </div>
      {/* daynamic part */}
      {user ? (
        <ul className="menu menu-horizontal px-1 navbar-end">
          <div
            className="avatar tooltip tooltip-bottom"
            data-tip={user?.displayName || "username"}
          >
            <div className=" w-12 rounded-full">
              <img src={user.photoURL} alt="User Profile" />
            </div>
          </div>
          <li>
            <NavLink to="/logout" onClick={handleCurrentUserLogOut}>
              Log out
            </NavLink>
          </li>
          {/* <p>{user.displayName}</p> */}
        </ul>
      ) : (
        <ul className="menu menu-horizontal px-1 navbar-end">
          {loginRegister}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
