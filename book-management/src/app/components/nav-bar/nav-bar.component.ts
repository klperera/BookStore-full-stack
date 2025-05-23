import { NgClass } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { HomepageComponent } from '../homepage/homepage.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent{

  constructor() {}

  @Output() optionSelected = new EventEmitter<string>();

  selectOption(option: string) {
    console.log('Selected option in nav-bar:', option);
    this.optionSelected.emit(option);
  }

}
