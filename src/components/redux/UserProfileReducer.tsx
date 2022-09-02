import React from 'react';
import {messagesDataType, MyPostsDataType} from "../../App";

const ADD_POST =  "ADD-POST"
const update_NewPostChange = "update - NewPostChange"
export const addPostActionCreator = () => ({type: ADD_POST })
export const onChangePostActionCreator = (text: string) => ({type: update_NewPostChange, newText: text })

const initialStateUserProfile =  {
    MyPostsData: [
        {id: 1, message: "Hello,bro", like: 15},
        {id: 2, message: "Hello, Man. How r u?", like: 10}
    ],
    newPostText: 'it-kamasutra.com privet world',
    dialogiesData: [
        {
            id: 1,
            author: "Ilya",
            img: "https://avatars.mds.yandex.net/i?id=36fc156aac73eed5b13a0e4f881212ac-6191070-images-thumbs&n=13"
        },
        {id: 2, author: "Sveta", img: "https://pbs.twimg.com/media/Ej5d7AoXYAAs_YY.jpg:large"},
        // {id: 3, author: "Dasha", img: ""},
        // {id: 4, author: "Marina", img: ""},
        // {id: 5, author: "Vitalik", img: ""},
        // {id: 6, author: "Bufik", img: ""}
    ],
    nameFriends: [
        {name: "Sveta"},
        {name: "Dasha"},
        {name: "Ilya"},
    ]
}

export const UserProfileReducer = (state: any = initialStateUserProfile, action: any) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: MyPostsDataType = {
                id: new Date().getTime(),
                message: state.newPostText,
                like: 10
            }
            state.MyPostsData.push(newPost)
            state.newPostText = ''
            break
        case update_NewPostChange:
            state.newPostText = action.newText
            break
        default:
            return state

    }
    // if (action.type === ADD_POST) {
    //     let newPost: MyPostsDataType = {
    //         id: new Date().getTime(),
    //         message: state.newPostText,
    //         like: 10
    //     }
    //     state.MyPostsData.push(newPost)
    //     state.newPostText = ''
    // } else if ( action.type === update_NewPostChange) {
    //     state.newPostText = action.newText
    // }
    // return state;
}
