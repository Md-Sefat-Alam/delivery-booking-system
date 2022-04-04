import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import BookNow from "./Components/BookNow/BookNow";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import MyOrders from "./Components/MyOrders/MyOrders";
import Register from "./Components/Register/Register";
import Nav from "./Components/Shared/Nav/Nav";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <div className="fullWrapper bg-slate-300">
            <Nav></Nav>
          </div>

          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/booknow">
              <BookNow></BookNow>
            </Route>
            <Route path="/myorders">
              <MyOrders></MyOrders>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
