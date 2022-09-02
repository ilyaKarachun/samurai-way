import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./components/redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {storeType} from "./components/redux/store";
import {StoreContext} from "./StoreContext";


const rerenderEntireTree = (store: storeType) => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App
                    store={store.getState()}
                    dispatch={store.dispatch.bind(store)}

                />
            </StoreContext.Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())

store.subscribe(() =>{
    let state = store.getState()
    rerenderEntireTree(state)
}

