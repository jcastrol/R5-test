import React from 'react'
import BookDetailViewModel from './BookDetailViewModel'
import BookDetailComponent from '../../components/BookDetail'

type Props = {}

const BookDetailPage = (props: Props) => {
  
  const { book } = BookDetailViewModel()
  
  return (
    <div>
      {book ?<BookDetailComponent book={book}/> :<></>}
    </div>
  )
}

export default BookDetailPage