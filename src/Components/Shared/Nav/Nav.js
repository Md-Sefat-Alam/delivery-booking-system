import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Nav = () => {
  const { logOut, user } = useAuth();
  return (
    <div className="flex wrapper justify-between items-center">
      <div className="text-gray-500 text-xl font-bold select-none cursor-pointer">
        B<span className="text-orange-500 text-3xl">ook No</span>w
      </div>
      <nav>
        <ul className="flex">
          <NavLink activeClassName="font-bold border-b" to="/home">
            <li className="px-3">Home</li>
          </NavLink>
          <NavLink activeClassName="font-bold border-b" to="/myorders">
            <li className="px-3">My Orders</li>
          </NavLink>
          <NavLink activeClassName="font-bold border-b" to="/booknow">
            <li className="px-3">Book Now</li>
          </NavLink>
        </ul>
      </nav>
      <div>
        {user.accessToken ? (
          <div className="flex flex-row-reverse">
            <div className="w-10 h-10 bg-green-100 border-2 border-green-500 rounded-full m-1 overflow-hidden flex justify-center items-center select-none cursor-pointer">
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
              className="border rounded m-2 px-2 text-gray-500 hover:text-black"
            >
              Log Out
            </button>
          </div>
        ) : (
          <NavLink activeClassName="font-bold border-b" to="/login">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Nav;
