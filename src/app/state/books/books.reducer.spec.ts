import { addBook, deleteBook, loadBooks } from './books.actions';
import { booksReducer, initialState, adapter } from './books.reducer';
import { Book } from 'src/app/books/book.model';

describe('BooksReducer', () => {
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

  it('should return the initial state', () => {
    const action = { type: 'NOOP' } as any;
    const result = booksReducer(initialState, action);

    expect(result).toEqual(initialState);
  });

  it('should load books correctly', () => {
    const action = loadBooks([book1, book2]);
    const result = booksReducer(initialState, action);
    const expectedResult = adapter.addMany([book1, book2], initialState);

    expect(result).toEqual(expectedResult);
  });

  it('should add a book correctly', () => {
    const action = addBook(book1);
    const result = booksReducer(initialState, action);
    const expectedResult = adapter.addOne(book1, initialState);

    expect(result).toEqual(expectedResult);
  });

  it('should delete a book correctly', () => {
    const stateWithBooks = adapter.addMany([book1, book2], initialState);
    const action = deleteBook(book1);
    const result = booksReducer(stateWithBooks, action);
    const expectedResult = adapter.removeOne(book1.id, stateWithBooks);

    expect(result).toEqual(expectedResult);
  });
});
