import { Component, Input, OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';
import { AllbooksComponent } from '../allbooks/allbooks.component';
import { GetByIdComponent } from '../get-by-id/get-by-id.component';
import { AddBookComponent } from '../add-book/add-book.component';
import { UpdateBookComponent } from '../update-book/update-book.component';
import { DeleteBookComponent } from '../delete-book/delete-book.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavBarComponent, AllbooksComponent, GetByIdComponent, AddBookComponent, UpdateBookComponent, DeleteBookComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  constructor(private service: BookService) { }

  books: Book[] = [];
  activeOption: string = 'GetAllBooks';

  onOptionChange(selected: string) {
    this.activeOption = selected;
    console.log('Option changed to:', this.activeOption);
  }

}
