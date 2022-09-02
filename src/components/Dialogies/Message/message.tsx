import React, {createRef, FC} from "react";
import s from "../Dialog/dialogies.module.css";

// export const Message: FC<MessageType> = (props) => {
//     return (
//         <div className={s.message}>{props.message}</div>
//
//     )
// }
export type MessageType = {
    message: string
    newTextMessage: string
    // onChangeNewTextMessageHandler: (postMessageRef: string) => void
    // addNewTextMessage: () => void
}


export const Message: FC<MessageType> = (props) => {
    let postMessageRef = React.createRef<HTMLTextAreaElement>()

    const addPostHandler = () => {
        // props.addNewTextMessage()
    }

    const onChangeNewTextMessageHandler = () => {
        let newText = postMessageRef.current?.value
        // props.onChangeNewTextMessageHandler(newText ? newText : '')

    }
    return (
        <div className={s.message}>
            {props.message}
            <textarea ref={postMessageRef} onChange={onChangeNewTextMessageHandler} value={props.newTextMessage}/>
            <button onClick={addPostHandler}>add Post</button>
        </div>

    )
}
