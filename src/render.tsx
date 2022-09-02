import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App, { AppType} from "./App";
import React, {FC} from "react";
import store from "./components/redux/store";

//  export const rerenderEntireTree = (state: AppType ) => {
//     ReactDOM.render(
//         <BrowserRouter>
//             <App AppState={store.getState()}
//                  updateNewPostChange={store.updateNewPostChange.bind(store) }
//                  onChangeNewTextMessageHandler={store.onChangeNewTextMessageHandler.bind(store) }
//                  addNewTextMessage={store.addNewTextMessage.bind(store) }
//                  addPost={store.addPost.bind(store)}
//             />
//         </BrowserRouter>,
//         document.getElementById('root')
//     );
// }