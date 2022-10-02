import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import BookList from './pages/BookList'
import "./style.css";

export default function App() {
  return (
   <Routes>
     <Route path='/' element={<Home />}/>
     <Route path='/books' element={<BookList />}/>
     </Routes>
  );
}
