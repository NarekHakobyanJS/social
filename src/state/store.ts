import { createStore, combineReducers} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";

const rootReducers = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogsReducer,
    usersPage : usersReducer
})

const store = createStore(rootReducers)

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;