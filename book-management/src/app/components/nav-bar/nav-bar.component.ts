import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent{

  constructor(private router:Router) {}

  RouteTo = (method: string) => {
    console.log(`Routing to ${method}`); // Debugging line
    this.router.navigateByUrl(`${method}`);
  }

}
