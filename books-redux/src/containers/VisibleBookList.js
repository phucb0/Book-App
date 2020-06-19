import { connect } from 'react-redux';
import BookList from '../components/BookList'
import { setAction } from '../actions'
import { toggleLogin, getAllUsers, logOut, addReview, hideReviewForm } from '../actions'

const mapStateToProps = state => {
    return {
        role: state.users.role,
        isLogin: state.users.isLogin,
        isReviewing: state.books.isReviewing,
        activeUser: state.users.activeUser,
        bookId: state.books.bookId
    }
}

const mapDispatchToProps = dispatch => ({
    setAction: bool => dispatch(setAction(bool)),
    toggleLogin: bool => dispatch(toggleLogin(bool)),
    logOut: () => dispatch(logOut()),
    addReview: (review, bookId) => dispatch(addReview(review, bookId)),
    hideReviewForm: () => dispatch(hideReviewForm()),
    getAllUsers: () => dispatch(getAllUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(BookList)