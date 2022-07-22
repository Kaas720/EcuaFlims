import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  slides = [
    {img: "https://es.web.img2.acsta.net/pictures/14/04/30/11/55/592219.jpg"},
    {img: "https://cartelerasdecine.info/wp-content/uploads/2019/10/Guason-pelicula-estreno-2019-carteleras-cine-Joker-Edited.jpg"},
    {img: "https://i.pinimg.com/originals/92/54/c8/9254c8d0be121b259c185db4386a317c.jpg"},
    {img: "https://www.ecartelera.com/carteles/3400/3463/001_m.jpg"},
    {img: "https://www.ecartelera.com/carteles/1400/1497/001_m.jpg"},
    {img: "https://www.themoviedb.org/t/p/w500/cUlWqDLEYMN3OWlOZ0U18WcIw5F.jpg"},
    {img: "https://www.ecartelera.com/carteles/1600/1614/001_m.jpg"},
    {img: "https://www.ecartelera.com/carteles/4300/4377/001_m.jpg"},
    {img: "https://es.web.img3.acsta.net/pictures/14/04/30/11/50/167156.jpg"},
    {img: "https://www.themoviedb.org/t/p/original/VEfCqkbK062Egob26rYQWAJoE7.jpg"}
  ];

  slides1 = [
    {img: "https://es.web.img3.acsta.net/pictures/15/11/20/13/14/031438.jpg"},
    {img: "https://www.themoviedb.org/t/p/original/jYbANSoj6qGTbDkstq9J5Vy8fRF.jpg"},
    {img: "https://www.themoviedb.org/t/p/original/9MsCANWyLJmz2MAEqiy9vKMpyc8.jpg"},
    {img: "https://www.quepeliculaver.com/uploads/2021/12/poster-11-rapidos-y-furiosos-9.jpg"},
    {img: "https://www.ubuy.ec/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjFHTWxBZEY4TEwuX0FDX1NMMTIwMF8uanBn.jpg"},
    {img: "https://www.themoviedb.org/t/p/original/d7HsbvoGkd5FZ7TB4z1uLKJnE90.jpg"},
    {img: "https://www.themoviedb.org/t/p/original/mtvqzEb4vYdOQP984k1dAuWMdiz.jpg"},
    {img: "https://www.themoviedb.org/t/p/original/6VFzRo4lKsEy5jlcRREctOWR2IC.jpg"},
    {img: "https://www.themoviedb.org/t/p/original/suaooqn1Mnv60V19MoGxneMupJs.jpg"}
  ];

  slides2 = [
    {img: "https://dam.smashmexico.com.mx/wp-content/uploads/2019/05/Spider-man-far-from-home-nuevos-posters-europa-05-oficial.jpg"},
    {img: "https://m.media-amazon.com/images/I/8142NLEI3CL._AC_SY879_.jpg"},
    {img: "https://es.web.img3.acsta.net/pictures/18/09/18/16/30/4389164.jpg"},
    {img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/godzilla-vs-kong-poster-fotogramas-1611267098.jpeg"},
    {img: "https://es.web.img2.acsta.net/pictures/21/03/30/16/16/0455033.jpg"},
    {img: "https://www.themoviedb.org/t/p/original/xRMZikjAHNFebD1FLRqgDZeGV4a.jpg"},
    {img: "https://www.themoviedb.org/t/p/original/sOgfattHPWE5sWdVCGHQ08GEbaP.jpg"},
    {img: "https://www.themoviedb.org/t/p/original/t41d2ErVUGBUbw5GiKFeSVSRa1L.jpg"},
    {img: "https://www.themoviedb.org/t/p/original/dLIwpCTf4QoW01pp85KP9jcfTpu.jpg"}
  ];

  slides3 = [
    {img: "https://es.web.img3.acsta.net/pictures/22/01/13/15/49/5165456.jpg"},
    {img: "https://es.web.img2.acsta.net/pictures/21/08/31/16/41/4145554.jpg"},
    {img: "https://www.themoviedb.org/t/p/original/5mmh2jNV7NMZt2yw32OApuB0mw0.jpg"},
    {img: "https://nosomosnonos.com/wp-content/uploads/2020/09/F5D42825-DA43-4201-AA26-68A48E9B3E84.png"},
    {img: "https://media.vandal.net/m/11-2021/202111810113561_1.jpg.webp"},
    {img: "https://cdn.atomix.vg/wp-content/uploads/2021/03/103572-691x1024.jpg"},
    {img: "https://www.themoviedb.org/t/p/original/69fJdmJOi1SuEqVf0za8I9YOYbD.jpg"},
    {img: "https://www.themoviedb.org/t/p/original/bPIm1SXYp5RQ3c4wP91JQRewIb8.jpg"},
    {img: "https://www.themoviedb.org/t/p/original/2LJC0MCghmmgSUNshpfA5RjHQay.jpg"}
  ];

  slideConfigImage = {"slidesToShow": 4,"nextArrow":false,"prevArrow":false,"accessibility":false,"autoplay": false,
  "autoplaySpeed": 3000,"responsive": [
    {
      breakpoint: 600,
      settings: {  
       slidesToShow: 1,
       centerMode:false
      }  
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        centerMode:false
      }
    }
  ]
  };


  @ViewChild('slickModal')
  slickModal!: SlickCarouselComponent
  next() {
    this.slickModal.slickNext();
  }
  prev() {
    this.slickModal.slickPrev();
  }

  @ViewChild('slickModal2')
  slickModal2!: SlickCarouselComponent
  sig(){
    this.slickModal2.slickNext();
  }

  atras(){
    this.slickModal2.slickPrev();
  }

  @ViewChild('slickModal3')
  slickModal3!:SlickCarouselComponent
  sgte(){
    this.slickModal3.slickNext();
  }
  back(){
    this.slickModal3.slickPrev();
  }
  
  @ViewChild('slickModal4')
  slickModal4!:SlickCarouselComponent
  adelante(){
    this.slickModal4.slickNext();
  }
  reg(){
    this.slickModal4.slickPrev();
  }

  ngOnInit(): void {
  }

}
