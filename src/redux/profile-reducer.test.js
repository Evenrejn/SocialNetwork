import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        { id: 1, message: "How are you?", likesCount: 12 },
        { id: 2, message: "Hi", likesCount: 11 },
        { id: 3, message: "HW", likesCount: 5 },
        { id: 4, message: "Jajaja", likesCount: 2 },
    ]
};

it('length posts should be incremened', () => {
    let action = addPostActionCreator("blabla");
    let state = {
        posts: [
            { id: 1, message: "How are you?", likesCount: 12 },
            { id: 2, message: "Hi", likesCount: 11 },
            { id: 3, message: "HW", likesCount: 5 },
            { id: 4, message: "Jajaja", likesCount: 2 },
        ]
    };

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5);
});

it('new message must be right', () => {
    let action = addPostActionCreator("blabla");
    let state = {
        posts: [
            { id: 1, message: "How are you?", likesCount: 12 },
            { id: 2, message: "Hi", likesCount: 11 },
            { id: 3, message: "HW", likesCount: 5 },
            { id: 4, message: "Jajaja", likesCount: 2 },
        ]
    };

    let newState = profileReducer(state, action);

    expect(newState.posts[4].message).toBe("blabla");
});

it('likes count must be equal by zero', () => {
    let action = addPostActionCreator("blabla");
    let state = {
        posts: [
            { id: 1, message: "How are you?", likesCount: 12 },
            { id: 2, message: "Hi", likesCount: 11 },
            { id: 3, message: "HW", likesCount: 5 },
            { id: 4, message: "Jajaja", likesCount: 2 },
        ]
    };

    let newState = profileReducer(state, action);

    expect(newState.posts[4].likesCount).toBe(0);
});

it('messages length after deleting should be decremented', () => {
    let action = deletePost(1);
    let state = {
        posts: [
            { id: 1, message: "How are you?", likesCount: 12 },
            { id: 2, message: "Hi", likesCount: 11 },
            { id: 3, message: "HW", likesCount: 5 },
            { id: 4, message: "Jajaja", likesCount: 2 },
        ]
    };

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});

it('after deleting length shouldnt be decrement if id not correct', () => {
    let action = deletePost(100);
    let state = {
        posts: [
            { id: 1, message: "How are you?", likesCount: 12 },
            { id: 2, message: "Hi", likesCount: 11 },
            { id: 3, message: "HW", likesCount: 5 },
            { id: 4, message: "Jajaja", likesCount: 2 },
        ]
    };

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);
});