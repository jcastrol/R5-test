
import { CommentModel } from '../model/Comment'

export interface ICommentRepository {
  getAllByBook: (id:string) => Promise<CommentModel[]>
  create: (comment:Omit<CommentModel, 'id'>) => Promise<CommentModel>
}