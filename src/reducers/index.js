const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_POSITION':
            return {
                ...state,
                position: action.payload
            }
        break;
        case 'SET_DESTINATION':
            return {
                ...state,
                destination: action.payload
            }
        break;
        default:
            return state;
        break;
    }
}

export default reducer;