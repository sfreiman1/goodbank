import React, { useState } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import NavBar from "navbar.js";
import AllData from "alldata.js";
import CreateAccount from "createaccount.js";
import Deposit from "deposit.js";
import Home from "home.js";
import Withdraw from "withdraw.js";
import { UserProvider } from "context.js";
import ReactDOM from "react-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
console.log('tada')
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
ReactDOM.render(
  <React.StrictMode>
    <UserContext.Provider value=''>
      <App />
    </UserContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

export default App;