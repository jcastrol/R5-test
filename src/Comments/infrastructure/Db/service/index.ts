import { CommentModel } from "../../../domain/model/Comment";

const COLLECTION_NAME: string = "comment";

export const getAll = (): Promise<CommentModel[]> => {
  try {
    const result = localStorage.getItem(COLLECTION_NAME);
    return result !== null ? JSON.parse(result) : [];
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getAllByBook = async (id: string): Promise<CommentModel[]> => {
  try {
    const comments = await getAll();
    return comments.filter((item) => item.bookId === id);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const create = async (
  comment: Omit<CommentModel, "id">
): Promise<CommentModel> => {
  const comments = await getAll();

  const id = `${Date.now()}`;
  const newComment = { ...comment, id };

  localStorage.setItem(
    COLLECTION_NAME,
    JSON.stringify([...comments, newComment])
  );

  return newComment;
};
