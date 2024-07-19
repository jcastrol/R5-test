import { URLCover } from "..";
import { Book } from "../../../../domain/model/Book";
import  BookDto  from "../Dtos";
import { BookdetailDto } from "../Dtos/bookDetailDto";

export function transformBookDtoToBook(dto: BookDto): Book {
   
    return  {
        id: dto.key.split('/')[2] || '',
        title: dto.title,
        description:dto?.first_sentence ? dto.first_sentence.join(' ') :'' || '', 
        author:   dto?.author_name ? dto?.author_name.join(', ') :'Unknown' || 'Unknown',  
        image: (dto?.isbn && dto.isbn.length > 0) ? `${URLCover}id/${dto.cover_i}-M.jpg` : '' || ''
        
    };;
  }
export function transformBookDetailDtoToBook(dto: BookdetailDto): Book {
    
    let description=''
    if(typeof dto.description ===  'string'){
        description= dto?.description 
    }else{
        description=dto?.description?.value  || ''
    }
    const id = dto.key.split('/')[2] || 'unknown';
    const title = dto.title || '';
    const author = dto.authors.length > 0 ? dto.authors[0].author.key.split('/').pop() || 'unknown' : 'unknown';
    const image = dto.covers.length > 0 ? `${URLCover}id/${dto.covers[0]}-L.jpg` : '';
    
    return {
        id,
        title,
        description,
        author,
        image
    };
  }

