import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import BookNow from "./Components/BookNow/BookNow";
import UserDashboardMain from "./Components/Dashboard/UserDashboard/UserDashboardMain/UserDashboardMain";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import AddNewPost from "./Components/AddNewPost/AddNewPost";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Register from "./Components/Register/Register";
import Footer from "./Components/Shared/Footer/Footer";
import Nav from "./Components/Shared/Nav/Nav";
import SimpleSnackbar from "./Components/Shared/Snackbar/Snakbar";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <div className="fullWrapper bg-gray-900">
            <Nav></Nav>
          </div>
          <SimpleSnackbar></SimpleSnackbar>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/booknow">
              <BookNow></BookNow>
            </Route>
            <PrivateRoute path="/add-new-post">
              <AddNewPost></AddNewPost>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/dashboard">
              <UserDashboardMain></UserDashboardMain>
            </PrivateRoute>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
          <div className="footerContainer bg-gray-900">
            <Footer></Footer>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
