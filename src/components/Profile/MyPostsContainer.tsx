import React, {FC} from "react";
import {Post} from "./Post";
import {MyPostsDataType} from "./Profile";
import {addPostActionCreator, onChangePostActionCreator} from "../redux/UserProfileReducer";
import {MyPosts} from "./MyPosts";

type MyPostsContainerType = {
    // store: Array<MyPostsDataType>
    store: MyPostsDataType[]
    // addPost: () => void
    // newPostText: string
    // updateNewPostChange: (newText: string) => void
}

// let addPostActionCreator = () => {
//     return {
//         type: "ADD-POST"
//     }
// }
//
// let onChangePostActionCreator = (text: string) => {
//     return {type: "update - NewPostChange", newText: text }
// }

export const MyPostsContainer: FC<MyPostsContainerType> = (props) => {
    let state = props.store.getState();

    const addPostHandler = () => {
        props.store.dispatch(addPostActionCreator())
    }

    const onPostChange = (text: string) => {
        const action = onChangePostActionCreator(text)
        props.store.dispatch(action)
    }

    return (
        <MyPosts
            addPost={addPostHandler}
            updateNewPostChange={onPostChange}
            store={props.store}
            posts={state.profilePage.post}
            newPostText={state.profilePage.newPostText}
        />
    )
}

