import { Component, OnInit } from '@angular/core';
import { faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  faLocationArrow = faLocationArrow;
  faPhone = faPhone;

  constructor() { }

  ngOnInit() {
  }

}
