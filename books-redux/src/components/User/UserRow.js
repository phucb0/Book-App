import React from 'react';

const UserRow = ({index, user}) => {

    return (
        <tr>
            <td>{index}</td>
            <td>{user.username}</td>
            <td>{user.role}</td>
        </tr>
    )
}

export default UserRow;