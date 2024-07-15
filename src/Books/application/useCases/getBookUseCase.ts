import { Book } from "../../domain/model/Book"
import {  Id, UseCaseWithParams } from "../../domain/model/types"
import { IBookRepository } from "../../domain/repository/IBookRepository"

type Dependencies = {
    readonly bookRepository: IBookRepository
  }
export const getBookUseCase = ({ bookRepository }: Dependencies): UseCaseWithParams<Book, Id> => ({
    execute: (id) => bookRepository.getById(id),
  })