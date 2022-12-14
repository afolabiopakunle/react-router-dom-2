import React from "react";
import {Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home'
import BookList from './pages/BookList';
import NotFound from './pages/NotFound';
import Book from './pages/Book'
import NewBook from './pages/NewBook'
import BooksLayout from './pages/BooksLayout';
import "./style.css";

export default function App() {
  return (
    <>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/books'>Books</Link></li>
        <li><Link to='/books/new'>New Book</Link></li>
      </ul>
      </nav>
   <Routes>
     <Route path='/' element={<Home />}/>
     <Route path='/books' element={<BooksLayout />}>
       <Route index element={<BookList />} />
        <Route path=':name/:id' element={<Book />} />
     </Route> 
     <Route path='/books/new' element={<NewBook />}/>
     <Route path='*' element={<NotFound />} />
     </Routes>
     </>
  );
}
