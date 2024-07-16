import React from 'react'
import BookDetailViewModel from './BookDetailViewModel'
import BookDetailComponent from '../../components/BookDetail'

type Props = {
  idBook:string
}

const BookDetail = ({idBook}: Props) => {
  
  const { book } = BookDetailViewModel(idBook)
  
  return (
    <div>
      {book ?<BookDetailComponent book={book}/> :<></>}
    </div>
  )
}

export default BookDetail