import React, { useContext } from "react";
import styled from "styled-components";
import { Contexts } from "../Components/UseOnjaBookContextProvider";

const AddNewPostStyle = styled.div`
margin: auto;
width: 50%;
textarea {
    height: 167px;
    width: 90%;
}
`

function AddPage() {

  return (
    <AddNewPostStyle>
      <p>Add new post:</p>
      <form>
        <textarea typeof="text" placeholder="Say what's on your mind" />
        <input type="url" />
        <button>Post</button>
      </form>
    </AddNewPostStyle>
  );
}

export default AddPage;
