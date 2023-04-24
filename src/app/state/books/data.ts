import { Book } from 'src/app/books/book.model';

export const initialBooks: Book[] = [
  {
    id: 1,
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    publicationDate: new Date('1997-06-26'),
  },
  {
    id: 2,
    title: 'Lord of the Rings',
    author: 'J.R.R. Tolkien',
    publicationDate: new Date('1954-07-29'),
  },
  {
    id: 3,
    title: 'The theory of everything',
    author: 'Stephen Hawking',
    publicationDate: new Date('1988-01-01'),
  },
];
