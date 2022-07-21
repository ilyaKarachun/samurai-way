import React from 'react';

import classes from "./Profile.module.css";
import {MyPosts} from "./MyPosts";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div><img
                alt="img"
                src="https://img.desktopwallpapers.ru/nature/pics/wide/1920x1200/e862cdd94c26e6601ea2380ef07e44f7.jpg"/>
            </div>
            <div><img
                alt="img"
                src="https://avatars.mds.yandex.net/i?id=36fc156aac73eed5b13a0e4f881212ac-6191070-images-thumbs&n=13"/>
            </div>
            <div>avatar+description</div>
            <MyPosts/>
        </div>
    )
}

export default Profile;