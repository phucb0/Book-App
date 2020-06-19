import { connect } from 'react-redux';
import Manipulation from '../components/Manipulation'
import { setAction, addBook, updateBook, checkBookAuth } from '../actions'

const mapStateToProps = state => {
    return {
        books: state.books.books,
        activeUser: state.books.activeUser, 
        isLogin: state.books.isLogin
    }
}

const mapDispatchToProps = dispatch => ({
    setAction: bool => dispatch(setAction(bool)),
    addBook: book => dispatch(addBook(book)),
    updateBook: book => dispatch(updateBook(book)), 
    checkBookAuth: id => dispatch(checkBookAuth(id)),
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Manipulation)