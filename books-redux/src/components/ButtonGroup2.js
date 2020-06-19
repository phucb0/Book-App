import React from 'react';
import {

    Route,
    Link
} from 'react-router-dom'
import { ButtonGroup, Button } from '@material-ui/core'

const ButtonGroup2 = ({ updateBook }) => {
    return (
        <ButtonGroup className="btn-group">
            <Button onClick={updateBook}>

                <Route>
                    <Link to={`/list`}>Save</Link>
                </Route>

            </Button>
            <Button>

                <Route>
                    <Link to={`/list`}>Cancel</Link>
                </Route>

            </Button>
        </ButtonGroup>
    )
}

export default ButtonGroup2;