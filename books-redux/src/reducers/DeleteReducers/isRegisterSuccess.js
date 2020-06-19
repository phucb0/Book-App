const isRegisterSuccess = (state = false, action) => {
    switch (action.type) {

        case 'POST_USER':
            console.log('called')
            alert(action.payload.message)
            return true

        case 'POST_USER_ERROR':
            console.log('called')
            alert(action.error.errorMessage)
            return false

        case 'SET_REGISTER_SUCCESS':
            return false

        default:
            return state
    }
}

export default isRegisterSuccess;