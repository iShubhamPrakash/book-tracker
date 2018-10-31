import React, { Component } from 'react';
import Book from './Book';
// Import proptypes for typeChecking
import PropTypes from 'prop-types';

class SearchBooks extends Component {

  state = {
    query:""
  }

  updateQuery= (query) => {
    this.setState({query:query})
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
            <ol className="books-grid"></ol>
          </div>
        </div>

      );
    }
}



SearchBooks.propTypes = {
  // changeState:PropTypes.func.isRequired
}

export default SearchBooks;