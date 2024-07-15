import React, { useCallback } from "react";
import { Book } from "../../../domain/model/Book";
import BookOpenLibraryImpl from "../../../infrastructure/Fetch/repository/BookOpenLibraryImpl";
import { getBookUseCase } from "../../../application/useCases/getBookUseCase";
import { useParams } from "react-router-dom";

const bookRepository = new BookOpenLibraryImpl();

const BookDetailViewModel = () => {
  const { id } = useParams();
  const [book, setBook] = React.useState<Book | null>(null);

  const getBook = useCallback(() => {
    if (id) {
      getBookUseCase({ bookRepository })
        .execute(id)
        .then((b) => {
          setBook(b);
        })
        .catch((error) => {
          console.error("Error fetching books: ", error);
        });
    }
  }, [id]);

  React.useEffect(() => {
    getBook();
  }, [getBook]);
  
  return {
    book,
    getBook,
  };
};

export default BookDetailViewModel;
