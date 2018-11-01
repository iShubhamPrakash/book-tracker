import React, { Component } from 'react';
import Book from './Book';
import * as BooksAPI from '../BooksAPI';
// Import proptypes for typeChecking
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../App.css';

class SearchBooks extends Component {

  state = {
    query: "",
    searchedbook:[]
  }

  // Function to change query value as per the searched text
  updateQuery= (query) => {
    this.setState({ query: query });
    this.fetchBookOnQuery(query)
  }

  //Function to get all the books when searched with a valid query
  fetchBookOnQuery = (query) => {
    // If query do not match with the database book data or is invalid then set searchedbook to an empty array
    if (query) {
      BooksAPI.search(query).then((data) => this.setState({ searchedbook: (data.error ? [] : data) }))
    } else {
      this.setState({searchedbook:[]})
    }
  }

  render() {

      return (
        <div className="search-books">

          <div className="search-books-bar">

              {/* Back button */}
              <Link to="/" className="close-search">Close</Link>

              {/* Search input bar */}
              <div className="search-books-input-wrapper">
                <input
                type="text"
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={(event) => this.updateQuery(event.target.value)}
                />
              </div>
          </div>


            {/* Display search results */}
            <div className="search-books-results">
              <ol className="books-grid">
                {
                  this.state.searchedbook.map(book => {
                    let bookShelf = 'none';
                    this.props.books.map(bookOnMainPage => {
                      if (bookOnMainPage.id === book.id) {
                        bookShelf = bookOnMainPage.shelf;
                      }
                      return bookShelf;
                    })

                    return (
                      <li key={book.id}>
                        <Book book={book}
                          changeBookShelf={this.props.changeBookShelf}
                          thisShelf={bookShelf}
                        />
                      </li>
                    )
                  })
                }
              </ol>
          </div>
        </div>
      );
    }
}



SearchBooks.propTypes = {
  books: PropTypes.array,
  changeBookShelf:PropTypes.func
}

export default SearchBooks;
