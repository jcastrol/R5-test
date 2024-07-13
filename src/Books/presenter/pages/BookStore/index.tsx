import React from 'react'
import { useParams } from 'react-router-dom'
import { Book } from '../../../domain/model/Book'
import BookStoreViewModel from './BookStoreViewModel'
import SearchInput from '../../components/SearchInput'
import Books from '../../components/Books'

type Props = {}

const BookStorePage = (props: Props) => {
  const { books, getBooks } = BookStoreViewModel()
  
  return (
    <div>
      <SearchInput onSearch={getBooks} />
    {books && <Books books={books} /> }
    </div>
  )
}

export default BookStorePage