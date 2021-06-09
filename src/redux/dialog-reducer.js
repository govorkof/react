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
  ]
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 6, message: body }]
      };
    default:
      return state;
  }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogReducer;