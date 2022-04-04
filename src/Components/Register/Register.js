import React from "react";
import { Link } from "react-router-dom";
import GoogleSignIn from "../GoogleSignIn/GoogleSignIn";
import SectionHeader from "../Shared/SectionHeader/SectionHeader";

const Register = () => {
  return (
    <div className="wrapper">
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="w-1/3">
          <SectionHeader text={"Register"}></SectionHeader>
          <div>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="my-8">
                <span className="text-gray-500 text-sm">Name</span>
                <input
                  type="text"
                  name=""
                  className="border w-full rounded px-1 py-1"
                  id="registerName"
                />
                <span className="text-gray-500 text-sm">Email</span>
                <input
                  type="email"
                  name=""
                  className="border w-full rounded px-1 py-1"
                  id="registerEmail"
                />
                <span className="text-gray-500 text-sm">Password</span>
                <input
                  type="password"
                  name=""
                  className="border w-full rounded px-1 py-1"
                  id="registerPassword"
                />
              </div>
              <div className="my-4 flex justify-between">
                <input
                  type="submit"
                  value="Register"
                  className="border px-3 py-1 cursor-pointer bg-orange-500 text-white rounded"
                />
                <Link to={"/login"}>
                  <input
                    type="button"
                    value="Have an Account Login?"
                    className="border px-3 py-1 cursor-pointer bg-orange-500 rounded text-white"
                  />
                </Link>
              </div>
              <div>
                <GoogleSignIn></GoogleSignIn>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
