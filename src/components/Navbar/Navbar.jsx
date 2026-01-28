import React from "react";
import Logos from "../Logos/Logos";
import { NavLink } from "react-router";


const Navbar = () => {

    const nav =(
        <>

            <li className="text-primary-content"><NavLink herf={"/"}>Home</NavLink></li>
            <li className="text-primary-content"><NavLink herf={"/"}>Shop</NavLink></li>
            <li className="text-primary-content"><NavLink herf={"/"}>Collections</NavLink></li>
            <li className="text-primary-content"><NavLink herf={"/"}>Ingredients</NavLink></li>
            <li className="text-primary-content"><NavLink herf={"/"}>About</NavLink></li>
            <li className="text-primary-content"><NavLink herf={"/"}>Blog</NavLink></li>
            <li className="text-primary-content"><NavLink herf={"/"}>Contact</NavLink></li>
        </>
    )
  return (
    <div className="">
      <div className="navbar bg-base-100 shadow-sm">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {nav}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl"><Logos></Logos></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {nav}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
