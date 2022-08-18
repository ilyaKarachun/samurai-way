import {AppType, messagesDataType, MyPostsDataType} from "../../App";
import {FC} from "react";

let rerenderEntireTree = (state:any) => {
    console.log("State is changed")
}

export const state: AppType = {
    UserProfile:{
        MyPostsData: [
            { id: 1, message: "Hello,bro", like: 15},
            { id: 2, message: "Hello, Man. How r u?", like: 10}
        ],
        newPostText: 'it-kamasutra.com privet world',
        dialogiesData: [
            {id: 1, author: "Ilya", img:"https://avatars.mds.yandex.net/i?id=36fc156aac73eed5b13a0e4f881212ac-6191070-images-thumbs&n=13"},
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
    },

    messagesPage: {
        newTextMessage: 'Hello! Im new Message',
        messagesData: [
            {id: 1, message: "Hi, pidor"},
            {id: 2, message: "What r u doing here alone?"},
            {id: 3, message: "How r u?"},
            {id: 4, message: "What could I give u?"},
            {id: 5, message: "I need more active be"}
        ],
    }
}

export const addPost = () => {
    let newPost: MyPostsDataType = {
        id: new Date().getTime(),
        message: state.UserProfile.newPostText,
        like: 10
    }
    state.UserProfile.MyPostsData.push(newPost)
    state.UserProfile.newPostText = ''
    rerenderEntireTree(state)
}

export const updateNewPostChange = (newText: string) => {
    state.UserProfile.newPostText = newText
    rerenderEntireTree(state)
}

export const addNewTextMessage = () => {
    let newTextMessage: messagesDataType = {
        id: new Date().getTime(),
        message: state.messagesPage.newTextMessage,
    }
    state.messagesPage.messagesData.push(newTextMessage)
    state.messagesPage.newTextMessage = ''
    rerenderEntireTree(state)
}

export const onChangeNewTextMessageHandler = (newText: string) => {
    state.messagesPage.newTextMessage = newText
    rerenderEntireTree(state)
}

export const subscribe = (observer: any) =>{
    rerenderEntireTree = observer
}