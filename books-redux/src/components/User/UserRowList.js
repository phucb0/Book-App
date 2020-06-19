import React from 'react';
import VisibleUserRow from '../../containers/User/VisibleUserRow'
import { getAllUsers } from '../../actions';

const UserRowList = ({ users }) => {

    getAllUsers()

    return (
        users.map(user => {
            return < VisibleUserRow
                user={user}
                key={user._id}
                index={users.indexOf(user) + 1}
            />
        }
        ))
}

export default UserRowList