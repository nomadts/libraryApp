import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookEvent } from '../book.model';

@Component({
  selector: 'app-book-editor',
  templateUrl: './book-editor.component.html',
  styleUrls: ['./book-editor.component.scss'],
})
export class BookEditorComponent {
  @Output() addBook = new EventEmitter<BookEvent>();

  bookForm = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    publicationDate: new FormControl(new Date()),
  });

  onSubmit() {
    this.addBook.emit(this.bookForm.value as BookEvent);
    this.bookForm.reset();
  }
}
