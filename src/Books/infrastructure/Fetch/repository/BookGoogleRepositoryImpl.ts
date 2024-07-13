import { Book } from "../../../domain/model/Book";
import { Id } from "../../../domain/model/types";
import { IBookRepository } from "../../../domain/repository/IBookRepository";
import apiBookGoogle from "../apiGoogle";
import  BookDto  from "../apiGoogle/Dtos";
import { transformBookDtoToBook } from "../apiGoogle/adapters";

class BookGoogleRepositoryImpl implements IBookRepository {
    async getAll(query:string='javascript'): Promise<Book[]> {
      try {
        const response = await apiBookGoogle.get(`?q=${query}`);
        const bookDtos: BookDto[] = response.data.items;
        return bookDtos.map(transformBookDtoToBook);
      } catch (error) {
        console.error("Error fetching books: ", error);
        throw new Error("Error fetching books");
      }
    }
  
    async getById(id: Id): Promise<Book> {
      try {
        const response = await apiBookGoogle.get(`/${id}`);
        const bookDto: BookDto = response.data;
        return transformBookDtoToBook(bookDto);
      } catch (error) {
        console.error(`Error fetching book with id ${id}: `, error);
        throw new Error(`Error fetching book with id ${id}`);
      }
    }
  }
  
  export default BookGoogleRepositoryImpl;