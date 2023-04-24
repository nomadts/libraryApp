import { createAction } from '@ngrx/store';
import { Book } from 'src/app/books/book.model';

export const loadBooks = createAction(
  '[Books Component] Load',
  (books: Book[]) => ({
    books,
  })
);
export const addBook = createAction('[Books Component] Add', (book: Book) => ({
  book,
}));
export const deleteBook = createAction(
  '[Books Component] Delete',
  (book: Book) => ({
    book,
  })
);
