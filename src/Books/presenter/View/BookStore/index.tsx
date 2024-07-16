import React from 'react'
import BookStoreViewModel from './BookStoreViewModel'
import SearchInput from '../../components/SearchInput'
import Books from '../../components/Books'

type Props = {}

const BookStorePage = (props: Props) => {
  const { books, getBooks ,navigateTo} = BookStoreViewModel()
  console.log(books)
  return (
    <div>
      <SearchInput onSearch={getBooks} title='OPENLIBRARY BOOKS'/>
    {books && <Books books={books} navigateTo={navigateTo}/> }
    </div>
  )
}

export default BookStorePage