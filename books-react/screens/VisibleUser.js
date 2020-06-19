import { connect } from 'react-redux';
import User from '../components/User'
import { deleteBook } from '../actions'

const mapStateToProps = state => ({
    role: state.users.role
})

const mapDispatchToProps = dispatch => ({
    deleteBook: book => dispatch(deleteBook(book))
})

export default connect(mapStateToProps, mapDispatchToProps)(User)