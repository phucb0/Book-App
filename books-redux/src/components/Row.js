import React from 'react';

import {
    Route,
    Link,

} from 'react-router-dom'
import { Button, IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit';

const Row = ({ test, showReviewForm, setAction, index, book, deleteBook, role, setBookId }) => {

    let btnDelete;
    let btnAddReview;
    let ownerColumn;

    const handleAddReview = () => {
        setBookId(book._id)
        showReviewForm()
    }

    if (role === 'admin') {
        btnDelete = <Button variant="contained"
            color="primary"
            className="btn" onClick={() => deleteBook(book)}>
            <IconButton aria-label="delete" >
                <DeleteIcon fontSize="small" />
            </IconButton>
            Delete
            </Button>
        ownerColumn = <td>{book.owner}</td>

    } else {
        const content = 'hello world';
        btnAddReview = <Button variant="contained"
            color="primary"
            className="btn" onClick={handleAddReview}>
            Add Review
            </Button>
    }



    return (
        <tr className="text-left">
            <td className="text-left">{index}</td>
            <td className="text-left">{book.title}</td>
            <td>{book.author}</td>
            <td>{book.quantity}</td>
            <td>{book.quantity > 0 ? 'Available' : 'Out of order'}</td>
            <td>
                <Button variant="contained" className="btn"
                    onClick={() => setAction(false)}
                >
                    <IconButton aria-label="edit" >
                        <EditIcon fontSize="small" />
                    </IconButton>

                    <Route>
                        <Link to={`/edit/${book._id}`}>
                            Edit
                        </Link>
                    </Route>
                </Button>
                {btnAddReview}
                {btnDelete}
            </td>
            {ownerColumn}
            <td>
                <Button variant="contained" className="btn">
                    <Route>
                        <Link to={`/reviews/${book._id}`}>
                            Show Reviews
                         </Link>
                    </Route>
                </Button>
            </td>
        </tr >
    )
}

export default Row;