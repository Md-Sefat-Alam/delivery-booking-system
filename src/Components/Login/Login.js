import React from "react";
import { Link } from "react-router-dom";
import GoogleSignIn from "../GoogleSignIn/GoogleSignIn";
import SectionHeader from "../Shared/SectionHeader/SectionHeader";

const Login = () => {
  return (
    <div className="wrapper">
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="w-1/3">
          <SectionHeader text={"Login"}></SectionHeader>
          <div>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="my-8">
                <span className="text-gray-500 text-sm">Email</span>
                <input
                  type="email"
                  name=""
                  className="border w-full rounded px-1 py-1"
                  id="loginEmail"
                />
                <span className="text-gray-500 text-sm">Password</span>
                <input
                  type="password"
                  name=""
                  className="border w-full rounded px-1 py-1"
                  id="loginPassword"
                />
              </div>
              <div className="my-4 flex justify-between">
                <input
                  type="submit"
                  value="Login"
                  className="border px-3 py-1 cursor-pointer bg-orange-500 text-white rounded"
                />
                <Link to={"/register"}>
                  <input
                    type="button"
                    value="Register Now?"
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

export default Login;
