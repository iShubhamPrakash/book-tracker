import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Reader App component in the div with id=root
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,
    document.getElementById('root')
);
