import { Book } from '../model/Book'
import { Id } from '../model/types'

export interface IBookRepository {
  getAll: (query:string) => Promise<Book[]>
  getById: (id: Id) => Promise<Book>
  
}