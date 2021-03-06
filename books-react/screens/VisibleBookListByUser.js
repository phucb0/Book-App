import { connect } from 'react-redux';
import BookListByUser from '../components/BookListByUser'
import { setAction, addBook, updateBook, checkBookAuth, logOut, toggleLogin } from '../actions'

const mapStateToProps = state => {
    return {
        books: state.books.books,
        activeUser: state.users.activeUser,
        isLogin: state.users.isLogin,
        role: state.users.role,
    }
}

const mapDispatchToProps = dispatch => ({
    setAction: bool => dispatch(setAction(bool)),
    addBook: book => dispatch(addBook(book)),
    updateBook: book => dispatch(updateBook(book)),
    checkBookAuth: id => dispatch(checkBookAuth(id)),
    logOut: () => dispatch(logOut()),
    toggleLogin: bool => dispatch(toggleLogin(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(BookListByUser)