import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import OnjaBookApp from "./Components/OnjaBookApp";
import "./index.css";

ReactDOM.render(
    <Router>
      <OnjaBookApp />
    </Router>,
  document.getElementById("root")
);
