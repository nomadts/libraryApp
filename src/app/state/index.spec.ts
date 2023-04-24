import {
  reducers,
  selectBooksState,
  selectBookIds,
  selectBookEntities,
  selectAllBooks,
  selectCurrentBookId,
} from './index';
import * as fromBooks from './books/books.reducer';
import { AppState } from './index';
import { Book } from 'src/app/books/book.model';

describe('State Selectors', () => {
  const initialState: AppState = {
    books: fromBooks.initialState,
  };

  const book1: Book = {
    id: 1,
    title: 'Test Book 1',
    author: 'John Doe',
    publicationDate: new Date(),
  };

  const book2: Book = {
    id: 2,
    title: 'Test Book 2',
    author: 'Jane Doe',
    publicationDate: new Date(),
  };

  const stateWithBooks: AppState = {
    books: fromBooks.adapter.addMany([book1, book2], fromBooks.initialState),
  };

  it('should select the BooksState', () => {
    const result = selectBooksState.projector(initialState.books);

    expect(result).toEqual(initialState.books);
  });

  it('should select the book ids', () => {
    const result = selectBookIds.projector(stateWithBooks.books);

    expect(result).toEqual([book1.id, book2.id]);
  });

  it('should select the book entities', () => {
    const result = selectBookEntities.projector(stateWithBooks.books);

    expect(result).toEqual({
      [book1.id]: book1,
      [book2.id]: book2,
    });
  });

  it('should select all books', () => {
    const result = selectAllBooks.projector(stateWithBooks.books);

    expect(result).toEqual([book1, book2]);
  });

  it('should select the current book id', () => {
    const stateWithSelectedBookId: AppState = {
      books: {
        ...stateWithBooks.books,
        selectedBookId: book1.id.toString(),
      },
    };
    const result = selectCurrentBookId.projector(stateWithSelectedBookId.books);

    expect(result).toEqual(book1.id.toString());
  });
});
