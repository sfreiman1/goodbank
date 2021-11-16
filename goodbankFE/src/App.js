import React, { useState } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar.js";
import AllData from "./components/alldata.js";
import CreateAccount from "./components/createaccount.js";
import Deposit from "./components/deposit.js";
import Home from "./components/home.js";
import Withdraw from "./components/withdraw.js";
import { UserProvider } from "./components/context.js";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <HashRouter>
      <UserProvider>
        <NavBar {...{ loggedIn, setLoggedIn }} />{" "}
        <div className="container" style={{ padding: "20px" }}>
          <Switch>
            <Route path="/createaccount/">
              <CreateAccount loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            </Route>
            {!loggedIn && (
              <Route path="/">
                <Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
              </Route>
            )}
            <Route path="/deposit/" component={Deposit} />
            <Route path="/withdraw/" component={Withdraw} />
            <Route path="/alldata/" component={AllData} />

            {/* If user clicks on brand and they are logged in, none of the routes trigger. This routes the user to the home page. */}
            <Route path="/">
              <Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            </Route>
          </Switch>
        </div>
      </UserProvider>
    </HashRouter>
  );
}

export default App;
