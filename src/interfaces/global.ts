export interface ErrorResponse {
  response: {
    data: {
      errors: {
        message: string
      }
    }
  }
}

export interface Book {
  title: string
  id: string
  publisher: string
  pageCount: string
  imageUrl: string
  authors: [string]
  published: string
}

export interface BookDetails extends Omit<Book, 'id' | 'authors'> {
  language: string
  isbn10: string
  isbn13: string
  description: string
}
