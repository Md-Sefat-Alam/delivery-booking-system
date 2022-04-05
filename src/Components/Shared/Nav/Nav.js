import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Nav = () => {
  const { logOut, user } = useAuth();
  return (
    <div
      style={{ minHeight: "60px" }}
      className="flex wrapper justify-between items-center"
    >
      <div className="text-gray-500 text-xl font-bold select-none cursor-pointer">
        B<span className="text-orange-500 text-3xl">ook No</span>w
      </div>
      <nav>
        <ul className="flex">
          <NavLink activeClassName="font-bold text-white" to="/home">
            <li className="px-3 text-gray-100">Home</li>
          </NavLink>
          <NavLink activeClassName="font-bold text-white" to="/myorders">
            <li className="px-3 text-gray-100">My Orders</li>
          </NavLink>
          <NavLink activeClassName="font-bold text-white" to="/booknow">
            <li className="px-3 text-gray-100">Book Now</li>
          </NavLink>
          {user.accessToken && (
            <NavLink activeClassName="font-bold text-white" to="/dashboard">
              <li className="px-3 text-orange-400 border rounded border-orange-400">
                Dashboard
              </li>
            </NavLink>
          )}
        </ul>
      </nav>
      <div className="">
        {user.accessToken ? (
          <div className="flex flex-row-reverse">
            <div
              title={user.displayName ? user.displayName : user.email}
              className="w-10 h-10 bg-green-100 border-2 border-green-500 rounded-full m-1 overflow-hidden flex justify-center items-center select-none cursor-pointer"
            >
              {user.photoURL ? (
                //   user.photoURL
                <img className="" src={user.photoURL} alt={user.email[0]} />
              ) : user.displayName ? (
                <p className="text-2xl font-bold">{user.displayName[0]}</p>
              ) : (
                <p className="text-2xl font-bold uppercase">{user.email[0]}</p>
              )}
            </div>
            <button
              onClick={logOut}
              className="border rounded m-2 px-2 text-gray-500 hover:text-white"
            >
              Log Out
            </button>
          </div>
        ) : (
          <NavLink
            activeClassName="font-bold text-white"
            className="text-white border rounded p-1"
            to="/login"
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Nav;
