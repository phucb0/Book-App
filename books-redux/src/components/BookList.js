import React from 'react';
import {
    Route,
    Link,
} from 'react-router-dom'
import VisibleRowList from '../containers/VisibleRowList'
import './BookList.css'
import { Button, IconButton } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import { Redirect } from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add';

const BookList = ({ getAllUsers, hideReviewForm, bookId, addReview, logOut, setAction, isLogin, toggleLogin, role, isReviewing, activeUser }) => {

    console.log('list-called')
    const [reviewContent, setReviewContent] = React.useState('')
    const [ratingValue, setRatingValue] = React.useState()
    const [ratingHoverValue, setRatingHoverValue] = React.useState()

    // const user = users.find(user => user.username === activeUser)

    const handleLogout = () => {
        // setAction(true)
        logOut()
        toggleLogin(false)
    }

    if (!isLogin) {
        return <Redirect to="/login" />
    }

    let reviewColumn;
    let ownerColumn;
    let userRole
    if (role === 1) {
        reviewColumn = <th>Reviews</th>
        ownerColumn = <th>OwnerColumn</th>
        userRole = 'admin'
    } else if (role === 2) {
        userRole = 'customer'
    }

    const handleReviewChange = e => {
        setReviewContent(e.target.value)
    }

    const handleSubmitReview = e => {
        e.preventDefault();

        const rating = ratingValue
        const content = reviewContent
        const author = activeUser
        let newReview = {
            author,
            rating,
            content
        }

        addReview(newReview, bookId)
        hideReviewForm()
    }

    let reviewForm;
    if (isReviewing) {
        reviewForm =
            <form>
                <h2>Tell us about your experience</h2>
                <label>
                    Content
                    <input type="text"
                        name="review"
                        placeholder="How do you like this product?"
                        onChange={handleReviewChange}
                    />
                </label>
                <br />
                <label>

                    {/* <Rating
                        name="hover-feedback"
                        value={ratingValue}
                        precision={0.5}
                        onChange={handleRatingValueChange}
                        onChangeActive={handleRatingHoverChange}
                    /> */}
                    <br />
                    Rating: {ratingValue}
                    <Rating
                        name="hover-feedback"
                        value={ratingValue}
                        precision={0.5}
                        onChange={(event, newValue) => {
                            // console.log(newValue);
                            setRatingValue(newValue);
                        }}
                        onChangeActive={(event, newHover) => {
                            // console.log(newHover);
                            setRatingHoverValue(newHover);
                        }}
                    />
                    <br />
                </label>
                <input type="submit" value="Submit"
                    onClick={handleSubmitReview} />
            </form>
    }

    let btnAccount;
    if (role === 'admin') {
        btnAccount = <Button variant="contained" color="primary" className="btn"
        onClick={() => getAllUsers()}
        >
            <Route>
                <Link to={`/users`}>Accounts</Link>
            </Route>
        </Button>
    }

    return (
        <div className="main">

            <Button variant="contained" color="primary" className="btn"
                onClick={() => setAction(true)}>
                <IconButton aria-label="delete" >
                    <AddIcon fontSize="small" />
                </IconButton>
                <Route>
                    <Link to={`/add`}>Add Book</Link>
                </Route>
            </Button>
            {btnAccount}

            <br />
            {userRole}
            <table className="table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Quantity</th>
                        <th>Status</th>
                        <th>Actions</th>
                        {ownerColumn}
                        {reviewColumn}
                    </tr>
                </thead>
                <tbody>
                    <VisibleRowList
                    />
                </tbody>
            </table>
            {reviewForm}
            <Button variant="contained" color="primary" className="btn"
                onClick={handleLogout}>
                <Route>
                    <Link to={`/login`}>Log out</Link>
                </Route>
            </Button>
        </div>
    )
}

export default BookList;