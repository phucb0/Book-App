const role = (state = [], action) => {
    switch (action.type) {

        case 'VALIDATE_LOGIN':
            console.log(action.payload.role)
            return action.payload.role

        case 'SET_STATE':
            return action.payload.role

        case 'LOG_OUT':
            return []

        default:
            return state
    }
}

export default role;