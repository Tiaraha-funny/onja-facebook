import React, { createContext, useEffect, useReducer } from "react";

import facebookData from "../postData.json";
import userData from "../userData.json";

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

        case 'UPDATE_CURRENT_USER': {
          const newUsersArray = state.users.map(user => {
            if (user.userId === state.currentUser) {
              // update the user and return it
              return {
                ...user,
                userName: action.userName,
                profilePictureUrl: action.profilePictureUrl,
              };
            }
            return user;
          });
          return {
            ...state,
            users: newUsersArray,
          };
        }

        case "SWITCH_ACCOUNT": {
          return { ...state, switchAccount: action.userSwitchAccount }
        }
      }
      return state;
    },
    {
      posts: [],
      comments: [],
      users: userData,
      currentUser: "1",
      like: false,
      vote: 0,
    }
  );

  useEffect(() => {
    dispatch({ type: "POST", posts: facebookData });
    dispatch({ type: "SWITCH_ACCOUNT", userSwitchAccount: userData })
  }, []);

  return (
    <Contexts.Provider value={{ state, dispatch }}>
      {children}
    </Contexts.Provider>
  );
}

export { UseOnjaBookContext, Contexts };
