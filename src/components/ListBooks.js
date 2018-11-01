import React, { Component } from 'react';
import Book from './Book';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


class ListBooks extends Component {
render() {
    return (
        <div className="list-books">

            {/* Header Section */}
            <div className="list-books-title">
                <header><h1>MyReads</h1></header>
            </div>

            {/* Book List Section */}
            <div className="list-books-content">
                <div>


                    {/* Book shelf for "Currently Reading" */}
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {
                                    // Filter the book list as ther the value of shelf and show on the page
                                    this.props.books
                                    .filter(book => book.shelf === 'currentlyReading')
                                    .map(filteredBook => (
                                        <li key={filteredBook.id}>
                                            <Book book={filteredBook} changeBookShelf={this.props.changeBookShelf} thisShelf={filteredBook.shelf}/>
                                        </li>
                                    ))
                                }
                            </ol>
                        </div>
                    </div>


                    {/* Book shelf for "Want to Read" */}
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {
                                    // Filter the book list as ther the value of shelf and show on the page
                                    this.props.books
                                    .filter(book => book.shelf === 'wantToRead')
                                    .map(filteredBook => (
                                        <li key={filteredBook.id}>
                                            <Book book={filteredBook} changeBookShelf={this.props.changeBookShelf} thisShelf={filteredBook.shelf}/>
                                        </li>
                                    ))
                                }
                            </ol>
                        </div>
                    </div>


                    {/* Book shelf for "Read" */}
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {
                                    // Filter the book list as ther the value of shelf and show on the page
                                    this.props.books
                                    .filter(book => book.shelf === 'read')
                                    .map(filteredBook => (
                                        <li key={filteredBook.id}>
                                            <Book book={filteredBook} changeBookShelf={this.props.changeBookShelf} thisShelf={filteredBook.shelf}/>
                                        </li>
                                    ))
                                }
                            </ol>
                        </div>
                    </div>
                </div>
            </div>


            {/* Button to search and add books to the shelf */}
            <div className="open-search">
            <Link to="/searchbooks">Add a book</Link>
            </div>

        </div>

        );
    }
}


//TypeChecking of props used in this component
ListBooks.propTypes = {
    books: PropTypes.array,
    changeBookShelf:PropTypes.func
}



export default ListBooks;