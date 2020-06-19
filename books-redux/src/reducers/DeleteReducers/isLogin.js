const isLogin = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_LOGIN':
            return action.bool

        case 'VALIDATE_LOGIN':
            alert(action.payload.message)
            return true

        case 'SET_STATE':
            return true

        case 'VALIDATE_LOGIN_ERROR':
            alert(action.payload.errorMessage)
            return false

        default:
            return state;
    }
}

export default isLogin;