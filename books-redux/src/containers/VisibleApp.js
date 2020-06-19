import { connect } from 'react-redux';
import App from '../App.js'
import {setToken, setState } from '../actions'

const mapStateToProps = state => {
    return {
        isLogin: state.users.isLogin,
        books: state.books.books, 
        role: state.users.role,
        activeUser: state.users.activeUser
    }
}

const mapDispatchToProps = dispatch => ({
    setToken: () => dispatch(setToken()), 
    setState: () => dispatch(setState())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)