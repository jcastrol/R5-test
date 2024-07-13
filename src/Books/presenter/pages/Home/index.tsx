import React from 'react'
import SearchInput from '../../components/SearchInput'
import Books from '../../components/Books'
import { BookType } from '../../components/Book'

type Props = {}
interface Response {
    data?: {
      items: BookType[]
    }
  }


const HomePage = (props: Props) => {
    const [response, setResponse] = React.useState<Response>({})
    return (
      <div>
        <SearchInput setResponse={setResponse} />
      {response.data && <Books books={response.data.items} /> }
      </div>
    )
}

export default HomePage