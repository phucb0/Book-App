import { connect } from 'react-redux';
import Login from '../components/Login'
import {  validateLogin, setRegisterSuccess, getBookList } from '../actions'


const mapStateToProps = state => ({
    users: state.users.users, 
    isLogin: state.users.isLogin,
    isRegisterSuccess: state.users.isRegisterSuccess
})

const mapDispatchToProps = dispatch => ({
    // isLogin: bool => dispatch(isLogin(bool)), 
    // setActiveUser: username => dispatch(setActiveUser(username)),
    validateLogin: user => dispatch(validateLogin(user)), 
    setRegisterSuccess: () => dispatch(setRegisterSuccess()),
    getBookList : () => dispatch(getBookList())
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
// export default connect(mapStateToProps, mapDispatchToProps)(Row)