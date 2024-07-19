import React from 'react'
import BookDetail from '../../Books/presenter/View/BookDetail'
import { useParams } from 'react-router-dom';
import Comments from '../../Comments/presenter/view/Comments/Comments';


type Props = {}


const BookDetailPage = (props: Props) => {
  const { id } = useParams();

  return (<>
    <BookDetail idBook={id || ''} DetailsComponent={()=>(<Comments idBook={id || ''}/>)}/>
     
      </>
  )
}
export default BookDetailPage
