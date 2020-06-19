import AsyncStorage from '@react-native-community/async-storage';
const api = require('./apis.js')

export const validateLogin = user => {
    console.log('val-log')
    return async dispatch => {
        try {
            const success = await api.authentication(user);
            await AsyncStorage.setItem('token', success.data.token)
            await api.authorizeApi(success.data.token)
            dispatch({ type: 'VALIDATE_LOGIN', payload: success.data });
        } catch (error) {
            dispatch({ type: 'VALIDATE_LOGIN_ERROR', payload: error.response.data });
        }
    }
};

// export const checkAuth = () => {
//     return async dispatch => {
//         try {
//             const token = await AsyncStorage.getItem('token')
//             if(token){
//                await api.authorizeApi(token)
//                dispatch({type: 'CHECK_AUTH'})
//             }
//         } catch (error) {

//         }
//     }
// }

export const getBookList = () => {
    return async dispatch => {
        try {
            const success = await api.getBooks();
            dispatch({ type: 'FETCH_BOOK', payload: success.data });
        } catch (error) {
            dispatch({ type: 'FETCH_BOOK_ERROR', error });
        }
    }
};

export const addBook = book => {
    // console.log(config.headers)
    return async dispatch => {
        try {
            const success = await api.addBook(book);
            dispatch({ type: 'POST_BOOK', payload: success.data });
        } catch (error) {
            dispatch({ type: 'POST_BOOK_ERROR', error });
        }
    }
}

// export const getAllUsers = () => {
//     return async dispatch => {
//         function onSuccess(success) {
//             console.log(success.data)
//             dispatch({ type: 'FETCH_USERS', payload: success.data });
//             return success;
//         }
//         function onError(error) {
//             dispatch({ type: 'FETCH_USERS_ERROR', error });
//             return error;
//         }

//         try {
//             const token = await AsyncStorage.getItem('token')
//             await api.authorizeApi(token)
//             const success = await api.getAllUsers();
//             return onSuccess(success);
//         } catch (error) {
//             return onError(error);
//         }
//     }
// };

// Register
export const addUser = user => {
    return async dispatch => {
        try {
            const success = await api.addUser(user);
            dispatch({ type: 'POST_USER', payload: success.data });
        } catch (error) {
            dispatch({ type: 'POST_USER_ERROR', payload: error.response.data });
        }
    }
}

export const deleteBook = book => {
    return async dispatch => {
        try {
            const success = await api.deleteBook(book);
            dispatch({ type: 'DELETE_BOOK', payload: success.data, book });
        } catch (error) {
            dispatch({ type: 'DELETE_BOOK_ERROR', error });
        }
    }
}

export const test = () => {
    console.log('test')
    return ({
        type: 'TEST'
    })
}

export const updateBook = book => {
    console.log('updateBook')
    return async dispatch => {
        try {
            const success = await api.updateBook(book);
            dispatch({ type: 'PUT_BOOK', payload: success.data });
        } catch (error) {
            dispatch({ type: 'PUT_BOOK_ERROR', error });
        }
    }
}

export const setToken = () => {
    return async dispatch => {
        const token = await AsyncStorage.getItem('token')
        dispatch({ type: 'SET_TOKEN', payload: token })
    }
}

export const setAction = bool => ({
    type: 'IS_ADDING',
    bool
})

export const toggleLogin = bool => ({
    type: 'TOGGLE_LOGIN',
    bool
})

export const logOut = () => {
    return async dispatch => {
        await AsyncStorage.removeItem('token')

        // const token = await AsyncStorage.getItem('token')
        await api.deAuthorizeApi()

        dispatch({ type: 'LOG_OUT' })
    }
}

export const setRegisterSuccess = () => ({
    type: 'SET_REGISTER_SUCCESS'
})

export const setState = () => {
    console.log('refresh-page')
    return async dispatch => {
        try {
            const token = await AsyncStorage.getItem('token')
            if (token){
                api.authorizeApi(token);
                const success = await api.refresh();
                dispatch({ type: 'SET_STATE', payload: success.data });
            }
        } catch (error) {
            dispatch({ type: 'SET_STATE_ERROR', error });
        }
    }
}

export const showReviewForm = () => ({
    type: 'SHOW_REVIEW_FORM'
})

export const hideReviewForm = () => ({
    type: 'HIDE_REVIEW_FORM'
})

export const setBookId = bookId => ({
    type: 'SET_BOOK_ID',
    bookId
})