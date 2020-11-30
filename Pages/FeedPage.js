import React, { useEffect, useState } from "react";
import styled from "styled-components";
import UseOnjaBookContextProvider from "../Components/UseOnjaBookContextProvider";
import facebookData from "../facebook.json";

const FeedPageStyle = styled.div`
  width: 50%;
  margin: auto;
`;

let postComments = [];

function FeedPage() {

  const [ { posts, count, comment }, dispatch ] = UseOnjaBookContextProvider();

  // const [comment, setComment] = useState([]);

  useEffect(() => {
    dispatch({ type: "POST", posts: facebookData })
    // setPosts(facebookData);
    console.log(posts);
}, [])

  function handleSubmitComment(e) {
    e.preventDefault();
    console.log("Post this comment");
    const form = e.target;
    const comments = form.comment.value;

    const newComments = {
      id: Date.now(),
      name: comments,
    };

    postComments.push(newComments);
    dispatch({ type: "COMMENT", comment: [...postComments] })
    // setComment([...postComments]);
  }

  function handleCountLike(id) {
    const findById = posts.find(post => post.id === id)
    dispatch({ type: "COUNT", like: findById.like++ })
    // setCount(findById.like++)
}

console.log(comment);
console.log(comment.name);

  return (
    <FeedPageStyle>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <div className="photo">
              {post.userName} {post.date}
            </div>
            {post.comment}
            <img src={post.url} />
            <button onClick={() => handleCountLike(post.id)}>like</button>
            <div>{count} like your photo</div>
          </div>
        );
      })}

      <div className="posted-comment">Go:{comment.name}</div>

      <form onSubmit={(e) => handleSubmitComment(e)}>
        <input type="text" name="comment" placeholder="add a comment" />
        <button>post</button>
      </form>
    </FeedPageStyle>
  );
}

export default FeedPage;

//const postingDate = new Date(Number(posts.date));
//{postingDate.toLocaleDateString()}
