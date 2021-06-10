import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Field, reduxForm } from 'redux-form'
import { Redirect } from 'react-router'
import AddMessageForm from './AddMessageForm/AddMessageForm'


const Dialogs = (props) => {


    let state = props.dialogsPage;

    // Создаем массив dialogsElements из dialogsData преобразовывая данные
    let dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />)
    // Аналогично
    let messagesElements = state.messagesData.map(m => <Message message={m.message} ket={m.id} />)
    let newMessageBody = state.newMessageBody;

    let AddNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    // if (!props.isAuts) return <Redirect to={'/login'} />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageForm onSubmit={AddNewMessage} />
        </div>
    )
}

// const AddMessageForm = (props) => {
//     return (
//         <form onSubmit={props.handleSubmit} >
//             <div>
//                 <Field component={'textarea'} name={'newMessageBody'} placeholder={'Enter your message'} />
//             </div>
//             <div><button>Send</button></div>
//         </form>
//     )
// }
// 
// const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

export default Dialogs