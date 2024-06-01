import React, {ChangeEvent} from 'react'
import './Dialogs.css'
import DialogsItem from './DialogsItem/DialogsItem'
import Message from './Message/Message'
import { DialogsPageStateType } from '../../state/state';

type DialogsPropsType = {
    dialogsPage : DialogsPageStateType
    updateNewMessageBody : (body : string) => void
    sendMessage : () => void
    
}

const Dialogs = (props: DialogsPropsType ) => {
    const dialogs = props.dialogsPage.dialogs;
    const messages = props.dialogsPage.messages;
    const newMessage = props.dialogsPage.newMessage
    
    const onSendMessageClick = () => {
        props.sendMessage()
    }

    const onNewMessageChange = (e : ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }
    return (
        <div className='dialogs'>
            <div>
                {
                    dialogs.map((dialog) => {
                        return <DialogsItem key={dialog.id} dialog={dialog}/>
                    })
                }
                
            </div>
            <div>
                <div>
                    <textarea value={newMessage} onChange={onNewMessageChange}/>
                    <button onClick={onSendMessageClick}>send</button>
                </div>
                {
                    messages.map((message) => {
                        return <Message key={message.id} message={message} />
                    })
                }
               
            </div>
        </div>
    )
}

export default Dialogs