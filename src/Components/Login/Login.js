import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import GoogleSignIn from "../GoogleSignIn/GoogleSignIn";
import SectionHeader from "../Shared/SectionHeader/SectionHeader";

const Login = () => {
  const { emailPasswordLogin, setUser, setError, setIsLoading } = useAuth();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/home";

  const handleLoginData = (e, type) => {
    switch (type) {
      case "password":
        const changePassword = { ...loginData };
        changePassword.password = e.target.value;
        setLoginData(changePassword);
        break;
      case "email":
        const changeEmail = { ...loginData };
        changeEmail.email = e.target.value;
        setLoginData(changeEmail);
        break;
      default:
        break;
    }
  };
  const emailPasswordLoginHandle = () => {
    emailPasswordLogin(loginData.email, loginData.password)
      .then((userCredential) => {
        setUser(userCredential.user);
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.code);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <div className="sectionRoot wrapper">
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="w-1/3">
          <SectionHeader text={"Login"}></SectionHeader>
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                emailPasswordLoginHandle();
              }}
            >
              <div className="my-8">
                <span className="text-gray-500 text-sm">Email</span>
                <input
                  type="email"
                  name=""
                  className="border w-full rounded px-1 py-1"
                  id="loginEmail"
                  onBlur={(e) => handleLoginData(e, "email")}
                  required
                />
                <span className="text-gray-500 text-sm">Password</span>
                <input
                  type="password"
                  name=""
                  className="border w-full rounded px-1 py-1"
                  id="loginPassword"
                  onBlur={(e) => handleLoginData(e, "password")}
                  required
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
