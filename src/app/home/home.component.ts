import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service : PeliculasService, private peliculaInterface: PeliculasService) { }
  slides : any;

  slides1 = [
    {img: "https://es.web.img3.acsta.net/pictures/15/11/20/13/14/031438.jpg",id:"11"},
    {img: "https://www.themoviedb.org/t/p/original/jYbANSoj6qGTbDkstq9J5Vy8fRF.jpg",id:"12"},
    {img: "https://www.themoviedb.org/t/p/original/9MsCANWyLJmz2MAEqiy9vKMpyc8.jpg",id:"13"},
    {img: "https://www.quepeliculaver.com/uploads/2021/12/poster-11-rapidos-y-furiosos-9.jpg",id:"14"},
    {img: "https://www.ubuy.ec/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjFHTWxBZEY4TEwuX0FDX1NMMTIwMF8uanBn.jpg",id:"15"},
    {img: "https://www.themoviedb.org/t/p/original/d7HsbvoGkd5FZ7TB4z1uLKJnE90.jpg",id:"16"},
    {img: "https://www.themoviedb.org/t/p/original/mtvqzEb4vYdOQP984k1dAuWMdiz.jpg",id:"17"},
    {img: "https://www.themoviedb.org/t/p/original/6VFzRo4lKsEy5jlcRREctOWR2IC.jpg",id:"18"},
    {img: "https://www.themoviedb.org/t/p/original/suaooqn1Mnv60V19MoGxneMupJs.jpg",id:"19"}
  ];
  slides5 = [
    {img: "https://pic-bstarstatic.akamaized.net/ugc/0583723726421aa5a319a28c39656b6710f3fd72.jpg",id:"26"},
    {img: "https://m.media-amazon.com/images/I/71C2hZMZjhL._AC_SL1500_.jpg",id:"27"},
    {img: "https://m.media-amazon.com/images/I/71C2hZMZjhL._AC_SL1500_.jpg",id:"28"},
    {img: "https://m.media-amazon.com/images/I/71C2hZMZjhL._AC_SL1500_.jpg",id:"29"},
    {img: "https://www.ubuy.ec/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjFHTWxBZEY4TEwuX0FDX1NMMTIwMF8uanBn.jpg",id:"30"},
    {img: "https://www.themoviedb.org/t/p/original/d7HsbvoGkd5FZ7TB4z1uLKJnE90.jpg",id:"31"},
    {img: "https://www.themoviedb.org/t/p/original/mtvqzEb4vYdOQP984k1dAuWMdiz.jpg",id:"32"},
    {img: "https://www.themoviedb.org/t/p/original/6VFzRo4lKsEy5jlcRREctOWR2IC.jpg",id:"33"},
    {img: "https://www.themoviedb.org/t/p/original/suaooqn1Mnv60V19MoGxneMupJs.jpg",id:"34"}
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
  ImgPrincipales = [
    {img: "https://www.lavanguardia.com/peliculas-series/images/movie/backdrop/2019/8/w1280/iGnCzXEx0cFlUbpyAMeHwHWhPhx.jpg"},
    {img: "https://www.lavanguardia.com/peliculas-series/images/movie/backdrop/2019/8/w1280/iGnCzXEx0cFlUbpyAMeHwHWhPhx.jpg"},
    {img: "https://www.lavanguardia.com/peliculas-series/images/movie/backdrop/2019/8/w1280/iGnCzXEx0cFlUbpyAMeHwHWhPhx.jpg"},
    {img: "https://www.lavanguardia.com/peliculas-series/images/movie/backdrop/2019/8/w1280/iGnCzXEx0cFlUbpyAMeHwHWhPhx.jpg"}
  ]
  ImgInico = {"slidesToShow": 1,"nextArrow":false,"prevArrow":false,"accessibility":false,"autoplay": false};
  slideConfigImage = {"slidesToShow": 6, "slidesToScroll": 6,"nextArrow":false,"prevArrow":false,"accessibility":false,"autoplay": false,
  "centerMode": true,"responsive": [
    {
      breakpoint: 600,
      settings: {  
       slidesToShow: 1,
       centerMode:false,
       slidesToScroll: 6
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
  slideConfigImage3 = {"slidesToShow": 3, "nextArrow":false,"prevArrow":false,"accessibility":false,"autoplay": false,
  "centerMode": true,"responsive": [
    {
      breakpoint: 600,
      settings: {  
       slidesToShow: 1,
       centerMode:false,
       slidesToScroll: 6
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
  slideConfigImage4 = {"slidesToShow": 2, "nextArrow":false,"prevArrow":false,"accessibility":false,"autoplay": false};
  slideConfigImageTendencia = {"slidesToShow": 4,"slidesToScroll": 4,"nextArrow":false,"prevArrow":false,"accessibility":false,"autoplay": false,
  "centerMode": true,"responsive": [
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
  
  @ViewChild('slickModal2')
  slickModal2!: SlickCarouselComponent
  next(id: number): void {
    if(id==1){
      this.slickModal.slickNext();
    }
    else{
      this.slickModal2.slickNext();
    }
    
  }
  prev() {
    this.slickModal.slickPrev();
  }

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
  cargarPeliculas(){
    this.service.getPeliculas().subscribe((data : any) =>{
      this.slides = data;
    },
    (errorData) => {
      alert(errorData);    
    }
    );
  }
  ngOnInit(): void {
    this.cargarPeliculas();
  }

  CrearBorderEnImg(id:string){
    let img = <HTMLVideoElement> document.getElementById(id);
    img.style.border='5px solid green';
  }
  cambiarColorBoton(boton: string){
    let botonId = <HTMLVideoElement> document.getElementById(boton);
    botonId.style.fontSize = '32px';
    botonId.style.color = 'white';
  }
  restaurarColorBoton(boton: string){
    let id = <HTMLVideoElement> document.getElementById(boton);
    id.style.fontSize = '30px';
    id.style.color = 'rgb(202, 199, 199)';
  }
}
