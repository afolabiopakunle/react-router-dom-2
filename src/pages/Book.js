import React from 'react';
import {useParams} from 'react-router-dom';

export default function Book() {
const { id, name } = useParams()

  return (
    <div>
      <h1>Book {id} | {name} </h1>
      <p></p>
    </div>
  );
}