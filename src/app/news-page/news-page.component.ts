import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {
  latestNews = [];

  constructor() { }

  ngOnInit() {
    this.latestNews = [
      {
        thumbnail: '../../assets/defaultNewsThumbnail-small.jpg',
        title: 'Nuevo surtido',
        message: 'Nuevos juegos para ser rentados en nuestras instalaciones'
      },
      {
        thumbnail: '',
        title: 'Nueva página',
        message: 'Un mensaje'
      },
    ]
  }

}
