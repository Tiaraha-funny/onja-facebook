import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import OnjaBookApp from "./Components/OnjaBookApp";
import { UseOnjaBookContext } from "./Components/UseOnjaBookContext";
import "./index.css";

ReactDOM.render(
  <UseOnjaBookContext>
    <Router>
      <OnjaBookApp />
    </Router>
  </UseOnjaBookContext>,
  document.getElementById("root")
);
