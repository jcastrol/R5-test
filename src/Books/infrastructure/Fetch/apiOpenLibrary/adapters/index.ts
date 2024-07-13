import { URLCover } from "..";
import { Book } from "../../../../domain/model/Book";
import  BookDto  from "../Dtos";

export function transformBookDtoToBook(dto: BookDto): Book {
   
    return  {
        id: dto.key,
        title: dto.title,
        description:dto?.first_sentence ? dto.first_sentence.join(' ') :'' || '', 
        author:   dto?.author_name ? dto?.author_name.join(', ') :'Unknown' || 'Unknown',  
        image: (dto?.isbn && dto.isbn.length > 0) ? `${URLCover}id/${dto.cover_i}-M.jpg` : '' || ''
        
    };;
  }