import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Footer from './components/Footer'
import ListBooks from './components/ListBooks'


class BooksApp extends React.Component {

  state = {
    books: []
  }

  changeBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    BooksAPI.getAll().then(data => this.setState({ books: data }))
  }

  componentDidMount() {
    BooksAPI.getAll().then(data => this.setState({ books: data }))
  }

  render() {
    return (
      <div className="app">

        <ListBooks books={this.state.books} changeBookShelf={this.changeBookShelf}/>

        <Footer/>
      </div>
    )
  }
}


export default BooksApp;
