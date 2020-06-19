import { connect } from 'react-redux';
import Register from '../components/Register'
import { addUser } from '../actions'

const mapStateToProps = state => ({
    // book: state.findByIndex()
    users: state.users.users,
    isRegisterSuccess: state.users.isRegisterSuccess
})

const mapDispatchToProps = dispatch => ({
    addUser: user => dispatch(addUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)