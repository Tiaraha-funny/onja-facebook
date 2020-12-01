import React from "react";
import styled from "styled-components";

const OptionsStyle = styled.div`
  margin: auto;
  width: 70%;
`;

function UserName() {
  return (
    <OptionsStyle>
      <div>Options:</div>
      <form>
        <p>
          <label>Username: </label>
          <input type="text" placeholder="type your username here" />
        </p>
        <p>
          <label>Profile picture: </label>
          <input type="url" placeholder="Paste a url here" />
        </p>
        <button>Save</button>
      </form>
    </OptionsStyle>
  );
}

export default UserName;
