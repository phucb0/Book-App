import { connect } from 'react-redux';
import Root from '../components/Root'
import { logOut, toggleLogin } from '../actions'

const mapStateToProps = state => {
    return {
        role: state.users.role
    }
}

const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch(logOut()),
    toggleLogin: () => dispatch(toggleLogin())
})

export default connect(mapStateToProps, mapDispatchToProps)(Root)