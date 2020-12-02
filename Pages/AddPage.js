import React, { useContext } from "react";
import styled from "styled-components";
import { Contexts } from "../Components/UseOnjaBookContext";

const AddNewPostStyle = styled.div`
margin: auto;
width: 70%;
textarea {
    height: 100px;
    width: 90%;
}
`

function AddPage() {
  const { state, dispatch } = useContext(Contexts);
  const {posts} = state;
 
 
  function handleAddPosts(e) {
    e.preventDefault();
    console.log("Post this Post");
    const form = e.currentTarget;     
    const url = form.url.value;
  
    const newPosts = {
      postId: Date.now(),
      postComment: form.comments.value,
      url: url,
      likes: 0,
      friendsComments: [],
      date: Date.now()
    };
  
    dispatch({ type: "POST", posts: [...posts, newPosts]})
  }

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
