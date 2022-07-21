import React from 'react';

import classes from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div><img
                src="https://img.desktopwallpapers.ru/nature/pics/wide/1920x1200/e862cdd94c26e6601ea2380ef07e44f7.jpg"/>
            </div>
            <div><img
                src="https://avatars.mds.yandex.net/i?id=36fc156aac73eed5b13a0e4f881212ac-6191070-images-thumbs&n=13"/>
            </div>
            <div>avatar+description</div>
            <div>
                My post
                <div>
                    New post
                </div>
            </div>
            <div>
                <div className={classes.item}>
                    Post 1
                </div>
            </div>
            <div>
                <div className={classes.item}>
                    Post 1
                </div>
            </div>
        </div>
    )
}

export default Profile;