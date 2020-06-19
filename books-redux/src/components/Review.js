import React from 'react';
import { Button } from '@material-ui/core'

const Review = ({ review, bookId, deleteReview, role }) => {
    let btnDelete;
    // console.log(review)
    // console.log(review.author)
    // console.log(review.rating)
    // console.log(review.content)
    // console.log(role)

    const handleDelete = () => {
        // test()
        deleteReview(bookId, review)
    }

    if (role === 'admin') {
        btnDelete = <td><Button color="primary"
            variant="contained"
            onClick={handleDelete}>Delete</Button></td>
    }

    return (
        <tr>
            <td>{review.author}</td>
            <td>{review.rating}</td>
            <td>{review.content}</td>
            {/* <td>{role}</td> */}
            {btnDelete}
        </tr>
    )
}

export default Review;