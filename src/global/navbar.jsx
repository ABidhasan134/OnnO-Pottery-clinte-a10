import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { AuthContext } from "../context/authprovider";
import './style.css'

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
    </>
  );

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
