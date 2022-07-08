import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ProyectoEcuaFlims';
  slides = [
    {img: "https://i.blogs.es/1aad84/marvel/1366_521.jpeg"},
    {img: "https://as01.epimg.net/meristation/imagenes/2021/03/12/reportajes/1615546576_319724_1615546812_noticia_normal.jpg"},
    {img: "https://as01.epimg.net/meristation/imagenes/2018/05/07/noticia/1525671060_782091_1531814346_portada_normal.jpg"},
    {img: "https://media.tycsports.com/files/2020/09/05/116790/marvel-avengers_862x485.jpg"}
  ];
  imgFondo = [
    {img: "https://pbs.twimg.com/media/FNU7GhdX0AIneOt.jpg:large",p:"LOL",model:"#exampleModal"},
    {img: "https://media.tycsports.com/files/2020/09/05/116790/marvel-avengers_862x485.jpg",p:"LOLa",model:"#Thor"}
  ];
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, "infinite": true,"nextArrow":false,"prevArrow":false};
  
  @ViewChild('slickModal')
  slickModal!: SlickCarouselComponent;
  @ViewChild('videos')
  divuser!: ElementRef;
  ngOnInit(): void {
  setTimeout(() => {
    console.log(this.divuser.nativeElement.innerText + 'LOL');
    const Video = this.divuser.nativeElement
    Video.muted = true;
    Video.pause();
    Video.play();
  }, 10);
  } 
  next() {
    this.slickModal.slickNext();
  }

  prev() {
    this.slickModal.slickPrev();
  }
}
