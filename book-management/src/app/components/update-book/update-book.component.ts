import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.css'
})
export class UpdateBookComponent {
  bookId: number | null = null;
  book: Book | null = null;
  message = '';
  errorMessage = '';

  constructor(private service: BookService) {}

  searchBook() {
    this.service.GetBookById(this.bookId!).subscribe({
      next: (data) => {
        this.book = data;
        this.message = '';
        this.errorMessage = '';
      },
      error: () => {
        this.book = null;
        this.errorMessage = 'Book not found.';
      }
    });
  }

  updateBook() {
    if (!this.book) return;
    this.service.updateBook(this.book.id, this.book).subscribe({
      next: () => {
        this.message = 'Book updated successfully!';
        this.errorMessage = '';
      },
      error: () => {
        this.message = '';
        this.errorMessage = 'Failed to update book.';
      }
    });
  }
}
