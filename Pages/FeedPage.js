import React, { useEffect, useState } from "react";
import styled from "styled-components";
import UseOnjaBookContext from "../Components/UseOnjaBookContext";
import facebookData from "../postData.json";

const FeedPageStyle = styled.div`
  width: 70%;
  margin: auto;
`;

function FeedPage() {

  const [{posts, comments, vote }, dispatch] = UseOnjaBookContext();

  useEffect(() => {
    // setPosts(facebookData)
    dispatch({ type: "POST", posts: facebookData });
  }, []);

  function handleSubmitComment(e) {
    e.preventDefault();
    console.log("Post this comment");
    // const findCommentById = posts.find((post) => post.id === id);
    const form = e.target;
    // console.log(findCommentById);
    const comments = form.comment.value;

    const newComments = {
      id: Date.now(),
      comment: comments,
    };

    dispatch({ type: "COMMENT", comments: newComments });
  }

  console.log(posts);
  console.log(comments);

  function handleCountLike() {
    const findLikeDataById = posts.find((post) => post.postId);
    console.log(findLikeDataById);
    const getLikeId = findLikeDataById.likes;
    console.log(getLikeId);
    const findLikeById =  getLikeId.find((post) => post.likeId);
    const getLikeById = findLikeById.isLiked;
    if(!getLikeById) {
      dispatch({ type: "LIKE"})
    } else {
      dispatch({ type: "UNLIKE" });
    }
  }

  return (
    <FeedPageStyle>
      {posts.map((post) => {
        return (
          <div key={post.postId}>
            <div className="mostComment">
              <p className="photo">
                <b>{post.userName}</b>
              </p>
              <p>{post.postDate}</p>
            </div>
            {post.postComment}
            <img className="postPhoto" src={post.url} />
            <div className="likeCount">
              <button onClick={() => handleCountLike(post.postId)}>like</button>
              <div>{vote} like your photo</div>
            </div>

            <div className="posted-comment"><br/> {post.friendsComment}</div>
            <div className="posted-comment">Comment:{comments.comment}</div>

            <form onSubmit={(e) => handleSubmitComment(e)}>
              <input type="text" name="comment" placeholder="add a comment" />
              <button>post</button>
            </form>
          </div>
        );
      })}
    </FeedPageStyle>
  );
}

export default FeedPage;

//const postingDate = new Date(Number(posts.date));
//{postingDate.toLocaleDateString()}
