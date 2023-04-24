import * as BooksActions from './books.actions';
import { Book } from 'src/app/books/book.model';

describe('Books Actions', () => {
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

  it('should create a Load Books action', () => {
    const action = BooksActions.loadBooks([book1, book2]);

    expect(action.type).toEqual('[Books Component] Load');
    expect(action.books).toEqual([book1, book2]);
  });

  it('should create an Add Book action', () => {
    const action = BooksActions.addBook(book1);

    expect(action.type).toEqual('[Books Component] Add');
    expect(action.book).toEqual(book1);
  });

  it('should create a Delete Book action', () => {
    const action = BooksActions.deleteBook(book1);

    expect(action.type).toEqual('[Books Component] Delete');
    expect(action.book).toEqual(book1);
  });
});
