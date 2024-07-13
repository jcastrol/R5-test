import React from "react";
import { Book } from "../../../domain/model/Book";
import { getBooksUseCase } from "../../../application/useCases/getBooksUseCase";
import BookGoogleRepositoryImpl from "../../../infrastructure/Fetch/repository/BookGoogleRepositoryImpl";


const booksRepository = new BookGoogleRepositoryImpl();

const HomeViewModel = () => {
  const [books, setBook] = React.useState<Book[]>([]);

  function getBooks(query: string = "javascript") {
    getBooksUseCase({ booksRepository })
      .execute(query)
      .then((books) => {
        setBook(books);
      });
  }

  React.useEffect(() => {
    getBooks();
  }, []);
  return {
    books,
    getBooks,
  };
};

export default HomeViewModel;
