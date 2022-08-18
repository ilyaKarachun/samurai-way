import React, {FC} from "react";
import {Post} from "./Post";
import {MyPostsDataType} from "./Profile";
import {updateNewPostChange} from "../redux/state";

type MyPostsType = {
    steak: Array<MyPostsDataType>
    addPost: () => void
    newPostText: string
    updateNewPostChange: (newText: string) => void
}

export const MyPosts: FC<MyPostsType> = (props) => {
    let newPost = React.createRef<HTMLTextAreaElement>();
    const addPostHandler = () => {
        // let text = newPost.current?.value
        // if (text) {
            props.addPost()
        // }
        // if (newPost.current?.value) {
        //     newPost.current.value = ''
        // }
        // props.updateNewPostChange('')
    }

    const onChangePostHandler = () => {
        let text = newPost.current?.value
        props.updateNewPostChange(text ? text : '')
    }
    return (
        <div>
            <div>
                My post
                <div>
                    <textarea ref={newPost} onChange={onChangePostHandler} value={props.newPostText}/>
                    <button onClick={addPostHandler}>Add post</button>
                    <button>Remove post</button>
                </div>
            </div>
            {props.steak.map(el => <Post message={el.message} like={el.like}/>)}
            {/*<Post message={MyPostsData[0].message} like={MyPostsData[0].like}/>*/}
            {/*<Post message={MyPostsData[1].message} like={MyPostsData[1].like}/>*/}
        </div>
    )
}

