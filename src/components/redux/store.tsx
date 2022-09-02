import {AppType, messagesDataType, MyPostsDataType} from "../../App";
import {MessagesReducer} from "./MessagesReducer";
import {UserProfileReducer} from "./UserProfileReducer";

// const ADD_POST =  "ADD-POST"
// const update_NewPostChange = "update - NewPostChange"
// const update_NewMessageBody = "update - NewMessageBody"
// const SEND_MESSAGE = "SEND_MESSAGE"

export type storeType = {
    _state: AppType,
    _callSubscriber: (store: storeType) => void
    // addPost: () => void
    // updateNewPostChange: (newText: string) => void
    // addNewTextMessage: () => void
    // onChangeNewTextMessageHandler: (newText: string) => void
    subscribe: (callback: (store: storeType) => void) => void
    getState: () => AppType
    dispatch: (action: {type: string, newText: string}) => void
}

const store: storeType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hello,bro", like: 15},
                {id: 2, message: "Hello, Man. How r u?", like: 10}
            ],
            newPostText: 'it-kamasutra.com privet world',
            dialogs: [
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
        },

        dialogsPage: {
            dialog: 'Hello! Im new Message',
            messages: [
                {id: 1, message: "Hi, pidor"},
                {id: 2, message: "What r u doing here alone?"},
                {id: 3, message: "How r u?"},
                {id: 4, message: "What could I give u?"},
                {id: 5, message: "I need more active be"}
            ],
            newMessageBody: '',
        }
    },
    _callSubscriber() {
        console.log("State is changed")
    },
    getState() {
        return this._state
    },
    // addPost() {
    //     let newPost: MyPostsDataType = {
    //         id: new Date().getTime(),
    //         message: this._state.UserProfile.newPostText,
    //         like: 10
    //     }
    //     this._state.UserProfile.MyPostsData.push(newPost)
    //     this._state.UserProfile.newPostText = ''
    //     this._callSubscriber(this.getState())
    // },
    // updateNewPostChange(newText: string) {
    //     this._state.UserProfile.newPostText = newText
    //     this._callSubscriber(this.getState())
    // },
    // addNewTextMessage() {
    //     let newTextMessage: messagesDataType = {
    //         id: new Date().getTime(),
    //         message: this._state.messagesPage.newTextMessage,
    //     }
    //     this._state.messagesPage.messagesData.push(newTextMessage)
    //     this._state.messagesPage.newTextMessage = ''
    //     this._callSubscriber(this.getState())
    // },
    // onChangeNewTextMessageHandler(newText: string) {
    //     this._state.messagesPage.newTextMessage = newText
    //     this._callSubscriber(this.getState())
    // },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) { //type(!) - по которому и будет выполняться условие
        this._state.dialogsPage = MessagesReducer(this._state.dialogsPage, action)
        this._state.profilePage = UserProfileReducer(this._state.profilePage, action)

        // if (action.type === ADD_POST) {
        //     let newPost: MyPostsDataType = {
        //         id: new Date().getTime(),
        //         message: this._state.UserProfile.newPostText,
        //         like: 10
        //     }
        //     this._state.UserProfile.MyPostsData.push(newPost)
        //     this._state.UserProfile.newPostText = ''
        //     this._callSubscriber(this)
        // } else if ( action.type === update_NewPostChange) {
        //     this._state.UserProfile.newPostText = action.newText
        //     this._callSubscriber(this)
        // } else if (action.type === "onChangeNewTextMessageHandler") {
        //     this._state.messagesPage.newTextMessage = action.newText
        //     this._callSubscriber(this)
        // } else if (action.type === "addNewTextMessage") {
        //     let newTextMessage: messagesDataType = {
        //         id: new Date().getTime(),
        //         message: this._state.messagesPage.newTextMessage,
        //     }
        //     this._state.messagesPage.messagesData.push(newTextMessage)
        //     this._state.messagesPage.newTextMessage = ''
        //     this._callSubscriber(this)
        // } else if (action.type === update_NewMessageBody) {
        //     this._state.messagesPage.newMessageBody = action.newText;
        //     this._callSubscriber(this)
        // } else if (action.type === SEND_MESSAGE) {
        //     const body = this._state.messagesPage.newMessageBody
        //     this._state.messagesPage.newMessageBody = ""
        //     this._state.messagesPage.messagesData.push({id: 6, message: body})
        //     this._callSubscriber(this)
        // }
    }
}

// export const addPostActionCreator = () => ({type: ADD_POST })
// export const sendMessageActionCreator = () => ({type: SEND_MESSAGE })
//
//
// export const onChangePostActionCreator = (text: string) => ({type: update_NewPostChange, newText: text })
// export const updateNewBodyMessageActionCreator = (body: string) => ({type: update_NewMessageBody, newText: body })


// let rerenderEntireTree = () => {
//     console.log("State is changed")
// }

// export const state: AppType = {
//     UserProfile:{
//         MyPostsData: [
//             { id: 1, message: "Hello,bro", like: 15},
//             { id: 2, message: "Hello, Man. How r u?", like: 10}
//         ],
//         newPostText: 'it-kamasutra.com privet world',
//         dialogiesData: [
//             {id: 1, author: "Ilya", img:"https://avatars.mds.yandex.net/i?id=36fc156aac73eed5b13a0e4f881212ac-6191070-images-thumbs&n=13"},
//             {id: 2, author: "Sveta", img: "https://pbs.twimg.com/media/Ej5d7AoXYAAs_YY.jpg:large"},
//             // {id: 3, author: "Dasha", img: ""},
//             // {id: 4, author: "Marina", img: ""},
//             // {id: 5, author: "Vitalik", img: ""},
//             // {id: 6, author: "Bufik", img: ""}
//         ],
//         nameFriends: [
//             {name: "Sveta"},
//             {name: "Dasha"},
//             {name: "Ilya"},
//         ]
//     },
//
//     messagesPage: {
//         newTextMessage: 'Hello! Im new Message',
//         messagesData: [
//             {id: 1, message: "Hi, pidor"},
//             {id: 2, message: "What r u doing here alone?"},
//             {id: 3, message: "How r u?"},
//             {id: 4, message: "What could I give u?"},
//             {id: 5, message: "I need more active be"}
//         ],
//     }
// }

// export const addPost = () => {
//     let newPost: MyPostsDataType = {
//         id: new Date().getTime(),
//         message: state.UserProfile.newPostText,
//         like: 10
//     }
//     state.UserProfile.MyPostsData.push(newPost)
//     state.UserProfile.newPostText = ''
//     rerenderEntireTree()
// }

// export const updateNewPostChange = (newText: string) => {
//     state.UserProfile.newPostText = newText
//     rerenderEntireTree()
// }

// export const addNewTextMessage = () => {
//     let newTextMessage: messagesDataType = {
//         id: new Date().getTime(),
//         message: state.messagesPage.newTextMessage,
//     }
//     state.messagesPage.messagesData.push(newTextMessage)
//     state.messagesPage.newTextMessage = ''
//     rerenderEntireTree()
// }

// export const onChangeNewTextMessageHandler = (newText: string) => {
//     state.messagesPage.newTextMessage = newText
//     rerenderEntireTree()
// }

// export const subscribe = (observer: () => void) =>{
//     rerenderEntireTree = observer
// }
export default store
// window.state = state