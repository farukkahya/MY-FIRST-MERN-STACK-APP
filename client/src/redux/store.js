import { applyMiddleware, combineReducers, createStore } from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"
import authReducer from "./reducers/auth"
import modalReducer from "./reducers/modal"
import postReducer from "./reducers/post"


const initialState = {

}


const reducers = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  posts: postReducer
})

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;