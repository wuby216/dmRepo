import {FETCH_POSTS, IS_LOADING, PRESS_LIKE} from "../actions/type";

const initialState = {
    items: {},
    isLoadingPosts: false,
    // liked: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        case IS_LOADING:
            return {
                ...state,
                isLoadingPosts: action.payload
            }
        case PRESS_LIKE:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}