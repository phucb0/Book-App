import { connect } from 'react-redux';
import UserRowList from '../../components/User/UserRowList';
// import {  } from '../actions'

const mapStateToProps = state => ({
    users: state.users.users
})


export default connect(mapStateToProps)(UserRowList)