import React, { Fragment } from 'react';
import './Reviews.css'
import { useParams } from 'react-router-dom'
import VisibleReview from '../containers/VisibleReview'
import { Button } from '@material-ui/core'
import {
    Route,
    Link,

} from 'react-router-dom'

const Reviews = ({ books, isLogin, role }) => {

    const { id } = useParams()

    const [bookTitle, setBookTitle] = React.useState('')
    const [bookAuthor, setBookAuthor] = React.useState('')
    const [bookQuantity, setBookQuantity] = React.useState('')
    const [reviews, setReviews] = React.useState([])

    const findBook = React.useCallback((books, id) => {
        const book = books.find(book => book._id === id)

        setReviews(book.reviews)

        setBookTitle(book.title)
        setBookAuthor(book.author)
        setBookQuantity(book.quantity)
    }, [])

    React.useEffect(() => {
        if (isLogin) {
            findBook(books, id)
        }
    }, [books])

    return (
        <div>
            <h2>{id}</h2>
            <ul className="ReviewList">
                <li>Title: {bookTitle}</li>
                <li>Author: {bookAuthor}</li>
                <li>Quantity: {bookQuantity}</li>
            </ul>
            <table className="table">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Rating</th>
                        <th>Content</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reviews.map(review => {
                            return (
                                <VisibleReview key={review._id}
                                    review={review}
                                    bookId={id}
                                    role={role}
                                />
                            )
                        })
                    }
                </tbody>
            </table>
            <Button color="primary"
                variant="contained"
            >
                <Route>
                    <Link to={`/list`}>
                        Back
                    </Link>
                </Route>
            </Button>
        </div>
    )
}

export default Reviews;