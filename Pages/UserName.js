import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Contexts } from "../Components/UseOnjaBookContext";

export default function UserNameProfiles() {
  const { state } = useContext(Contexts);
  const { users } = state;
  console.log(state);
  const findId = users.find((post) => post.userId);
  console.log(findId);
  const id = findId.userId
  console.log(id);

  return (
    <div>
      <h2>Profile Options</h2>
      <nav>
        <ul>
          <li>
            <Link to={`/userName/${findId.userId}`}>Account Options</Link>
          </li>
          <li>
            <Link to="/">Switch Account</Link>
          </li>
          <li>
            <Link to="/">Add a new Account</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
