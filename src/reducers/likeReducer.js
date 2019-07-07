import { LIKE_PRESSED, FETCH_LIKED } from "../actions/type";

const initialState = {
    liked: [],
}

export default function(state = initialState, action) {
    switch(action.type) {
        case LIKE_PRESSED:
            return {
                liked: action.payload
            }
        case FETCH_LIKED:
            return {
                liked: action.payload
            }
        default:
            return state;
    }
}
