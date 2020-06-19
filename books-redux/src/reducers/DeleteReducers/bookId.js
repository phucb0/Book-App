const bookId = (state = [], action) => {
    switch (action.type) {
        case ('SET_BOOK_ID'):
            return action.bookId

        default:
            return state
    }
}

export default bookId;