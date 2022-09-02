import React, {FC} from 'react';

import classes from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo";
import {MyPostsContainer} from "./MyPostsContainer";


export type ProfileType = {
    store: Array<MyPostsDataType>
    // addPost: () => void
    // newPostText: string
    // updateNewPostChange: (newText: string) => void
    dispatch: (action: { type: string, newText: string }) => void
}

export type MyPostsDataType = {
    id: number
    message: string
    like: number
}
const Profile: FC<ProfileType> = (props) => {

    return (
        <div className={classes.content}>
            <ProfileInfo descriprion={'avatar+description'}
                         img={"https://avatars.mds.yandex.net/i?id=36fc156aac73eed5b13a0e4f881212ac-6191070-images-thumbs&n=13"}/>
            <MyPostsContainer
                store={props.store}
                // posts={props.profilePage.posts}
                // newPostsText={props.profilePage.newPostText}
                // dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile;