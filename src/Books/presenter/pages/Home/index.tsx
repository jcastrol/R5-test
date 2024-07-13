import React from 'react'
import SearchInput from '../../components/SearchInput'
import Books from '../../components/Books'
import { BookType } from '../../components/Book'
import axios from 'axios'

type Props = {}
interface Response {
    data?: {
      items: BookType[]
    }
  }


const HomePage = (props: Props) => {
    const [response, setResponse] = React.useState<Response>({})

    function getBooks(title: string = 'javascript') {
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}`)
        .then((response) => setResponse(response))
    }
  
    React.useEffect(() => {
      getBooks()
    }, [])
    return (
      <div>
        <SearchInput onSearch={getBooks} />
      {response.data && <Books books={response.data.items} /> }
      </div>
    )
}

export default HomePage