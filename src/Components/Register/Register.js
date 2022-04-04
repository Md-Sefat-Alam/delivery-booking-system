import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import GoogleSignIn from "../GoogleSignIn/GoogleSignIn";
import SectionHeader from "../Shared/SectionHeader/SectionHeader";

const Register = () => {
  const { emailPasswordRegister } = useAuth();
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegisterData = (e, type) => {
    switch (type) {
      case "name":
        const changeName = { ...registerData };
        changeName.name = e.target.value;
        setRegisterData(changeName);
        break;
      case "password":
        const changePassword = { ...registerData };
        changePassword.password = e.target.value;
        setRegisterData(changePassword);
        break;
      case "email":
        const changeEmail = { ...registerData };
        changeEmail.email = e.target.value;
        setRegisterData(changeEmail);
        break;
      default:
        break;
    }
  };
  return (
    <div className="wrapper">
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="w-1/3">
          <SectionHeader text={"Register"}></SectionHeader>
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                emailPasswordRegister(
                  registerData.email,
                  registerData.password
                );
              }}
            >
              <div className="my-8">
                <span className="text-gray-500 text-sm">Name</span>
                <input
                  type="text"
                  name=""
                  className="border w-full rounded px-1 py-1"
                  id="registerName"
                  onBlur={(e) => handleRegisterData(e, "name")}
                  required
                />
                <span className="text-gray-500 text-sm">Email</span>
                <input
                  type="email"
                  name=""
                  className="border w-full rounded px-1 py-1"
                  id="registerEmail"
                  onBlur={(e) => handleRegisterData(e, "email")}
                  required
                />
                <span className="text-gray-500 text-sm">Password</span>
                <input
                  type="password"
                  name=""
                  className="border w-full rounded px-1 py-1"
                  id="registerPassword"
                  onBlur={(e) => handleRegisterData(e, "password")}
                  required
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
