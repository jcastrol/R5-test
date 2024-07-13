import { Id } from './types'

export type Book = {
  readonly id: Id
  readonly title: string
  readonly description: string
  readonly author: string
  readonly image: string 
}