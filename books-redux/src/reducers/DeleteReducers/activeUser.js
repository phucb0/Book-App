const activeUser = (state = [], action) => {
    switch (action.type) {

        case 'VALIDATE_LOGIN':
            return action.user.username

        case 'SET_STATE':
            return action.payload.username

        case 'LOG_OUT':
            return []

        default:
            return state
    }
}

export default activeUser;