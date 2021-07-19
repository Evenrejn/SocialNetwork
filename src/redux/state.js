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
            ]
        },
        friends: [
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = 'f';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => {
    return {
      type: "ADD-POST",
    };
  };
  
  export const updateNewPostTextActionCreator = (text) => {
    return {
      type: "UPDATE-NEW-POST-TEXT",
      newText: text,
    };
  };

export default store;
window.store = store;