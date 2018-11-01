import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Footer from './components/Footer';
import ListBooks from './components/ListBooks';
import SearchBooks from './components/SearchBooks';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {

  state = {
    books: []
  }

  // Function to handle changing the shelf of the book
  changeBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    BooksAPI.getAll().then(data => this.setState({ books: data }))
  }

  // Get the book data when the component loads
  componentDidMount() {
    BooksAPI.getAll().then(data => this.setState({ books: data }))
  }


  // Render the app component
  render() {
    return (
      <div className="app">

        <Route
          exact
          path="/"
          render={() => (
          <ListBooks books={this.state.books} changeBookShelf={this.changeBookShelf}/>
          )}
        />

        <Route
          path="/searchbooks"
          render={() => (
          <SearchBooks changeBookShelf={this.changeBookShelf} books={this.state.books}/>
          )}
        />

        <Footer/>
      </div>
    )
  }
}

export default BooksApp;
