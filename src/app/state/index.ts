import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromBooks from './books/books.reducer';

export interface AppState {
  books: fromBooks.BooksState;
}

export const reducers: ActionReducerMap<AppState> = {
  books: fromBooks.booksReducer,
};

// ------------------------------
// BOOKS SELECTORS
// ------------------------------

export const selectBooksState =
  createFeatureSelector<fromBooks.BooksState>('books');

export const selectBookIds = createSelector(
  selectBooksState,
  fromBooks.selectBookIds
);

export const selectBookEntities = createSelector(
  selectBooksState,
  fromBooks.selectBookEntities
);

export const selectAllBooks = createSelector(
  selectBooksState,
  fromBooks.selectAllBooks
);

export const selectCurrentBookId = createSelector(
  selectBooksState,
  fromBooks.getSelectedBookId
);
