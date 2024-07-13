import React from "react";
import { Book } from "../../../domain/model/Book";
import { getBooksUseCase } from "../../../application/useCases/getBooksUseCase";
import BookOpenLibraryImpl from "../../../infrastructure/Fetch/repository/BookOpenLibraryImpl";


const booksRepository = new BookOpenLibraryImpl();

const BookStoreViewModel = () => {
  const [books, setBook] = React.useState<Book[]>([]);

  function getBooks(query: string = "javascript") {
    console.log(query);
    getBooksUseCase({ booksRepository })
      .execute(query)
      .then((books) => {
        setBook(books);
      }).catch((error) => {
        console.error("Error fetching books: ", error)
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

export default BookStoreViewModel;
