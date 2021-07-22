const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    dialogs: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Roma" },
        { id: 3, name: "Anna" },
        { id: 4, name: "Igor" },
        { id: 5, name: "Alex" },
        { id: 6, name: "Maria" },
        { id: 7, name: "Dima" },
    ],
    messages: [        
        { id: 1, message: "Kakuna Rattata!" },
        { id: 2, message: "Hi" },
        { id: 3, message: "Jajaja" },
        { id: 4, message: "Kakuna Rattata! Kakuna Rattata!" },
        { id: 5, message: "ho-ho" },
        { id: 6, message: "Hehe" },
        { id: 7, message: "Lalka" },
    ],
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body
            }
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 8, message: body }]
            }
        }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (body) => 
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;