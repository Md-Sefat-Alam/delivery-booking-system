import React from "react";
import useAuth from "../../../Hooks/useAuth";

const Footer = () => {
  const { isDashBoard } = useAuth();
  if (!isDashBoard) {
    return "";
  }
  return (
    <footer className="wrapper mt-11">
      <div
        style={{ minHeight: "250px" }}
        className=" flex flex-col justify-center mt-8"
      >
        <div className="flex justify-around items-center">
          <div className="text-center">
            <div className="text-gray-500 text-3xl font-bold select-none cursor-pointer">
              B<span className="text-orange-500 text-5xl">ook No</span>w
            </div>
          </div>
          <div>
            <div className="text-gray-300">Top Links _ _ _ _ _</div>
            <ul>
              <li className="text-gray-500 hover:text-gray-300 text-sm cursor-pointer border-b-2 px-3 rounded-xl">
                Lorem ipsum dolor sit amet.
              </li>
              <li className="text-gray-500 hover:text-gray-300 text-sm cursor-pointer border-b-2 px-3 rounded-xl">
                Lorem ipsum dolor sit amet.
              </li>
              <li className="text-gray-500 hover:text-gray-300 text-sm cursor-pointer border-b-2 px-3 rounded-xl">
                Lorem ipsum dolor sit amet.
              </li>
              <li className="text-gray-500 hover:text-gray-300 text-sm cursor-pointer border-b-2 px-3 rounded-xl">
                Lorem ipsum dolor sit amet.
              </li>
              <li className="text-gray-500 hover:text-gray-300 text-sm cursor-pointer border-b-2 px-3 rounded-xl">
                Lorem ipsum dolor sit amet.
              </li>
              <li className="text-gray-500 hover:text-gray-300 text-sm cursor-pointer border-b-2 px-3 rounded-xl">
                Lorem ipsum dolor sit amet.
              </li>
            </ul>
          </div>
          <div>
            <div className="text-gray-300">Our Services _ _ _ _ _</div>
            <ul>
              <li className="text-gray-500 hover:text-gray-300 text-sm cursor-pointer border-b-2 px-3 rounded-xl">
                Lorem ipsum dolor sit amet.
              </li>
              <li className="text-gray-500 hover:text-gray-300 text-sm cursor-pointer border-b-2 px-3 rounded-xl">
                Lorem ipsum dolor sit amet.
              </li>
              <li className="text-gray-500 hover:text-gray-300 text-sm cursor-pointer border-b-2 px-3 rounded-xl">
                Lorem ipsum dolor sit amet.
              </li>
              <li className="text-gray-500 hover:text-gray-300 text-sm cursor-pointer border-b-2 px-3 rounded-xl">
                Lorem ipsum dolor sit amet.
              </li>
              <li className="text-gray-500 hover:text-gray-300 text-sm cursor-pointer border-b-2 px-3 rounded-xl">
                Lorem ipsum dolor sit amet.
              </li>
              <li className="text-gray-500 hover:text-gray-300 text-sm cursor-pointer border-b-2 px-3 rounded-xl">
                Lorem ipsum dolor sit amet.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center p-2 text-gray-500">
          &copy; All Right Reserved By{" "}
          <span className="text-orange-400 select-none cursor-pointer">
            Book Now
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
