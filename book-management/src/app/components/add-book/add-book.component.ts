import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {

  newBook: Partial<Book> = {
    title: '',
    author: '',
    isbn: '',
    publicationDate: ''
  };

  successMessage = '';
  errorMessage = '';

  constructor(private bookService: BookService) {}

  addBook() {
    if (
      !this.newBook.title ||
      !this.newBook.author ||
      !this.newBook.isbn ||
      !this.newBook.publicationDate
    ) {
      this.errorMessage = 'All fields are required.';
      this.successMessage = '';
      return;
    }

    this.bookService.addBook(this.newBook as Book).subscribe({
      next: (book: Book) => {
        this.successMessage = `Book "${book.title}" added successfully!`;
        this.errorMessage = '';
        this.newBook = {}; // clear form
      },
      error: () => {
        this.successMessage = '';
        this.errorMessage = 'Failed to add book.';
      }
    });
  }
}
