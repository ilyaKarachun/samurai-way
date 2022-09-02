import React, {FC} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogies/Dialog/dialogs";
import s from "./components/Dialogies/Dialog/dialogies.module.css";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Friends, FriendsType} from "./components/Friends/Friends";
import {DialogsContainer} from "./components/Dialogies/Dialog/dialogsContainer";

export type messagesDataType = {
    id: number,
    message: string

}

export type messagesPageType = {
    messages: Array<messagesDataType>
    dialog: string
    newMessageBody: string
}

export type dialogiesDataType = {
    id: number
    author: string
    img: string
}

export type MyPostsDataType = {
    id: number
    message: string
    like: number
}

type UserProfileType = {
    posts: Array<MyPostsDataType>
    newPostText: string
    dialogs: Array<dialogiesDataType>
    nameFriends: Array<FriendsType>
}

export type AppType = {
    profilePage: UserProfileType
    dialogsPage: messagesPageType
}

export type AppStateType = {
    store: AppType
    // updateNewPostChange: (newText: string) => void
    // onChangeNewTextMessageHandler: (newText: string) => void
    // addNewTextMessage: () => void
    // addPost: () => void
    dispatch: (action: { type: string, [key: string]: string }) => void
}


const App: FC<AppStateType> = (props) => {

    return (

        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <div className={s.item}>
                <Route path={'/profile'} render={() => <Profile
                    // newPostText={props.AppState.UserProfile.newPostText}
                    // state={props.AppState.UserProfile.MyPostsData}
                    store={props.store}
                    // dispatch={props.dispatch}
                />}/>
                <Route path='/dialogies'
                       render={() => <DialogsContainer
                           store={props.store}
                           // dialogiesData={props.AppState.UserProfile.dialogiesData}
                           // messagesData={props.AppState.messagesPage.messagesData}
                           // newTextMessage={props.AppState.messagesPage.newTextMessage}
                           // onChangeNewTextMessageHandler={props.onChangeNewTextMessageHandler}
                           // addNewTextMessage={props.addNewTextMessage}
                       />}/>
                <Route path='/news' render={() => < News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
            <Friends state={props.store.profilePage.nameFriends}/>
        </div>

    );
}


export default App;
