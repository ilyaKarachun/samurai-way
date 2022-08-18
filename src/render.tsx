import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App, {AppStateType, AppType} from "./App";
// import {state} from "./components/redux/state";
import React, {FC} from "react";
import {addNewTextMessage, onChangeNewTextMessageHandler, updateNewPostChange} from "./components/redux/state";

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