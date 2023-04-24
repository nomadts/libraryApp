import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookEvent } from '../book.model';

import { BookEditorComponent } from './book-editor.component';

describe('BookEditorComponent', () => {
  let component: BookEditorComponent;
  let fixture: ComponentFixture<BookEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookEditorComponent],
      imports: [
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        BrowserAnimationsModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit addBook event with form value when onSubmit is called', () => {
    jest.spyOn(component.addBook, 'emit');
    const bookEvent: BookEvent = {
      title: 'Test Book',
      author: 'John Doe',
      publicationDate: new Date(),
    };
    component.bookForm.setValue(bookEvent);
    component.onSubmit();

    expect(component.addBook.emit).toHaveBeenCalledWith(bookEvent);
  });

  it('should reset the form when onSubmit is called', () => {
    const bookEvent: BookEvent = {
      title: 'Test Book',
      author: 'John Doe',
      publicationDate: new Date(),
    };
    component.bookForm.setValue(bookEvent);
    jest.spyOn(component.bookForm, 'reset');
    component.onSubmit();

    expect(component.bookForm.reset).toHaveBeenCalled();
  });
});
