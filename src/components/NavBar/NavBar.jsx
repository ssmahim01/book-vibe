import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import { useContext } from "react";
import { AuthContext } from "../../providers/Provider";
import { toast } from "react-toastify";

const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  console.log(user?.email, user?.photoURL);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("Sign Out Successfully");
        toast.success("Successfully Sign out", {
          position: "top-center",
        });
      })
      .catch((error) => {
        console.log("ERROR Message", error.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/listedBooks">Listed Books</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 my-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-info text-white lg:hidden"
          >
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
        {user && (
          <a className="btn btn-ghost md:text-2xl text-lg font-bold">
            Book Vibe
          </a>
        )}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex justify-between items-center gap-8 px-1 font-medium active-btn">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {!user ? (
          <>
            <Link
              to="/signIn"
              className="btn bg-lime-500 text-white font-bold md:px-5"
            >
              Sign In
            </Link>
            <Link
              to="/signUp"
              className="btn bg-blue-300 text-white font-bold md:px-5 ml-3"
            >
              Sign Up
            </Link>
          </>
        ) : (
          <>
            <div className="flex gap-4 justify-center items-center">
              <div className="flex gap-3 items-center">
                <div className="flex flex-col">
                  <p className="text-sm font-semibold hidden md:block lg:text-left md:text-center">
                    {user?.displayName}
                  </p>
                  <p className="text-sm font-semibold hidden md:block">
                    {user?.email}
                  </p>
                </div>
                <img
                  className="w-12 rounded-full"
                  src={user?.photoURL}
                  alt={user?.displayName}
                />
              </div>

              <button
                onClick={handleSignOut}
                className="btn btn-error text-white font-bold lg:ml-0 md:ml-12"
              >
                Sign Out
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;