import { CommentModel } from "../../../domain/model/Comment";
import { ICommentRepository } from "../../../domain/repository/ICommentRepository";
import { create, getAllByBook } from "../service";

class CommentRepositoryImpl implements ICommentRepository {
  async getAllByBook(id:string): Promise<CommentModel[]> {
    return getAllByBook(id);
  }

  async create(comment: Omit<CommentModel, "id">): Promise<CommentModel> {
    return create(comment);
  }
}

export default CommentRepositoryImpl;
