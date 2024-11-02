import { NavLink } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
        const links = <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/listedBooks">Listed Books</NavLink></li>
            </>

  return (

    <div className="navbar bg-base-100 my-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-info lg:hidden">
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
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
           {links}
          </ul>
        </div>
        <a className="btn btn-ghost md:text-2xl text-xl font-bold">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex justify-between items-center gap-8 px-1 font-medium active-btn">
         {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-lime-500 text-white font-bold md:px-5">Sign In</a>
        <a className="btn bg-blue-300 text-white font-bold md:px-5 ml-3">Sign Up</a>
      </div>
    </div>
  );
};

export default NavBar;
