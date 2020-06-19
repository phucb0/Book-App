import React from 'react';
// import Row from './Row'
import VisibleRow from '../containers/VisibleRow';

const RowList = ({ role, books }) => {

    console.log(books)
    return (
        books.map(book => {
            return < VisibleRow
                role={role}
                book={book}
                key={book._id}
                index={books.indexOf(book) + 1}
            />
        }

        ))
}

export default RowList;
