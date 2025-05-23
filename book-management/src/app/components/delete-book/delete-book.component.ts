import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../../services/book.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './delete-book.component.html',
  styleUrl: './delete-book.component.css'
})
export class DeleteBookComponent {
  bookId: number | null = null;
  message = '';
  errorMessage = '';

  constructor(private service: BookService) {}

  deleteBook() {
    if (this.bookId === null) {
      this.errorMessage = 'Please enter a valid Book ID.';
      return;
    }

    this.service.deleteBook(this.bookId).subscribe({
      next: () => {
        this.message = `Book with ID ${this.bookId} deleted successfully.`;
        this.errorMessage = '';
        this.bookId = null;
      },
      error: () => {
        this.message = '';
        this.errorMessage = 'Failed to delete book. It may not exist.';
      }
    });
  }
}
