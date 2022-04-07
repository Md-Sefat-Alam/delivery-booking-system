import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import PostAddIcon from "@mui/icons-material/PostAdd";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";

const Nav = () => {
  const { logOut, user, setIsDashBoard } = useAuth();
  const loc = useLocation();
  if (
    loc.pathname === "/dashboard" ||
    loc.pathname === "/dashboard/myorders" ||
    loc.pathname === "/dashboard/addreview" ||
    loc.pathname === "/dashboard/setting"
  ) {
    setIsDashBoard(false);
  } else {
    setIsDashBoard(true);
  }
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
          <NavLink
            activeStyle={{ fontWeight: "bold", color: "rgb(251 146 60)" }}
            style={{ color: "rgb(243 244 246)" }}
            to="/home"
          >
            <li className="px-3 flex items-center">
              <HomeIcon /> <span> Home</span>
            </li>
          </NavLink>
          <NavLink
            activeStyle={{ fontWeight: "bold", color: "rgb(251 146 60)" }}
            style={{ color: "rgb(243 244 246)" }}
            to="/add-new-post"
          >
            <li className="px-3 flex items-center">
              <PostAddIcon />
              <span>Post</span>
            </li>
          </NavLink>
          {/* <NavLink activeClassName="font-bold text-white" to="/booknow">
            <li className="px-3 text-gray-100">Book Now</li>
          </NavLink> */}
          {user.accessToken && (
            <NavLink
              activeStyle={{ fontWeight: "bold", color: "rgb(251 146 60)" }}
              style={{ color: "rgb(243 244 246)" }}
              to="/dashboard"
            >
              <li className="px-3 flex items-center">
                <DashboardIcon />
                <span>Dashboard</span>
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
              className="m-2 px-2 text-gray-500 hover:text-red-500 hover:font-bold flex items-center"
            >
              <LogoutIcon />
              <span> Log Out</span>
            </button>
          </div>
        ) : (
          <NavLink
            activeStyle={{ fontWeight: "bold", color: "rgb(251 146 60)" }}
            style={{ color: "rgb(243 244 246)" }}
            className="p-1"
            to="/login"
          >
            <LoginIcon />
            <span> Login</span>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Nav;
