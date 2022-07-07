import { Component, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoEcuaFlims';
  slides = [
    {img: "https://i.blogs.es/1aad84/marvel/1366_521.jpeg"},
    {img: "https://as01.epimg.net/meristation/imagenes/2021/03/12/reportajes/1615546576_319724_1615546812_noticia_normal.jpg"},
    {img: "https://as01.epimg.net/meristation/imagenes/2018/05/07/noticia/1525671060_782091_1531814346_portada_normal.jpg"},
    {img: "https://media.tycsports.com/files/2020/09/05/116790/marvel-avengers_862x485.jpg"}
  ];
  slideConfig = {"slidesToShow": 2, "slidesToScroll": 1, "infinite": true,"centerMode":true};
  
  @ViewChild('slickModal')
  slickModal!: SlickCarouselComponent;

  next() {
    this.slickModal.slickNext();
  }

  prev() {
    this.slickModal.slickPrev();
  }
}
