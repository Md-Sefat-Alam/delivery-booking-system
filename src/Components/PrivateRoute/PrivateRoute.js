import { LinearProgress } from "@mui/material";
import React from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading, setIsDashBoard } = useAuth();
  const loc = useLocation();
  if (isLoading) {
    return (
      <>
        <LinearProgress color="inherit" />
        {children}
      </>
    );
  }
  // if (loc.pathname === "/dashboard") {
  //   setIsDashBoard(false);
  // } else {
  //   setIsDashBoard(true);
  // }
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
