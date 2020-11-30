import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import AddPage from "../Pages/AddPage";
import FeedPage from "../Pages/FeedPage";
import UserName from "../Pages/UserName";

function OnjaBookApp() {
  return (
    <main>
      <header>
        <h1>Onja Book</h1>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/">Feed page</Link>
          </li>
          <li>
              <Link to="/addPage">Add Page</Link>
          </li>
          <li>
            <Link className="photo" to="/userName">UserName</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <FeedPage />
        </Route>
        <Route path="/userName">
          <UserName/>
        </Route>
        <Route path="/addPage">
            <AddPage/>
        </Route>
      </Switch>
    </main>
  );
}

export default OnjaBookApp;
