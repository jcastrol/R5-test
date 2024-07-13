import React from 'react'
import Book from '../Book'
import './books.css'
import { Book as BookModel } from '../../../domain/model/Book'

export interface BooksProps {
  books: BookModel[]
}

const Books = ({ books }: BooksProps) => {
  return (
    <div className="books">
      {books.map(book => <Book key={book.id} book={book} />)} 
    </div>
  )
}

export default Books
