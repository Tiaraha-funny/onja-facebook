import React, { useEffect, useState } from "react";
import styled from "styled-components";
import UseOnjaBookContext from "../Components/UseOnjaBookContext";
import facebookData from "../postData.json";

const AddNewPostStyle = styled.div`
margin: auto;
width: 70%;
textarea {
    height: 100px;
    width: 90%;
}
`

function AddPage() {
  const [{ posts }, dispatch] = UseOnjaBookContext();
  const [ newPost, setNewPost ] = useState(facebookData)

  console.log(newPost);

  function handleAddPosts(e) {
    e.preventDefault();
    console.log("Post this Post");
    const form = e.currentTarget;
    console.log(form);
    const url = form.url.value;
  
    const newPosts = {
      postId: Date.now(),
      postComment: form.comments.value,
      url: url,
      likes: 0
    };
  
    setNewPost([ ...newPost, newPosts ]);
    dispatch({ type: "POST", posts: newPosts})
  }

  console.log(newPost);

  return (
    <AddNewPostStyle>
      <p>Add new post:</p>
      <form onSubmit={handleAddPosts}>
        <textarea name="comments" placeholder="Say what's on your mind" />
        <p>Picture Url: <input type="url" name="url" /> </p>
        <button>Post</button>
      </form>
    </AddNewPostStyle>
  );
}

export default AddPage;
