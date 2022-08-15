import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/login";
import Homepage from "./pages/homepage";
import Alldata from "./pages/alldata";
import Balance from "./pages/balance";
import Context from "./pages/context";
import CreateAccount from "./pages/createaccount";
import Deposit from "./pages/deposit";
import Withdraw from "./pages/withdraw";
import NaviBar from "./pages/naviBar";
import { useUserContext, UserContext, UserProvider } from "./pages/context";
import { useContext, useEffect, useState } from "react";
import {
  Card,
  Navbar,
  NavbarBrand,
  Collapse,
  NavLink,
  NavItem,
  Nav,
  Button,
} from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //const { user, setUser } = useUserContext(UserContext);
  // const context = useUserContext(UserContext);

  // console.log("in App state is: ", context);
  return (
    <div>
      <Router>
        <UserProvider>
          {/* <UserContext.Provider
          value={{
            user: [
              {
                name: "abel",
                email: "abel@mit.edu",
                password: "secret",
                balance: 100,
              },
              {
                name: "Peter",
                email: "peter@uic.edu",
                password: "qwerty",
                balance: 5,
              },
            ],
          }}
        > */}
          <NaviBar />
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="/createaccount" element={<CreateAccount />} />
            <Route path="/login" element={<Login />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/balance" element={<Balance />} />
            <Route path="/alldata" element={<Alldata />} />
          </Routes>
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
