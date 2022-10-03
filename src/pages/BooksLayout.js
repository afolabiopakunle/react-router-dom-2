import React from 'react';
import {Link, Outlet} from 'react-router-dom';
export default function BooksLayout() {
  return (
    <div>
     <ul>
        <li><Link to='/books/unknown/23'>Book 1</Link></li>
        <li><Link to='/books/Afolabi/4'>Book 2</Link></li>
        <li><Link to='/books/Jumi/1'>Book 3</Link></li>
      </ul>
      <div style={{background: 'red'}}>
        <Outlet />
        </div>
    </div>
  );
}