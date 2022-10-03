import React from 'react';
import {Link} from 'react-router-dom';

export default function BookList() {
  return (
    <div>
      <h1>BookList</h1>
      <ul>
        <li><Link to='/book/unknown/23'>Book 1</Link></li>
        <li><Link to='/book/Afolabi/4'>Book 2</Link></li>
        <li><Link to='/book/Jumi/1'>Book 3</Link></li>
      </ul>
    </div>
  );
}