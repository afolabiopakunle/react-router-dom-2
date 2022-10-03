import React from "react";
import {Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home'
import BookList from './pages/BookList';
import NotFound from './pages/NotFound';
import Book from './pages/Book'
import "./style.css";

export default function App() {
  return (
    <>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/books'>Books</Link></li>
      </ul>
      </nav>
   <Routes>
     <Route path='/' element={<Home />}/>
     <Route path='/books' element={<BookList />}/>
     <Route path='/book/:name/:id' element={<Book />} />
     <Route path='*' element={<NotFound />} />
     </Routes>
     </>
  );
}
