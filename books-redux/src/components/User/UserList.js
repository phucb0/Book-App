import React from 'react';
import VisibleUserRowList from '../../containers/User/VisibleUserRowList'
import { Route, Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

const UserList = ({}) => {

    return (
        <div className="main">
            <h2>List of user</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Username</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    <VisibleUserRowList
                    />
                </tbody>
            </table>
            <Button variant="contained" color="primary" className="btn"
            >

                <Route>
                    <Link to={`/list`}>Back</Link>
                </Route>
            </Button>
        </div>
    )
}

export default UserList;