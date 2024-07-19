
import { CommentModel } from "../../domain/model/Comment"
import { UseCaseWithParams} from "../../domain/model/types"
import { ICommentRepository } from "../../domain/repository/ICommentRepository"


type Dependencies = {
    readonly commentRepository: ICommentRepository
  }
export const getCommentsByBookUseCase = ({ commentRepository }: Dependencies): UseCaseWithParams<CommentModel[],string> => ({
    execute: (id) => commentRepository.getAllByBook(id)
  })