import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Footer from './components/Footer'
import SearchBooks from './components/SearchBooks'
import ListBooks from './components/ListBooks'
import Book from './components/Book';


class BooksApp extends React.Component {

  state = {
    books:[]
  }

  componentDidMount() {
    BooksAPI.getAll().then(bookList => {
      this.setState({books:bookList})
    })
  }

  render() {
    return (
      <div className="app">

        <ListBooks
        books={this.state.books}/>

        <Footer />

      </div>
    )
  }
}


export default BooksApp
