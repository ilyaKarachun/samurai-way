import React from "react";
import {Post} from "./Post";

export const MyPosts = () => {
    return (
        <div>
            <div>
                My post
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                    <button>Remove post</button>
                </div>
            </div>
            <Post message={"Hello,bro"} like={15}/>
            <Post message={"Hello, Man. How r u?"} like={10}/>
            </div>
    )
}

