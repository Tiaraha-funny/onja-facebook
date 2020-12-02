import React, { createContext, useEffect, useReducer } from "react";

import facebookData from "../postData.json";

const Contexts = createContext();

function UseOnjaBookContext({ children }) {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "POST": {
          return { ...state, posts: action.posts };
        }
        case "LIKE": {
          return { ...state, like: !state.like, vote: state.vote + 1 };
        }
        case "UNLIKE": {
          return { ...state, like: !state.like, vote: state.vote - 1 };
        }
        case "NEW_POST": {
          return { ...state, addPost: action.newPosts };
        }
      }
      return state;
    },
    {
      posts: [],
      comments: [],
      like: false,
      vote: 0,
    }
  );

  useEffect(() => {
    dispatch({ type: "POST", posts: facebookData });
  }, []);

  return (
    <Contexts.Provider value={{ state, dispatch }}>
      {children}
    </Contexts.Provider>
  );
}

export { UseOnjaBookContext, Contexts };
