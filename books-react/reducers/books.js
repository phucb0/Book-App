// const initialState = [{ id: '1234567890', title: 'Untamed', author: 'Glennon Doyle', quantity: 20 },
// { id: '22345678910', title: 'Becoming', author: 'Michelle Obama', quantity: 30 },
// { id: '3456789101', title: 'Normal People: A Novel', author: 'Sally Rooney', quantity: 10 },
// { id: '45678910111', title: 'Midnight', author: 'Stephenie Meyer', quantity: 5 },
// { id: '56789012345', title: 'Oh, the Places You will Go!', author: 'Dr.Seuss', quantity: 0 }]

const initialState = {
    books: [],
    isReviewing: false,
    bookId: ''
}

const books = (state = initialState, action) => {
    switch (action.type) {

        case 'FETCH_BOOK':
            // console.log(action.payload)
            return Object.assign({}, state, {
                books: [...action.payload.books]
            })

        // refresh page
        case 'SET_STATE':
            return Object.assign({}, state, {
                books: [...action.payload.books]
            })

        case 'POST_BOOK':
            console.log(action.payload.newBook)
            if (action.payload.newBook) {
                return Object.assign({}, state, {
                    books: [action.payload.newBook, ...state.books]
                })
            }
            return state

        case 'PUT_BOOK':
            const idx = state.books.findIndex(e => e._id === action.payload._id);
            const bookss = [...state.books];
            if (idx >= 0) {
                bookss.splice(idx, 1, action.payload)
            }
            return Object.assign({}, state, {
                books: [...bookss]
            })

        case 'DELETE_BOOK':
            return Object.assign({}, state, {
                books: state.books.filter(book => book._id !== action.book._id)
            })

        // Manipulate reviews
        case 'POST_REVIEW':
            const books = [...state.books]
            const idxx = state.books.findIndex(book => book._id === action.bookId)
            const bookk = state.books.find(book => book._id === action.bookId)
            bookk.reviews = action.payload
            books.splice(idxx, 1, bookk)
            return Object.assign({}, state, {
                books: [...bookss]
            })

        case 'DELETE_REVIEW':
            const booksss = [...state.books];
            const bookIdx = state.books.findIndex(e => e._id === action.bookId);
            const book = state.books.find(book => book._id === action.bookId)
            book.reviews = book.reviews.filter(review => review._id !== action.review._id)
            booksss.splice(bookIdx, 1, book)
            return Object.assign({}, state, {
                books: [...bookss]
            })

        case ('SHOW_REVIEW_FORM'):
            return Object.assign({}, state, {
                isReviewing: true
            })

        case ('HIDE_REVIEW_FORM'):
            return Object.assign({}, state, {
                isReviewing: false
            })

        case ('SET_BOOK_ID'):
            return Object.assign({}, state, {
                bookId: action.bookId
            })

        case 'LOG_OUT':
            return Object.assign({}, state, {
                books: [],
                isReviewing: false
            })

        default:
            return state
    }
}

export default books