import React from 'react'
import { BookType } from '../../components/Book'
import { useParams } from 'react-router-dom'

type Props = {}

const BookStorePage = (props: Props) => {
    const [book, setBook] = React.useState<BookType | null>(null)
    let { bookId } = useParams()
  return (
    <div>index{bookId}</div>
  )
}

export default BookStorePage