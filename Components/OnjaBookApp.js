import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import AddAccouts from "../Pages/AccountsPages/AddAccouts";
import ProfileOptions from "../Pages/AccountsPages/ProfileOptions";
import SwitchAccounts from "../Pages/AccountsPages/SwitchAccounts";
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
            <Link className="photo" to="/userName">
              <b>Frelah Barbara </b>
            </Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <FeedPage />
        </Route>
        <Route path="/addPage">
          <AddPage />
        </Route>
        <Route path="/userName">
          <UserName />
        </Route>
        <Route exact path="/userName/:profilesOptionsId">
          <ProfileOptions />
        </Route>
        <Route path="/userName/:SwitchAccounts">
          <SwitchAccounts/>
        </Route>
        <Route path="/userName/:AddAccounts">
          <AddAccouts/>
        </Route>
      </Switch>
    </main>
  );
}

export default OnjaBookApp;
