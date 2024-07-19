import React, { useCallback, useState } from "react";
import CommentRepositoryImpl from "../../../infrastructure/Db/repository/CommentRepositoryImpl";
import { getCommentsByBookUseCase } from "../../../application/useCases/getAllCommentsByBook";
import { CommentModel } from "../../../domain/model/Comment";
import { createCommentsUseCase } from "../../../application/useCases/createComment";
import { commentWithOutId } from "../../../application/factory/commentWithoutId";

const commentRepository = new CommentRepositoryImpl();

const CommentsViewModel = (bookId:string) => {
  const [comments, setcomments] = React.useState<CommentModel[]>([]);
  const [error,setError]=useState<string | null>(null)

  const getcomments = useCallback(async (id: string) => {
    try {
      const comments = await getCommentsByBookUseCase({ commentRepository }).execute(id);
      setcomments(comments);
    } catch (error) {
      setError('Error fetching comments');
    }
  }, []);

  const createComment = useCallback(async (author: string, message: string) => {
    const comment: Omit<CommentModel, 'id'> = commentWithOutId(author,message,bookId);

    try {
      await createCommentsUseCase({ commentRepository }).execute(comment);
      getcomments(bookId);
    } catch (error) {
      setError('Error creating comment');
    }
  }, [bookId, getcomments]); 

  React.useEffect(() => {
    getcomments(bookId);
  }, [bookId,getcomments]);

  return {
    comments,
    error,
    createComment,
  };
};

export default CommentsViewModel;