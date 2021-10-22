const initialState = {
    user: {}
}

const SET_USER = 'SET_USER';
export function setUser(obj) {
    return {
        type: setUser,
        payload: obj
    }
}

export default function userReducer(state = initialState, action) {
    const {type, payload} = action;

    switch(type) {
        case SET_USER:
            return {...state, user: payload};
        default: return state;
    }
}