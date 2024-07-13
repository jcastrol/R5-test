import React from 'react'
import './book.css'
import { Book as BookModel } from '../../../domain/model/Book'


export interface BookProps {
  book: BookModel
}

const BookComponent = ({ book }: BookProps) => (
  <div className="book">
    <div className="book-image">
      {book.image ? <img
  alt={book.image}
  src={book.image}/>
  : <img src="https://picsum.photos/200/260" alt="default" />}
    </div>
    <p className="book-title">{book.title}</p>
  </div>
)

export default BookComponent
