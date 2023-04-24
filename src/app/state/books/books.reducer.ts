import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Book } from 'src/app/books/book.model';
import { addBook, loadBooks, deleteBook } from './books.actions';

export interface BooksState extends EntityState<Book> {
  selectedBookId: string | null;
}

export const adapter: EntityAdapter<Book> = createEntityAdapter<Book>();

export const initialState: BooksState = adapter.getInitialState({
  selectedBookId: null,
});

const _booksReducer = createReducer(
  initialState,
  on(loadBooks, (state, { books }) => adapter.addMany(books, state)),
  on(addBook, (state, { book }) => adapter.addOne(book, state)),
  on(deleteBook, (state, { book }) => adapter.removeOne(book.id, state))
);

export function booksReducer(state = initialState, action: Action): BooksState {
  return _booksReducer(state, action);
}

export const getSelectedBookId = (state: BooksState) => state.selectedBookId;

const { selectIds, selectEntities, selectAll } = adapter.getSelectors();
export const selectBookIds = selectIds;
export const selectBookEntities = selectEntities;
export const selectAllBooks = selectAll;
