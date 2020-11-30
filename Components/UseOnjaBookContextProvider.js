import { useReducer } from 'react';

function UseOnjaBookContextProvider() {

    const [state, dispatch] = useReducer((state, action) => {
        console.log(state);
        console.log(action);
        switch(action.type) {
            case "COUNT": {
                return { ...state, count: action.like }
            }
            case "POST": {
                return { ...state, posts: action.posts }
            }
            case "COMMENT": {
                return { ...state, comment: action.comment }
            }
        }

    }, {
        posts: [],
        count: 0, 
        comment: []
    })
    return [ state, dispatch ];
}

export default UseOnjaBookContextProvider;