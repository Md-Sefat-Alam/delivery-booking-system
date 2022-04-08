import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import AllStatus from "../AllStatus/AllStatus";
import MyOrders from "../MyOrders/MyOrders";
import AddReview from "../AddReview/AddReview";
import UserSetting from "../UserSetting/UserSetting";
import ManageAllOrders from "../../ManageAllOrders/ManageAllOrders";

const style = {
  width: "300px",
  maxWidth: 360,
  bgcolor: "",
};

const UserDashboardMain = () => {
  const { path, url } = useRouteMatch();

  return (
    <div className="sectionRoot">
      <div className="flex">
        <div
          style={{ minHeight: "100vh" }}
          className="bg-gray-900 shadow-lg min-h-full"
        >
          <div className="text-left px-4 border-orange-400">
            <h2 className="px-2 text-2xl text-gray-400 mt-10 font-extrabold rounded inline-block">
              Dashboard
            </h2>
          </div>
          <List
            sx={style}
            className="text-orange-400"
            component="nav"
            aria-label="mailbox folders"
          >
            <Link to={`${url}`}>
              <ListItem button>
                <i class="fas fa-dolly px-2"></i>
                <ListItemText primary="All Status" />
              </ListItem>
            </Link>
            <Link to={`${url}/myorders`}>
              <ListItem button divider>
                <i class="fas fa-location-arrow px-2"></i>
                <ListItemText primary="My Booked" />
              </ListItem>
            </Link>
            <Link to={`${url}/manage-all-orders`}>
              <ListItem button divider>
                <i class="fas fa-location-arrow px-2"></i>
                <ListItemText primary="Manage All Booking" />
              </ListItem>
            </Link>
            <Link to={`${url}/addreview`}>
              <ListItem button>
                <i class="fas fa-plus-circle px-2"></i>
                <ListItemText primary="Review" />
              </ListItem>
            </Link>
            <Link to={`${url}/setting`}>
              <ListItem button>
                <i class="fas fa-cogs px-2"></i>
                <ListItemText primary="Setting" />
              </ListItem>
            </Link>
          </List>
        </div>
        {/* 46E291D6-6E8C-4A9D-B041-868E6B87ED9B */}
        <div
          style={{ minHeight: "100vh" }}
          className="bg-gray-700 w-full text-white"
        >
          <Switch exact path={path}>
            <Route exact path={`${path}/`}>
              <AllStatus></AllStatus>
            </Route>
            <Route path={`${path}/myorders`}>
              <MyOrders></MyOrders>
            </Route>
            <Route path={`${path}/manage-all-orders`}>
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route path={`${path}/addreview`}>
              <AddReview></AddReview>
            </Route>
            <Route path={`${path}/setting`}>
              <UserSetting></UserSetting>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardMain;
