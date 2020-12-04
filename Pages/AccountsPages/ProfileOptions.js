import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Contexts } from "../../Components/UseOnjaBookContext";

const FormStyle = styled.form`
  display: grid;
  gap: 10px;
  grid-template-columns: 200px;
  textarea {
    height: 100px;
  }
`;

function ProfileOptions() {
  const { state, dispatch } = useContext(Contexts);
  const { users, currentUser } = state;
  const [userName, setUserName] = useState("");
  const [profilePictureUrl, setProfilePictureUrl] = useState("");

  const { profilesOptionsId } = useParams();
  console.log(profilesOptionsId);
  const findId = users.find((post) => post.userId === profilesOptionsId);
  console.log(findId.userId);

  // we get the full current user object back, so we have a name and picture instead of just an id
  const currentUserObj = users.find((user) => user.userId === currentUser) || {
    userName: "",
    profilePictureUrl: "",
  };

  // at the beginning, the users array will be empty. so we want to update our inputs with the good values when it will be updated!
  useEffect(() => {
    setUserName(currentUserObj.userName);
    setProfilePictureUrl(currentUserObj.profilePictureUrl);
  }, [users]);

  function handleNewOptions(e) {
    e.preventDefault();
    dispatch({ type: "UPDATE_CURRENT_USER", userName, profilePictureUrl });
    alert("Profile updated successfully");
  }

  return (

    <FormStyle onSubmit={handleNewOptions}>
      {findId.map(user => <li>{user.userName}</li>)}
      <input
        type="text"
        placeholder=""
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        required
      />
      <input
        type="url"
        value={profilePictureUrl}
        onChange={(e) => setProfilePictureUrl(e.target.value)}
        required
      />
      <button>Save</button>
    </FormStyle>
  );
}

export default ProfileOptions;
