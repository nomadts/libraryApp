import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { selectAllBooks } from '../state';
import { addBook, deleteBook, loadBooks } from '../state/books/books.actions';
import { BooksState } from '../state/books/books.reducer';
import { initialBooks } from '../state/books/data';
import { Book, BookEvent } from './book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  books$: Observable<(Book | undefined)[]>;

  maxId = 0;

  constructor(private store: Store<{ books: BooksState }>) {
    this.books$ = this.store.pipe(
      select(selectAllBooks),
      tap((books) => books.forEach((book) => this.updateMaxId(book.id)))
    );
  }

  ngOnInit(): void {
    this.store.dispatch(loadBooks(initialBooks));
  }

  updateMaxId(id: number) {
    this.maxId = Math.max(this.maxId, id);
  }

  deleteBook(book: Book) {
    this.store.dispatch(deleteBook(book));
  }

  createBook(book: BookEvent) {
    // logic for assigning an id to the book is workaround. In a real app, the id would be assigned by the backend.
    this.store.dispatch(addBook({ ...book, id: ++this.maxId } as Book));
  }
}
