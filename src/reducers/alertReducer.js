export default function alertReducer(
    state = {
        alert: false
    },
    action
) {
    switch (action.type) {
        case 'INIT_ALERT':
            return {
                ...state,
                alert: action.payload
            };
        case 'DEL_ALERT':
            return {
                ...state,
                alert: false
            };
        default: return state;
    }
};