import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { addBook, deleteBook, loadBooks } from '../state/books/books.actions';
import { initialBooks } from '../state/books/data';
import { Book, BookEvent } from './book.model';
import { BooksComponent } from './books.component';

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksComponent],
      providers: [provideMockStore()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should update maxId properly', () => {
    const id = 3;
    component.updateMaxId(id);
    expect(component.maxId).toEqual(id);
  });

  it('should dispatch loadBooks with initialBooks on component initialization', () => {
    const dispatchSpy = jest.spyOn(store, 'dispatch');
    component.ngOnInit();

    expect(dispatchSpy).toHaveBeenCalledWith(loadBooks(initialBooks));
  });

  it('should dispatch deleteBook action when deleteBook is called', () => {
    const dispatchSpy = jest.spyOn(store, 'dispatch');
    const book: Book = {
      id: 1,
      title: 'Test Book',
      author: 'John Doe',
      publicationDate: new Date(),
    };
    component.deleteBook(book);

    expect(dispatchSpy).toHaveBeenCalledWith(deleteBook(book));
  });

  it('should dispatch addBook action with a new id when createBook is called', () => {
    const dispatchSpy = jest.spyOn(store, 'dispatch');
    const bookEvent: BookEvent = {
      title: 'New Test Book',
      author: 'Jane Doe',
      publicationDate: new Date(),
    };

    component.maxId = 5;
    component.createBook(bookEvent);

    const expectedBook: Book = { ...bookEvent, id: 6 };
    expect(dispatchSpy).toHaveBeenCalledWith(addBook(expectedBook));
  });
});
