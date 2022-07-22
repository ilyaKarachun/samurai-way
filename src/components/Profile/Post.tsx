import classes from "./Posts.module.css";
import React, {FC} from "react";

type PostType = {
    message: string,
    like: number
}

export const Post: FC<PostType> = (props) => {
    return(
    <div>
    <div className={
    classes.item
}
>
<img className={classes.item__img} alt="picture"
     src="https://avatars.mds.yandex.net/i?id=0478e934d76ee35e4366cea2ebdbeee8-5235290-images-thumbs&n=13"/>
{
    props.message
}
<div>{props.like} like</div>
</div>
</div>
)
}