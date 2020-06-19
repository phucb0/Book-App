import { connect } from 'react-redux';
import BookItem from '../components/BookItem'
import { deleteBook } from '../actions'

const mapStateToProps = state => ({
    role: state.users.role
})

const mapDispatchToProps = dispatch => ({
    deleteBook: book => dispatch(deleteBook(book))
})

export default connect(mapStateToProps, mapDispatchToProps)(BookItem)