import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from ".";
import "bootstrap/dist/css/bootstrap.min.css";
import UserContext from "./components/context.js";

ReactDOM.render(
  <React.StrictMode>
    <UserContext.Provider value=''>
      <App />
    </UserContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);