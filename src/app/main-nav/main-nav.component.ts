import { Component, OnInit } from '@angular/core';
import { faNewspaper, faUtensils, faCalendar, faShoppingCart, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  faNewspaper = faNewspaper;
  faUtensils = faUtensils;
  faCalendar = faCalendar;
  faShoppingCart = faShoppingCart;
  faMapMarkedAlt = faMapMarkedAlt;

  constructor() { }

  ngOnInit() {
  }

}
