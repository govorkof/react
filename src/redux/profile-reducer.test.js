import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";


let state = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'It my first post', likesCount: 23 },
        { id: 3, message: 'It my two post', likesCount: 23 },
        { id: 4, message: 'It my three post', likesCount: 23 },
        { id: 5, message: 'It my four post', likesCount: 23 },
        { id: 6, message: 'It my five post', likesCount: 23 },
        { id: 7, message: 'It my six post', likesCount: 23 },
        { id: 8, message: 'It my seven post', likesCount: 23 },
    ],
};

test('new post should be added', () => {
    let action = addPostActionCreator('test action')

    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(9);
});

test('new post should be added', () => {
    let action = addPostActionCreator('test action')

    let newState = profileReducer(state, action);
    expect(newState.posts[8].message).toBe('test action');
});

test('after deleting length of messages should be decrement', () => {
    let action = deletePost(1)

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(7);
});

test('after deleting length shouldn`t be decrement if id is incorrect', () => {
    let action = deletePost(1000)

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(8);
});

