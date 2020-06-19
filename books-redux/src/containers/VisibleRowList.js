import { connect } from 'react-redux';
import RowList from '../components/RowList'
import { getBookList } from '../actions'

const mapStateToProps = state => {
    return {
        books: state.books.books,
        role: state.users.role
        // activeUser: state.activeUser
        // books: state.fetchBooks
    }
}

const mapDispatchToProps = dispatch => ({
    getBookList: () => dispatch(getBookList())
})

export default connect(mapStateToProps, mapDispatchToProps)(RowList)
// export default connect(mapStateToProps)(RowList)