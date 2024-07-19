import { Id } from './types'

export type CommentModel = {
  readonly id: Id
  readonly message: string
  readonly author: string
  readonly bookId: string
  readonly createdAt:string
}