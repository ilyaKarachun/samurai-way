import React, {FC} from 'react';
import './App.css';
import {Technologies} from "./Technologies";
import {Header} from "./Header";
import {BrowserRouter, Route} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Technologies/>
                <Route path={"/hello"} render={() => <HelloMessage message={"Hello friends"}/>}/>
                <Route path={"/bye"} render={() => <ByeMessage message={"Bye samurai"}/>}/>
            </div>
        </BrowserRouter>
    );
}

type HelloMessageType = {
    message: string
}

const HelloMessage: FC<HelloMessageType> = (props) => {
    return <h1>{props.message}</h1>
}

const ByeMessage: FC<HelloMessageType> = (props) => {
    return <h1>{props.message}</h1>
}

export default App;
