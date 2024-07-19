import React from "react";
import BookDetailViewModel from "./BookDetailViewModel";
import BookDetailComponent from "../../components/BookDetail";

type Props = {
  idBook: string;
  DetailsComponent?: () => JSX.Element;
};

const BookDetail = ({ idBook, DetailsComponent }: Props) => {
  const { book } = BookDetailViewModel(idBook);

  return (
    <div>
      {book ? (
        <BookDetailComponent book={book} DetailsComponent={DetailsComponent} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default BookDetail;
