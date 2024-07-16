import React from 'react'
import SearchInput from '../../components/SearchInput'
import Books from '../../components/Books'
import HomeViewModel from './HomeViewModel'

type Props = {}


const HomePage = (props: Props) => {
    const { books, getBooks } = HomeViewModel()
    return (
      <div>
        <SearchInput onSearch={getBooks} title='GOOGLE BOOKS'/>
      {books && <Books books={books} /> }
      </div>
    )
}

export default HomePage