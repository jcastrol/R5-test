import { Book } from "../../../../domain/model/Book";
import  BookDto  from "../Dtos";

export function transformBookDtoToBook(dto: BookDto): Book {
    return {
        id: dto.id,
        title: dto.volumeInfo.title,
        description: dto.volumeInfo.description || "", 
        author: dto.volumeInfo.authors ? dto.volumeInfo.authors.join(", ") : "Unknown", 
        image: dto.volumeInfo.imageLinks?.thumbnail || "" 
      };
  }