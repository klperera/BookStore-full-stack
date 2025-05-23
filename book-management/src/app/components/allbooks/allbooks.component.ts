import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-allbooks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './allbooks.component.html',
  styleUrl: './allbooks.component.css'
})
export class AllbooksComponent implements OnInit {

  books: Book[] = [];

  constructor(private service: BookService) { }

  ngOnInit() {
    this.service.getAllBooks().subscribe((data: Book[]) => {
      this.books = data;
      console.log(this.books);
    });
  }

  editBook(arg0: any) {
  }
  deleteBook(arg0: any) {
    
  }
    

}
