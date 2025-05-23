import { CommonModule } from '@angular/common';
import { Component, OnInit, Output } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';

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
}
