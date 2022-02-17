export default function loadReducer(
    state = {
        loading: false
    },
    action
) {
    switch (action.type) {
        case 'START_LOAD':
            return {
                ...state,
                loading: true
            };
        case 'END_LOAD':
            return {
                ...state,
                loading: false
            };
        default: return state;
    }
};