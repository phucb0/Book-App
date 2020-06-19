const isAdding = (state = false, action) => {
    switch (action.type) {
        case 'IS_ADDING':
            return action.bool

        default:
            return state;
    }
}

export default isAdding;