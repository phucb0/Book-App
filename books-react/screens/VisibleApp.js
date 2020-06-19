import { connect } from 'react-redux';
import App from '../App'
import { setState, setToken, checkAuth } from '../actions'

const mapDispatchToProps = dispatch => ({
    setState: () => dispatch(setState()),
    setToken: () => dispatch(setToken()),
    checkAuth: () => dispatch(checkAuth())
})

export default connect(null, mapDispatchToProps)(App)