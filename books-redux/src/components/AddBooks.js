import React from 'react'
import {
    useParams
} from 'react-router-dom'
import ButtonGroup1 from './ButtonGroup1'
import ButtonGroup2 from './ButtonGroup2'
import { FormControl } from '@material-ui/core'
import { Redirect } from 'react-router-dom'


// add and edit function
const AddBooks = ({ addBook, updateBook, activeUser, books, isLogin, checkBookAuth }) => {

    const { id } = useParams();

    const [bookTitle, setBookTitle] = React.useState('')
    const [bookAuthor, setBookAuthor] = React.useState('')
    const [bookQuantity, setBookQuantity] = React.useState('')
    const [bookPrice, setBookPrice] = React.useState('')
    const [bookDescription, setBookDescription] = React.useState('')

    const findBook = React.useCallback((id) => {

        const book = books.find(book => book._id === id)

        if (book) {
            console.log('find')
            setBookTitle(book.title)
            setBookAuthor(book.author)
            setBookQuantity(book.quantity)
            setBookPrice(book.price)
            setBookDescription(book.description)

        } else {
            console.log('404')
            const url = "/list"
            return <Redirect to={url} />
        }
    }, [books])

    React.useEffect(() => {
        if (isLogin) {
            if (id) {
                console.log('find-book')
                findBook(id)
            }
        }
    }, [id, isLogin])

    const onAddBook = e => {
        e.preventDefault();

        if (!bookTitle || !bookAuthor || !bookQuantity || !bookPrice || !bookDescription) {
            alert('Please fill all information')
        } else {
            const newBook = {
                title: bookTitle,
                author: bookAuthor,
                quantity: bookQuantity,
                price: bookPrice,
                description: bookDescription
            }
            console.log('called')
            console.log(newBook)
            addBook(newBook)
        }
    }

    const onFormSubmit = (e) => {
        if (e.key === 'Enter') {
            console.log('hi')
        }
    }

    const update = () => {
        const title = bookTitle;
        const author = bookAuthor;
        const quantity = bookQuantity;
        const owner = activeUser;
        const price = bookPrice;
        const description = bookDescription;
        const _id = id;

        const newData = {
            _id,
            title,
            author,
            quantity,
            owner,
            price,
            description
        }
        console.log(newData);
        updateBook(newData)
    }

    // console.log(isAdding)
    let btnGroup;
    if (!id) {
        btnGroup = <ButtonGroup1
            addBook={onAddBook}
            activeUser={activeUser}
        />
    } else {
        btnGroup = <ButtonGroup2
            updateBook={update}
            activeUser={activeUser}
        />
    }

    const handleTitleChange = e => {
        setBookTitle(e.target.value)
        // console.log(bookTitle)
    }

    const handleAuthorChange = e => {
        setBookAuthor(e.target.value)
        // console.log(bookAuthor)
    }

    const handleQuantityChange = e => {
        setBookQuantity(parseInt(e.target.value))
        // console.log(bookQuantity)
    }

    const handlePriceChange = e => {
        setBookPrice(parseFloat(e.target.value))
        // console.log(bookQuantity)
    }

    const handleDescriptionChange = e => {
        setBookDescription(e.target.value)
        // console.log(bookQuantity)
    }

    return (
        <FormControl
            onSubmit={onFormSubmit}
        >
            <label>
                BookTitle:
              <input type="text"
                    name="BookTitle"
                    onChange={handleTitleChange}
                    value={bookTitle}
                />
            </label>
            <br />
            <label>
                Author:
                <input type="text"
                    name="author"
                    onChange={handleAuthorChange}
                    value={bookAuthor}
                />
            </label>
            <br />
            <label>
                Quantity:
             <input type="number"
                    name="quantity"
                    onChange={handleQuantityChange}
                    value={bookQuantity}
                />
            </label>
            <br />
            <label>
                Price: $
             <input type="number"
                    name="price"
                    step="0.01"
                    onChange={handlePriceChange}
                    value={bookPrice}
                />
            </label>
            <br />
            <label>
                Description:
             <textarea type="text"
                    name="description"
                    rows="4"
                    columns="50"
                    onChange={handleDescriptionChange}
                    value={bookDescription}
                />
            </label>
            <br />
            {btnGroup}
        </FormControl>
    )
}

export default AddBooks;