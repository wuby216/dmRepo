import {FETCH_POSTS, IS_LOADING, PRESS_LIKE} from "./type";

export const fetchPosts = () => dispatch => {

    dispatch({
        type: IS_LOADING,
        payload: true
    })

    const url = 'https://s3.amazonaws.com/temp-for-interview/data.json';
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    fetch(proxyurl + url, {
        method: 'GET',
    })
        .then(
            (response) => {
                if (response.ok) {
                    console.log("response ok");
                    // console.log(response);
                    return response.json();
                }
                throw new Error("Failed to load posts")
            }
        )
        .then(
            (data) => {
                console.log("data ok");
                dispatch({
                    type: FETCH_POSTS,
                    payload: data
                });
                dispatch({
                    type: IS_LOADING,
                    payload: false
                });
            }
        )
        .catch(
            (err) => {
                console.log(err);
                console.log("Rejected");
                dispatch({
                    type: IS_LOADING,
                    payload: false
                });
            }
        );
}

export const pressLike = (items, id) => dispatch => {
    let liked = items.current_user.liked_designs;
    id = parseInt(id);
    if (!liked.includes(id)) {
        items.current_user.liked_designs.push(id);
        items.designs[id].likes++;
        // console.log(items.current_user.liked_designs);
    } else {
        items.current_user.liked_designs = items.current_user.liked_designs.filter((ele) => ele !== id);
        items.designs[id].likes--;
    }

    const newItems = Object.assign({}, items)

    dispatch({
        type: PRESS_LIKE,
        payload: newItems
    })
}