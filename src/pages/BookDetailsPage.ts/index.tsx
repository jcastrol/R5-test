import React from 'react'
import BookDetail from '../../Books/presenter/View/BookDetail'
import { useParams } from 'react-router-dom';

type Props = {}

const BookDetailPage = (props: Props) => {
  const { id } = useParams();
  return (
    <BookDetail idBook={id || ''}/>
  )
}
export default BookDetailPage
