const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
let initialState = {
  messagesData: [
    { id: 1, message: 'Hello! message 1' },
    { id: 2, message: 'YoYoYo! message 2' },
    { id: 3, message: 'Ok! My name.... message 3' },
    { id: 4, message: 'Youtube the best! message 4' },
    { id: 5, message: 'Viktory! message 5' },
    { id: 6, message: 'Fuck school! message 6' },
  ],
  dialogsData: [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Vika' },
    { id: 6, name: 'Valera' },
  ],
  newMessageBody: "",
};

const dialogReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      };
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messagesData: [...state.messagesData, { id: 6, message: body }]
      };
    default:
      return state;
  }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (text) =>
  ({ type: UPDATE_NEW_MESSAGE_BODY, body: text });

export default dialogReducer;