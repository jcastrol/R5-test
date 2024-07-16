import React from "react";
import Book from "../Book";
import "./books.css";
import { Book as BookModel } from "../../../domain/model/Book";

export interface BooksProps {
  books: BookModel[];
  navigateTo?: (id: string) => void;
}

const Books = ({ books, navigateTo }: BooksProps) => {
  return (
    <div className="books">
      {books.map((book) => (
        <div
          key={book.id}
          onClick={() => {
            navigateTo && navigateTo(book.id);
          }}
        >
          <Book book={book} />
        </div>
      ))}
    </div>
  );
};

export default Books;
