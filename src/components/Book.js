import React, { Component} from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${this.props.book.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                            <select>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
            </div>
        );
    }
}


//TypeChecking of props used in this component

Book.propTypes = {
    book:PropTypes.object
}



export default Book;