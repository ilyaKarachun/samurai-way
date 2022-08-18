import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {AppType} from './App';
import {
    addNewTextMessage,
    onChangeNewTextMessageHandler,
    state,
    subscribe,
    updateNewPostChange
} from "./components/redux/state";
import {BrowserRouter} from "react-router-dom";



 const rerenderEntireTree = (state: AppType ) => {
    ReactDOM.render(
        <BrowserRouter>
            <App AppState={state}
                 updateNewPostChange={updateNewPostChange}
                 onChangeNewTextMessageHandler={onChangeNewTextMessageHandler}
                 addNewTextMessage={addNewTextMessage}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(state)

subscribe(rerenderEntireTree)