import React from 'react';
import {messagesDataType, MyPostsDataType} from "../../App";

const update_NewMessageBody = "update - NewMessageBody"
const SEND_MESSAGE = "SEND_MESSAGE"
const onChangeNewTextMessageHandler = "onChangeNewTextMessageHandler"
const addNewTextMessage = "addNewTextMessage"

export const sendMessageCreator = () => ({type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body: string) => ({type: update_NewMessageBody, newText: body })

const initialStateMessagesReducer = {
    newTextMessage: 'Hello! Im new Message',
    messagesData: [
        {id: 1, message: "Hi, pidor"},
        {id: 2, message: "What r u doing here alone?"},
        {id: 3, message: "How r u?"},
        {id: 4, message: "What could I give u?"},
        {id: 5, message: "I need more active be"}
    ],
    newMessageBody: '',
}

export const MessagesReducer = (state: any = initialStateMessagesReducer, action: any) => {
    switch (action.type) {
        case onChangeNewTextMessageHandler:
            state.newTextMessage = action.newText
            break
        case addNewTextMessage:
            let newTextMessage: messagesDataType = {
                id: new Date().getTime(),
                message: state.newTextMessage,
            }
            state.messagesData.push(newTextMessage)
            state.newTextMessage = ''
            break
        case update_NewMessageBody:
            state.newMessageBody = action.newText;
            break
        case SEND_MESSAGE:
            const body = state.newMessageBody
            state.newMessageBody = ""
            state.messagesData.push({id: 6, message: body})
            break
        default:
            return state
    }
    // if (action.type === onChangeNewTextMessageHandler) {
    //     state.newTextMessage = action.newText
    // } else if (action.type === addNewTextMessage) {
    //     let newTextMessage: messagesDataType = {
    //         id: new Date().getTime(),
    //         message: state.newTextMessage,
    //     }
    //     state.messagesData.push(newTextMessage)
    //     state.newTextMessage = ''
    // } else if (action.type === update_NewMessageBody) {
    //     state.newMessageBody = action.newText;
    // } else if (action.type === SEND_MESSAGE) {
    //     const body = state.newMessageBody
    //     state.newMessageBody = ""
    //     state.messagesData.push({id: 6, message: body})
    // }
}

