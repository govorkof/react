import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialog-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { WithAuthRedirect } from '../../hoc/withAuthRedirect'

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
    }
}

let AuthRedirectComponent = WithAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer