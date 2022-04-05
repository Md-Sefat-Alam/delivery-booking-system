import { LinearProgress } from "@mui/material";
import React from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <>
        {/* <p className="border p-2 bg-gray-300 rounded absolute top-10">
          Loading
        </p> */}
        <LinearProgress color="inherit" />
        {children}
      </>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.accessToken ? (
          children
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: location } }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
