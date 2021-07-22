const FOLLOW = "ADD-FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
    users: [
        // { id: 1, photoUrl: '#' followed: false, fullName: "Egor", status: "Jarr", location: {city: Minsk, country: "Bel"},
        // { id: 2, photoUrl: '#' followed: true, fullName: "Vova", status: "HW", location: {city: Msk, country: "Ru"},
        // { id: 3, photoUrl: '#' followed: false, fullName: "Ira", status: "HarKun", location: {city: SPb, country: "Ru"},
        // { id: 4, photoUrl: '#' followed: true, fullName: "Tanya", status: "Status)", location: {city: Elgsk, country: "Ru"},
    ]
};

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: 
            return {
                ...state, 
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                return u;
                })
            }
        case UNFOLLOW: 
            return {
                ...state, 
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                return u;
            })
        }
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state;
    } 
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default userReducer;