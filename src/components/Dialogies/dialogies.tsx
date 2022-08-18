import s from './dialogies.module.css'
import {Dialog} from "./Dialog/dialog";
import {Message} from "./Message/message";
import {FC} from "react";
import {dialogiesDataType, messagesDataType} from "../../App";
import {addNewTextMessage, onChangeNewTextMessageHandler} from "../redux/state";

type Props = {
    dialogiesData: dialogiesDataType[]
    messagesData: Array<messagesDataType>
    newTextMessage: string
    onChangeNewTextMessageHandler: (newText: string) => void
    addNewTextMessage: () => void
}

export const Dialogies: FC<Props> = (props) => {
    return (
        <div className={s.dialogs__main}>
            {/*<HelloMessage message={"I'm new message"}/>*/}
            <div className={s.dialogs}>
                {props.dialogiesData.map(el => <Dialog id={el.id}
                                                       img={el.img}
                                                       author={el.author}/>)}
            </div>
            <div className={s.messages}>
                {props.messagesData.map(el => <Message
                    onChangeNewTextMessageHandler={props.onChangeNewTextMessageHandler}
                    newTextMessage={props.newTextMessage} message={el.message}
                    addNewTextMessage={props.addNewTextMessage}
                />)}
            </div>

        </div>
    )
}

