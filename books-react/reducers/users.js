// const initialState = [{ id: '1234567890', title: 'Untamed', author: 'Glennon Doyle', quantity: 20 },
// { id: '22345678910', title: 'Becoming', author: 'Michelle Obama', quantity: 30 },
// { id: '3456789101', title: 'Normal People: A Novel', author: 'Sally Rooney', quantity: 10 },
// { id: '45678910111', title: 'Midnight', author: 'Stephenie Meyer', quantity: 5 },
// { id: '56789012345', title: 'Oh, the Places You will Go!', author: 'Dr.Seuss', quantity: 0 }]

import AsyncStorage from '@react-native-community/async-storage';

const initialState = {
    users: [],
    activeUser: '',
    token: '',
    role: '',
    isRegisterSuccess: false,
    isLogin: false
}

const users = (state = initialState, action) => {
    switch (action.type) {

        case 'FETCH_USERS':
            return Object.assign({}, state, {
                users: [...action.payload]
            })

        case 'FETCH_BOOK':
            return Object.assign({}, state, {
                users: [...action.payload.users]
            })

        case 'VALIDATE_LOGIN':
            alert(action.payload.message)
            return Object.assign({}, state, {
                activeUser: action.payload.username,
                token: action.payload.token,
                role: action.payload.role,
                isLogin: true
            })

        case 'VALIDATE_LOGIN_ERROR':
            alert(action.payload.errorMessage)
            return state

        case 'SET_STATE':
            return Object.assign({}, state, {
                activeUser: action.payload.username,
                role: action.payload.role,
                isLogin: true
            })

        case 'LOG_OUT':
            return Object.assign({}, state, {
                users: [],
                activeUser: '',
                token: '',
                role: '',
                isRegisterSuccess: false,
                isLogin: false
            })

        case 'SET_TOKEN':
            return Object.assign({}, state, {
                token: action.payload
            })

        // Register successful
        case 'POST_USER':
            console.log('called')
            alert(action.payload.message)
            return Object.assign({}, state, {
                isRegisterSuccess: true
            })

        // Register unsuccessful
        case 'POST_USER_ERROR':
            console.log('called')
            alert(action.payload.errorMessage)
            return Object.assign({}, state, {
                isRegisterSuccess: false
            })

        // Redirect to login
        case 'SET_REGISTER_SUCCESS':
            return Object.assign({}, state, {
                isRegisterSuccess: false
            })

        case 'TOGGLE_LOGIN':
            return Object.assign({}, state, {
                isLogin: action.bool
            })

        case 'VALIDATE_LOGIN_ERROR':
            // alert(action.payload.errorMessage)
            return Object.assign({}, state, {
                isLogin: false
            })

        default:
            return state
    }
}

export default users