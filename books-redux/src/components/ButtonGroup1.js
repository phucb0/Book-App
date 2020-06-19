import React from 'react'
import {

    Route,
    Link
} from 'react-router-dom'
import { ButtonGroup, Button } from '@material-ui/core'

const ButtonGroup1 = ({ addBook }) => {
    return (
        <ButtonGroup color="primary" aria-label="outlined primary button group" className="btn-group">
            <Button onClick={addBook}>

                <Route>
                    <Link to={`/list`}>Add</Link>
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


export default ButtonGroup1;