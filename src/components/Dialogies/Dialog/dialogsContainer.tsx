import s from './dialogies.module.css'
import {DialogItem} from "./dialogItem";
import {Message} from "../Message/message";
import {ChangeEvent, FC} from "react";
import {AppStateType, dialogiesDataType, messagesDataType, messagesPageType} from "../../../App";
import {MyPostsDataType} from "../../Profile/Profile";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/MessagesReducer";
import {Dialogs} from "./dialogs";

type Props = {
    store: AppStateType
    // dialogiesData: dialogiesDataType[]
    // messagesData: Array<messagesDataType>
    // newTextMessage: string
    // onChangeNewTextMessageHandler: (newText: string) => void
    // addNewTextMessage: () => void
}

export const DialogsContainer: FC<Props> = (props) => {
    const state = props.store.getState().dialogsPage

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    const onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <Dialogs
            sendMessage={onSendMessageClick}
            updateNewMessageBody={onNewMessageChange}
            dialogsPage={state}
        />
    )
}

