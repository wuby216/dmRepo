import { combineReducers } from 'redux';
import postReducer from './postReducer';
// import likeReducer from './likeReducer';

const rootReducers = combineReducers({
    // like: likeReducer,
    posts: postReducer
})

export default rootReducers;