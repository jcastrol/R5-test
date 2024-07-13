import { Book } from "../../domain/model/Book"
import {  UseCaseWithParams, query } from "../../domain/model/types"
import { IBookRepository } from "../../domain/repository/IBookRepository"

type Dependencies = {
    readonly booksRepository: IBookRepository
  }
export const getBooksUseCase = ({ booksRepository }: Dependencies): UseCaseWithParams<Book[], query> => ({
    execute: (query) => booksRepository.getAll(query),
  })