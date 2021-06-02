import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Redirect } from 'react-router'

const Dialogs = (props) => {

    let state = props.dialogsPage;

    // Создаем массив dialogsElements из dialogsData преобразовывая данные
    let dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />)
    // Аналогично
    let messagesElements = state.messagesData.map(m => <Message message={m.message} ket={m.id} />)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    if (props.isAuth) return <Redirect to='/login' />; // та же строчка что и ниже, только короткой записью
    // if (props.isAuth === false) return <Redirect to='/login' />; 

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea
                        placeholder="Enter you message"
                        value={newMessageBody}
                        onChange={onNewMessageChange}></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>

        </div>

    )
}

export default Dialogs