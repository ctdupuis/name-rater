export default function userReducer(
    state = {
        currentUser: false
    },
    action
) {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                currentUser: action.payload
            };
        case 'LOGOUT_USER':
            return {
                ...state,
                currentUser: false
            };
        default: return state;
    }
};