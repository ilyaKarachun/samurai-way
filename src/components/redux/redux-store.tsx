import {combineReducers, createStore} from "redux";
import {MessagesReducer} from "./MessagesReducer";
import {UserProfileReducer} from "./UserProfileReducer";

const reducers = combineReducers({
    messagesPage: MessagesReducer,
    UserProfile: UserProfileReducer
})

let store = createStore(reducers)

export default store;