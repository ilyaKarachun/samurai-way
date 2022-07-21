import classes from "./Posts.module.css";
import React from "react";

export const Post = () => {
    return (
        <div>
            <div className={classes.item}>
                <img className={classes.item__img} alt="picture"
                     src="https://avatars.mds.yandex.net/i?id=0478e934d76ee35e4366cea2ebdbeee8-5235290-images-thumbs&n=13"/>
                Post 1
                <div>like</div>
            </div>
        </div>
    )
}