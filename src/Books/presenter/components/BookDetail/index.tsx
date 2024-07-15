import React from "react";
import "./book.css";
import { Book as BookModel } from "../../../domain/model/Book";

export interface BookProps {
  book: BookModel;
}

const BookDetailComponent = ({ book }: BookProps) => (
  <div className="bookdetail">
    <div className="bookdetail-image">
      {book.image ? (
        <img alt={book.image} src={book.image} />
      ) : (
        <img src="https://picsum.photos/200/260" alt="default" />
      )}
    </div>
    <div className="bookdetail-details">
      <h2 className="bookdetail-title">{book.title}</h2>
      <p className="bookdetail-description">{book.description}</p>
    </div>
  </div>
);

export default BookDetailComponent;
