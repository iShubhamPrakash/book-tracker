import React, { Component } from 'react';
import Book from './Book';
import * as BooksAPI from '../BooksAPI';
// Import proptypes for typeChecking
import PropTypes from 'prop-types';

class SearchBooks extends Component {

  state = {
    query: "",
    searchedbook:[]
  }

  updateQuery= (query) => {
    this.setState({ query: query });
    this.fetchBookOnQuery(query)
  }

  fetchBookOnQuery = (query) => {
    if (query) {
      BooksAPI.search(query).then((data)=>this.setState({searchedbook:data}))
    } else {
      this.setState({searchedbook:[]})
    }
  }

  render() {
      return (
          <div className="search-books">
          <div className="search-books-bar">
            <a className="close-search">Close</a>
            <div className="search-books-input-wrapper">
              <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
              />

            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {
                this.state.searchedbook.map(book => (
                  <li key={book.id}>
                    <Book book={book}/>
                  </li>
                ))
              }
            </ol>
          </div>
        </div>

      );
    }
}



SearchBooks.propTypes = {
  // changeState:PropTypes.func.isRequired
}

export default SearchBooks;