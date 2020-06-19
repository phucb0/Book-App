import axios from 'axios'
const api = axios.create({
    baseURL: `http://localhost:4000/api`
})
// const config = {
//     headers: {
//         'Authorization': 'Bearer ' + localStorage.token
//     }
// }

export const getBookList = () => {
    // console.log('get-book-list' + localStorage.token)
    return (dispatch) => {
        const config = {
            headers: {
                'Authorization': 'Bearer ' + localStorage.token
            }
        }
        // console.log(config)
        return api.get('/books', config)
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type: 'FETCH_BOOK',
                    payload: data
                })
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const addBook = book => {
    // console.log(config.headers)
    return (dispatch) => {
        const config = {
            headers: {
                'Authorization': 'Bearer ' + localStorage.token
            }
        }
        console.log(book)
        return api.post('/books', book, config)
            .then(response => {
                dispatch({
                    type: 'POST_BOOK',
                    payload: response.data
                })
            })
            .catch(error => {
                throw (error);
            });
    };
}

export const getAllUsers = () => {
    return (dispatch) => {
        const config = {
            headers: {
                'Authorization': 'Bearer ' + localStorage.token
            }
        }
        return api.get('/users', config)
            .then(response => {
                dispatch({
                    type: 'FETCH_USERS',
                    payload: response.data
                })
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const addUser = user => {
    console.log(user)
    return (dispatch) => {
        return api.post('/register', user)
            .then(response => {
                console.log(response.data)
                dispatch({
                    type: 'POST_USER',
                    payload: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: 'POST_USER_ERROR',
                    error: err.response.data
                })
                throw (err);
            });
    };
}

export const addReview = (review, bookId) => {
    console.log(review)
    console.log(bookId)
    const url = '/books/' + bookId + '/reviews'
    console.log(url)

    return (dispatch) => {
        const config = {
            headers: {
                'Authorization': 'Bearer ' + localStorage.token
            }
        }
        return api.post(url, review, config)
            .then(response => {
                dispatch({
                    type: 'POST_REVIEW',
                    payload: response.data,
                    bookId
                })
            })
            .catch(err => {

                throw (err);
            });
    };
}

export const checkBookAuth = id => {

    const token = localStorage.token;

    if (token) {
        console.log(token)

        const config = {
            headers: {
                'Authorization': 'Bearer ' + localStorage.token
            }
        }
        return (dispatch) => {
            return api.get('/books/' + id, config)
                .then(response => {
                    dispatch({
                        type: 'CHECK_BOOK_AUTH',
                        payload: response.data,
                    })
                })
        }
    } else {

    }
}

export const validateLogin = user => {
    console.log(user)
    return (dispatch) => {
        return api.post('/login', user)
            .then(response => {
                localStorage.setItem("token", response.data.token)
                dispatch({
                    type: 'VALIDATE_LOGIN',
                    payload: response.data,
                    user
                })
            })
            .catch(err => {
                dispatch({
                    type: 'VALIDATE_LOGIN_ERROR',
                    payload: err.response.data
                })
                throw (err);
            });
    };
}

export const deleteBook = book => {
    const token = localStorage.token;

    if (token) {
        const url = '/books/' + book._id

        return (dispatch) => {
            const config = {
                headers: {
                    'authorization': 'Bearer ' + localStorage.token
                }
            }

            return api.delete(url, config)
                .then(response => {
                    dispatch({
                        type: 'DELETE_BOOK_SUCCESS',
                        payload: response.data
                    })
                })
                .then(() => {
                    dispatch({
                        type: 'DELETE_BOOK',
                        payload: book
                    })
                })
                .catch(error => {
                    throw (error);
                });
        };
    }
}

export const test = () => {
    console.log('test')
    return ({
        type: 'TEST'
    })
}

export const deleteReview = (bookId, review) => {
    console.log('action-del')
    const url = '/books/' + bookId + "/reviews/" + review._id
    console.log(url)
    return (dispatch) => {
        const config = {
            headers: {
                'authorization': 'Bearer ' + localStorage.token
            }
        }
        console.log(config.headers.authorization)
        console.log(config.headers.Authorization)
        return api.delete(url, config)
            .then(response => {
                return response.data
            })
            .then(() => {
                dispatch({
                    type: 'DELETE_REVIEW',
                    review,
                    bookId
                })
            })
            .catch(error => {
                throw (error);
            });
    };
}

export const updateBook = book => {
    console.log('updateBook')
    const url = '/books/' + book._id
    return (dispatch) => {
        const config = {
            headers: {
                'Authorization': 'Bearer ' + localStorage.token
            }
        }
        return api.put(url, book, config)
            .then(response => {
                return response.data
            })
            .then(() => {
                dispatch({
                    type: 'PUT_BOOK',
                    payload: book
                })
            })
            .catch(error => {
                throw (error);
            });
    };
}

export const setToken = () => ({
    type: 'SET_TOKEN',
})

export const setAction = bool => ({
    type: 'IS_ADDING',
    bool
})

export const toggleLogin = bool => ({
    type: 'TOGGLE_LOGIN',
    bool
})

export const logOut = () => ({
    type: 'LOG_OUT'
})

export const setRegisterSuccess = () => ({
    type: 'SET_REGISTER_SUCCESS'
})

export const setState = () => {
    console.log('refresh-page')
    const token = localStorage.token;

    if (token) {

        const config = {
            headers: {
                'Authorization': 'Bearer ' + localStorage.token
            }
        }

        return (dispatch) => {

            return api.get('/', config)
                .then(response => {
                    console.log(response.data)
                    dispatch({
                        type: 'SET_STATE',
                        payload: response.data
                    })
                })

                .catch(error => {
                    throw (error);
                });
        }
    }

    return ({
        type: 'AAA'
    })
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