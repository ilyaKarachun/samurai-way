import React, {FC} from "react";
import {Post} from "./Post";
import {MyPostsDataType} from "./Profile";
import {addPostActionCreator, onChangePostActionCreator} from "../redux/UserProfileReducer";

type MyPostsType = {
    store: Array<MyPostsDataType>
    addPost: () => void
    newPostText: string
    updateNewPostChange: (newText: string) => void
    dispatch?: (action: { type: string, newText: string }) => void
    posts: string
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

export const MyPosts: FC<MyPostsType> = (props) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    const onAddPost = () => {
        props.addPost()
    }

    const onPostChange = () => {
        const text = newPostElement.current && newPostElement.current.value
        props.updateNewPostChange(text ? text : '')
    }

    return (
        <div>
            <div>
                My posts
                <div>
                    <textarea
                        ref={newPostElement}
                        onChange={onPostChange}
                        value={props.newPostText}
                    />
                    <button onClick={onAddPost}>Add post</button>
                    <button>Remove post</button>
                </div>
            </div>
            {props.store.map(el => <Post message={el.message} like={el.like}/>)}
            {/*<Post message={MyPostsData[0].message} like={MyPostsData[0].like}/>*/}
            {/*<Post message={MyPostsData[1].message} like={MyPostsData[1].like}/>*/}
        </div>
    )
}

