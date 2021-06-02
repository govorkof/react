import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialog-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { WithAuthRedirect } from '../../hoc/withAuthRedirect'
import { Redirect } from 'react-router'
import { compose } from 'redux'

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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs);



