import { CommentModel } from "../../domain/model/Comment";

export const commentWithOutId=(author: string, message: string,bookId:string):Omit<CommentModel, 'id'>=>({
    author: author.toLowerCase(),
    message: message.toLowerCase(),
    createdAt: new Date().toUTCString(),
    bookId,
  })