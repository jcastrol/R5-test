import { Book } from "../../../domain/model/Book";
import { Id } from "../../../domain/model/types";
import { IBookRepository } from "../../../domain/repository/IBookRepository";
import apiBookLibrary from "../apiOpenLibrary";
import  BookDto  from "../apiOpenLibrary/Dtos";
import { transformBookDtoToBook } from "../apiOpenLibrary/adapters";


class BookOpenLibraryImpl implements IBookRepository {
    async getAll(query:string): Promise<Book[]> {
      try {
        console.log({query});
        const response = await apiBookLibrary.get(`/search.json`, {
            params: {
                q: query,
                limit: 10,
                page: 1
            }
        });
        console.log(response.data.docs);
        const bookDtos: BookDto[] = response.data.docs;
        return bookDtos.map(transformBookDtoToBook);
      } catch (error) {
        console.error("Error fetching books: ", error);
        throw new Error("Error fetching books");
      }
    }
  
    async getById(id: Id): Promise<Book> {
      try {
        const response = await apiBookLibrary.get(`/${id}`);
        const bookDto: BookDto = response.data;
        return transformBookDtoToBook(bookDto);
      } catch (error) {
        console.error(`Error fetching book with id ${id}: `, error);
        throw new Error(`Error fetching book with id ${id}`);
      }
    }
  }
  
  export default BookOpenLibraryImpl;