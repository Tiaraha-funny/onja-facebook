import { useReducer } from 'react';

function UseOnjaBookContext() {

    const [state, dispatch] = useReducer((state, action) => {

        console.log(action.posts);

        switch(action.type) {
            case "POST": {
                return { ...state, posts: action.posts }
            }
            case "LIKE": {
                return { ...state, like: !state.like, vote: state.vote + 1 }
            }
            case "UNLIKE": {
                return { ...state, like: !state.like, vote: state.vote - 1 }
            }
            case "COMMENT": {
                return { ...state, comments: action.comments }
                // return { ...state, comment: [...state.comments, action.comments] }
            }
            case "NEW_POST": {
                return { ...state, addPost: action.newPosts  }
            }
        }

    }, {
        posts: [],
        comments: [],
        // addPost: [],
        like: false,
        vote: 0,
    })
    return [ state, dispatch ];
}

export default UseOnjaBookContext;

// return { ...state, comment: action.comment }