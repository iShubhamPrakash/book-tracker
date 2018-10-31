import React, { Component } from 'react';
import Book from './Book';
import PropTypes from 'prop-types';


class ListBooks extends Component {
    render() {
        return (
<div className="list-books">
    <div className="list-books-title">
        <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
        <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {
                                this.props.books
                                .filter(book => book.shelf === 'currentlyReading')
                                .map(book => (
                                    <li key={book.id}>
                                        <Book />
                                    </li>
                                ))

                            }

                        </ol>
                    </div>
            </div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {
                                this.props.books
                                .filter(book => book.shelf === 'wantToRead')
                                .map(book => (
                                    <li key={book.id}>
                                        <Book/>
                                    </li>
                                ))
                           }
                        </ol>
                    </div>
            </div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                        {
                            this.props.books
                            .filter(book => book.shelf === 'read')
                            .map(book => (
                                <li key={book.id}>
                                    <Book/>
                                </li>
                            ))
                        }
                        </ol>
                    </div>
            </div>
        </div>
    </div>
            <div className="open-search">
              <a>Add a book</a>
            </div>
          </div>

        );
    }
}


//TypeChecking of props used in this component
ListBooks.propTypes = {
    books: PropTypes.array
}



export default ListBooks;