import { connect } from 'react-redux';
import Reviews from '../components/Reviews'

const mapStateToProps = state => {
    return {
        isLogin: state.users.isLogin,
        books: state.books.books,
        role: state.users.role
    }
}



export default connect(mapStateToProps)(Reviews)