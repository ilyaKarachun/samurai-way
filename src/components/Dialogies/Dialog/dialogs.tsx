import s from './dialogies.module.css'
import {DialogItem} from "./dialogItem";
import {Message} from "../Message/message";
import {ChangeEvent, FC} from "react";
import {AppStateType, dialogiesDataType, messagesDataType, messagesPageType} from "../../../App";
import {MyPostsDataType} from "../../Profile/Profile";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/MessagesReducer";

type Props = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
    dialogsPage: any
    // dialogiesData: dialogiesDataType[]
    // messagesData: Array<messagesDataType>
    // newTextMessage: string
    // onChangeNewTextMessageHandler: (newText: string) => void
    // addNewTextMessage: () => void
}

export const Dialogs: FC<Props> = (props) => {
    const state = props.dialogsPage

    const dialogsMap = state.dialogs.map(el => <DialogItem id={el.id}
                                                           img={el.img}
                                                           author={el.author}/>)
    const messageMap = state.messages.map(el => <Message
        // onChangeNewTextMessageHandler={props.onChangeNewTextMessageHandler}
        // newTextMessage={props.store.store.messagesPage.newTextMessage}
        message={el.message}
        // addNewTextMessage={props.addNewTextMessage}
    />)
    const newMessageBody = state.newMessageBody

    const onSendMessageClick = () => {
        props.sendMessage()

    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.currentTarget.value
        props.updateNewMessageBody(body)
    }
    return (
        <div className={s.dialogs__main}>
            <div className={s.dialogs}>
                {dialogsMap}
            </div>
            <div className={s.messages}>
                <div>{messageMap}</div>
                <div>
                    <div><textarea
                        onChange={onNewMessageChange}
                        value={newMessageBody}
                        placeholder={"enter your message"}
                    ></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

