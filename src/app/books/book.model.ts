export interface Book extends BookEvent {
  id: number;
}
export interface BookEvent {
  title: string;
  author: string;
  publicationDate: Date;
}
