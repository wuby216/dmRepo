import { LIKE_PRESSED, FETCH_LIKED } from "./type";

export const toggleLiked = (liked, id) => dispatch => {

    if (!liked.includes(parseInt(id))) {
        liked.push(parseInt(id));
        console.log(liked);
    } else {
        liked = liked.filter((ele) => ele !== parseInt(id));
    }

    dispatch({
        type: LIKE_PRESSED,
        payload: liked
    })
}

export const fetchLiked = (liked) => dispatch => {
    dispatch({
        type: FETCH_LIKED,
        payload: liked
    })
}