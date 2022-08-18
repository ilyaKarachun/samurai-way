import React, {FC} from 'react';

import classes from "./Profile.module.css";
import {MyPosts} from "./MyPosts";
import {ProfileInfo} from "./ProfileInfo";
import {updateNewPostChange} from "../redux/state";

export type ProfileType = {
    state:Array<MyPostsDataType>
    addPost: () => void
    newPostText: string
    updateNewPostChange: (newText: string) => void
}

export type MyPostsDataType = {
    id:number
    message: string
    like: number
}
const Profile:FC<ProfileType> = (props) => {

    return (
        <div className={classes.content}>
            <ProfileInfo descriprion={'avatar+description'}
                         img={"https://avatars.mds.yandex.net/i?id=36fc156aac73eed5b13a0e4f881212ac-6191070-images-thumbs&n=13"}/>
            <MyPosts newPostText={props.newPostText}
                     steak={props.state}
                     addPost={props.addPost}
                     updateNewPostChange={props.updateNewPostChange}
            />
        </div>
    )
}

export default Profile;