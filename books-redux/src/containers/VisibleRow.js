import { connect } from 'react-redux';
import Row from '../components/Row'
import { deleteBook, showReviewForm, test, setAction, setBookId } from '../actions'

const mapDispatchToProps = dispatch => ({
    deleteBook: id => dispatch(deleteBook(id)),
    setAction: bool => dispatch(setAction(bool)),
    showReviewForm: () => dispatch(showReviewForm()),
    setBookId: bookId => dispatch(setBookId(bookId)),
    // test: () => (dispatch(test()))
})

export default connect(null, mapDispatchToProps)(Row)