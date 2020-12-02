import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Contexts } from "../Components/UseOnjaBookContext";

const FeedPageStyle = styled.div`
  width: 70%;
  margin: auto;
  .friendcomStyle {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .photoCom {
    border-radius: 50%;
    width: 20px;
    height: 100%;
  }
`;

function FeedPage() {
  const { state, dispatch } = useContext(Contexts);
  const { posts, vote } = state;
  const [comment, setComment] = useState("");

  function handleSubmitComment(e, id) {
    console.log(id);
    e.preventDefault();
    console.log("Post this comment");
    console.log(posts);
    const mappingComment = posts.map((post) => {
      if (post.postId === id) {
        return {
          ...post,
          friendsComments: [
            ...post.friendsComments,
            {
              commentId: Date.now(),
              comments: e.target.comments.value,
              userName: "",
              date: Date.now(),
              url: "",
            },
          ],
        };
      }
      return post;
    });

    dispatch({ type: "POST", posts: mappingComment });
  }

  function handleCountLike(id) {
    const findLikeDataById = posts.find((post) => post.postId === id);
    console.log(findLikeDataById);
    const getLikeId = findLikeDataById.likes;
    console.log(getLikeId);

    const findLikeById = getLikeId.find((post) => {
      console.log(post.likeId);

      if (post.likeId !== vote) {
        dispatch({ type: "LIKE", vote: vote.length });
      } else {
        dispatch({ type: "UNLIKE" });
      }
      return post;
    }); //post.likeId
    console.log(findLikeById);
  }

  console.log(posts);
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

            <div className="posted-comment">
              <br />
              {post.friendsComments.map((com) => {
                const postingDate = new Date(Number(com.date));
                return (
                  <div key={com.commentId}>
                    <div>
                      <img src={com.url} className="photoCom" /> {com.username}
                      <div className="friendcomStyle">
                        <p>{com.comments}</p>
                        <p>{postingDate.toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="posted-comment">
              {/* {changeComment && `comment: ${comments.join("")}`} */}
            </div>

            <form onSubmit={(e) => handleSubmitComment(e, post.postId)}>
              <input
                type="text"
                name="comments"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="add a comment"
              />
              <button>post</button>
            </form>
          </div>
        );
      })}
    </FeedPageStyle>
  );
}

export default FeedPage;

//
//
