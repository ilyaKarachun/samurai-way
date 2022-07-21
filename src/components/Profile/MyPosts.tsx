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
            <Post/>
            <Post/>
            </div>
    )
}

