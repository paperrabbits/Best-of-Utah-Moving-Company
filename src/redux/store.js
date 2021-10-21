import {combineReducers, createStore} from "redux";
// import {sessionReducer} from 'redux-react-session';
import userReducer from './dux/userReducer';


const rootReducer = combineReducers({
    // session: sessionReducer,
    user: userReducer
});


export default createStore(
    rootReducer
    // applyMiddleware(thunkMiddleware)
);