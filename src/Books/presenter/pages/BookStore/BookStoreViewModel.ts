import React from "react";
import { Book } from "../../../domain/model/Book";
import { getBooksUseCase } from "../../../application/useCases/getBooksUseCase";
import BookOpenLibraryImpl from "../../../infrastructure/Fetch/repository/BookOpenLibraryImpl";
import { useNavigate } from "react-router-dom";

const booksRepository = new BookOpenLibraryImpl();

const BookStoreViewModel = () => {
  
  const navigate=useNavigate()
  const [books, setBook] = React.useState<Book[]>([]);

  function getBooks(query: string = "javascript") {
    
    getBooksUseCase({ booksRepository })
      .execute(query)
      .then((books) => {
        setBook(books);
      }).catch((error) => {
        console.error("Error fetching books: ", error)
        });
  }
  const navigateTo =(id:string)=>{
    navigate(`/bookstore/${id}`)
  }
  React.useEffect(() => {
    getBooks();
  }, []);
  return {
    books,
    getBooks,
    navigateTo
  };
};

export default BookStoreViewModel;
