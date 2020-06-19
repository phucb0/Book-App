import { connect } from 'react-redux';
import Home from '../components/Home'
import { setAction, addBook, updateBook, checkBookAuth, logOut, toggleLogin } from '../actions'

const mapStateToProps = state => {
    return {
        activeUser: state.users.activeUser,
        role: state.users.role,
    }
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Home)