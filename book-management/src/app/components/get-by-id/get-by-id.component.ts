import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-get-by-id',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './get-by-id.component.html',
  styleUrl: './get-by-id.component.css'
})
export class GetByIdComponent {

  bookId: number | null = null;
  book: Book | null = null;
  errorMessage = '';

  constructor(private service: BookService) { }
  
  searchBook() {
    if (this.bookId === null) {
      this.errorMessage = 'Please enter a valid ID';
      this.book = null;
      return;
    }
    this.service.GetBookById(this.bookId).subscribe({
      next: (data: Book) => {
        this.book = data;
        this.errorMessage = '';
      },
      error: () => {
        this.book = null;
        this.errorMessage = 'Book not found.';
      }
    });
  }
}
