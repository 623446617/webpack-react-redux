
export default (state = {}, action) => {
    switch (action.type) {
        case 'todo':
            return {...state, data: action.data};
        default:
            return state;
    }
}