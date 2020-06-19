const token = (state = [], action) => {
    switch (action.type) {

        case 'VALIDATE_LOGIN':
            return action.payload.token

        case 'SET_TOKEN':
            return localStorage.token

        case 'LOG_OUT':
            localStorage.setItem("token", '')
            return []

        default:
            return state;
    }
}

export default token;