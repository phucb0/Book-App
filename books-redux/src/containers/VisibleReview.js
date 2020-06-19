import { connect } from 'react-redux';
import Review from '../components/Review'
import { deleteReview} from '../actions'

const mapDispatchToProps = dispatch => ({
    deleteReview: (bookId, review) => dispatch(deleteReview(bookId, review))

})

export default connect(null, mapDispatchToProps)(Review)