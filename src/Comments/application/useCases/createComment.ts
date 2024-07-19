import { CommentModel } from "../../domain/model/Comment";
import { UseCaseWithParams } from "../../domain/model/types";
import { ICommentRepository } from "../../domain/repository/ICommentRepository";

type Dependencies = {
  readonly commentRepository: ICommentRepository;
};
export const createCommentsUseCase = ({
  commentRepository,
}: Dependencies): UseCaseWithParams<CommentModel, Omit<CommentModel, "id">> => ({
  execute: (comment) => commentRepository.create(comment),
});
