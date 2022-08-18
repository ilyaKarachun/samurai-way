import React, {FC} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import {Dialogies} from "./components/Dialogies/dialogies";
import s from "./components/Dialogies/dialogies.module.css";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Friends, FriendsType} from "./components/Friends/Friends";
import {addNewTextMessage, addPost, onChangeNewTextMessageHandler, updateNewPostChange} from "./components/redux/state";

export type messagesDataType = {
    id: number,
    message: string

}

type messagesPageType = {
    messagesData: Array<messagesDataType>
    newTextMessage: string
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
    MyPostsData: Array<MyPostsDataType>
    newPostText: string
    dialogiesData: Array<dialogiesDataType>
    nameFriends: Array<FriendsType>
}

export type AppType = {
    UserProfile: UserProfileType
    messagesPage: messagesPageType
}

export type AppStateType = {
    AppState: AppType
    updateNewPostChange: (newText: string) => void
    onChangeNewTextMessageHandler: (newText: string) => void
    addNewTextMessage: () => void
}

// addPost("How much money you need")

const App: FC<AppStateType> = (props) => {

    return (

        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <div className={s.item}>
                <Route path={'/profile'} render={() => <Profile
                    newPostText={props.AppState.UserProfile.newPostText}
                    state={props.AppState.UserProfile.MyPostsData}
                    addPost={addPost}
                    updateNewPostChange={updateNewPostChange}
                />}/>
                <Route path='/dialogies'
                       render={() => <Dialogies dialogiesData={props.AppState.UserProfile.dialogiesData}
                                                messagesData={props.AppState.messagesPage.messagesData}
                                                newTextMessage={props.AppState.messagesPage.newTextMessage}
                                                onChangeNewTextMessageHandler={props.onChangeNewTextMessageHandler}
                                                addNewTextMessage={props.addNewTextMessage}
                       />}/>
                <Route path='/news' render={() => < News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
            <Friends state={props.AppState.UserProfile.nameFriends}/>
        </div>

    );
}


export default App;
