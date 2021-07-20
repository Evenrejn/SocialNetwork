import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "How are you?", likesCount: 12 },
                { id: 2, message: "Hi", likesCount: 11 },
                { id: 3, message: "HW", likesCount: 5 },
                { id: 4, message: "Jajaja", likesCount: 2 },
            ],
            newPostText: "empty"
        },
        dialogsPage: {
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
        },
        sidebar: [
            { id: 1, name: "Dimych" },
            { id: 2, name: "Roma" },
            { id: 3, name: "Igor" },
        ]
    },
    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
        
    }
}

export default store;
window.store = store;