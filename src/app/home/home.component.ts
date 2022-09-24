import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import Swal from 'sweetalert2';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service : PeliculasService, private peliculaInterface: PeliculasService, private router : Router) { }
  ImgPrincipal : any;
  Img_Grandes_exitos_de_EcuaFilms : any;
  Img_En_tendencia : any
  Img_Titulo_Galardonados : any
  Img_Lo_mejor_del_Anime : any
  Img_Estrenos_que_se_convertiran_en_favoritos : any
  ngOnInit(): void {
    this.cargarPeliculas(6);
    this.cargarPeliculas(1);
    this.cargarPeliculas(2);
    this.cargarPeliculas(3);
    this.cargarPeliculas(4);
  }

  cargarPeliculas(idCategoria:number){
    this.service.getPeliculas(idCategoria+"").subscribe((data : any) =>{
      if(idCategoria==6){
        this.ImgPrincipal = data;
      }
      if(idCategoria==1){
        this.Img_Grandes_exitos_de_EcuaFilms = data;
      }
      if(idCategoria==2){
        this.Img_En_tendencia = data;
      }
      if(idCategoria==3){
        this.Img_Titulo_Galardonados = data;
      }
      if(idCategoria==4){
        this.Img_Lo_mejor_del_Anime = data;
      }
    },
    (errorData) => {
      if(localStorage.getItem('token_value') == null) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Usuario no inicio Sesion 😥',
        })
        this.router.navigate(['']);
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Existio un error al ejecutar la aplicación 😥',
        })
      }  
    }
    );
  }
  ImgInico = {"slidesToShow": 1,"nextArrow":false,"prevArrow":false,"accessibility":false,"autoplay": false};
  slideConfigImage = {"slidesToShow": 7, "slidesToScroll": 7,"nextArrow":false,"prevArrow":false,"accessibility":false,"autoplay": false,
  "responsive": [
    {
      breakpoint: 550,
      settings: {  
       slidesToShow: 2,
       centerMode:false,
       slidesToScroll: 2
      }  
    },
    {
      breakpoint: 700,
      settings: {  
       slidesToShow: 3,
       centerMode:false,
       slidesToScroll: 3
      }  
    },
    {
      breakpoint: 800,
      settings: {  
       slidesToShow: 4,
       centerMode:false,
       slidesToScroll: 4
      }  
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
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
  slideConfigImageTendencia = {"slidesToShow": 5,"slidesToScroll": 5,"nextArrow":false,"prevArrow":false,"accessibility":false,"autoplay": false,
  "centerMode": false,"responsive": [
    {
      breakpoint: 650,
      settings: {  
       slidesToShow: 2,
       centerMode:false,
       slidesToScroll: 2
      }  
    },
    {
      breakpoint: 850,
      settings: {  
       slidesToShow: 3,
       centerMode:false,
       slidesToScroll: 3
      }  
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 4,
        centerMode:false
      }
    }
  ]
  };


enviarNuevaVentana(ides:string){
  this.router.navigate(['/user/VerPeliculas/'], { queryParams: { id:  ides} });
}



slides1 = [
  {imagenPrincipal: "https://es.web.img3.acsta.net/pictures/15/11/20/13/14/031438.jpg",id:11},
  {imagenPrincipal: "https://www.themoviedb.org/t/p/original/jYbANSoj6qGTbDkstq9J5Vy8fRF.jpg",id:"12"},
  {imagenPrincipal: "https://www.themoviedb.org/t/p/original/9MsCANWyLJmz2MAEqiy9vKMpyc8.jpg",id:"13"},
  {imagenPrincipal: "https://www.quepeliculaver.com/uploads/2021/12/poster-11-rapidos-y-furiosos-9.jpg",id:"14"},
  {imagenPrincipal: "https://www.ubuy.ec/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjFHTWxBZEY4TEwuX0FDX1NMMTIwMF8uanBn.jpg",id:"15"},
  {imagenPrincipal: "https://www.themoviedb.org/t/p/original/d7HsbvoGkd5FZ7TB4z1uLKJnE90.jpg",id:"16"},
  {imagenPrincipal: "https://www.themoviedb.org/t/p/original/mtvqzEb4vYdOQP984k1dAuWMdiz.jpg",id:"17"},
  {imagenPrincipal: "https://www.themoviedb.org/t/p/original/6VFzRo4lKsEy5jlcRREctOWR2IC.jpg",id:"18"},
  {imagenPrincipal: "https://www.themoviedb.org/t/p/original/suaooqn1Mnv60V19MoGxneMupJs.jpg",id:"19"},
  {imagenPrincipal: "https://es.web.img3.acsta.net/pictures/15/11/20/13/14/031438.jpg",id:"11"},
  {imagenPrincipal: "https://www.themoviedb.org/t/p/original/jYbANSoj6qGTbDkstq9J5Vy8fRF.jpg",id:"12"},
  {imagenPrincipal: "https://www.themoviedb.org/t/p/original/9MsCANWyLJmz2MAEqiy9vKMpyc8.jpg",id:"13"},
  {imagenPrincipal: "https://www.quepeliculaver.com/uploads/2021/12/poster-11-rapidos-y-furiosos-9.jpg",id:"14"},
  {imagenPrincipal: "https://www.ubuy.ec/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjFHTWxBZEY4TEwuX0FDX1NMMTIwMF8uanBn.jpg",id:"15"},
  {imagenPrincipal: "https://www.themoviedb.org/t/p/original/d7HsbvoGkd5FZ7TB4z1uLKJnE90.jpg",id:"16"},
  {imagenPrincipal: "https://www.themoviedb.org/t/p/original/mtvqzEb4vYdOQP984k1dAuWMdiz.jpg",id:"17"},
  {imagenPrincipal: "https://www.themoviedb.org/t/p/original/6VFzRo4lKsEy5jlcRREctOWR2IC.jpg",id:"18"},
  {imagenPrincipal: "https://www.themoviedb.org/t/p/original/suaooqn1Mnv60V19MoGxneMupJs.jpg",id:"19"},
  {imagenPrincipal: "https://es.web.img3.acsta.net/pictures/15/11/20/13/14/031438.jpg",id:"11"},
  {imagenPrincipal: "https://www.themoviedb.org/t/p/original/jYbANSoj6qGTbDkstq9J5Vy8fRF.jpg",id:"12"},
  {imagenPrincipal: "https://www.themoviedb.org/t/p/original/9MsCANWyLJmz2MAEqiy9vKMpyc8.jpg",id:"13"},
  {imagenPrincipal: "https://www.quepeliculaver.com/uploads/2021/12/poster-11-rapidos-y-furiosos-9.jpg",id:"14"},
  {imagenPrincipal: "https://www.ubuy.ec/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjFHTWxBZEY4TEwuX0FDX1NMMTIwMF8uanBn.jpg",id:"15"},
  {imagenPrincipal: "https://www.themoviedb.org/t/p/original/d7HsbvoGkd5FZ7TB4z1uLKJnE90.jpg",id:"16"},
  {imagenPrincipal: "https://www.themoviedb.org/t/p/original/mtvqzEb4vYdOQP984k1dAuWMdiz.jpg",id:"17"},
  {imagenPrincipal: "https://www.themoviedb.org/t/p/original/6VFzRo4lKsEy5jlcRREctOWR2IC.jpg",id:"18"},
  {imagenPrincipal: "https://www.themoviedb.org/t/p/original/suaooqn1Mnv60V19MoGxneMupJs.jpg",id:"19"},
  {imagenPrincipal: "https://es.web.img3.acsta.net/pictures/15/11/20/13/14/031438.jpg",id:"11"},
  {imagenPrincipal: "https://www.themoviedb.org/t/p/original/jYbANSoj6qGTbDkstq9J5Vy8fRF.jpg",id:"12"},
  {imagenPrincipal: "https://www.themoviedb.org/t/p/original/9MsCANWyLJmz2MAEqiy9vKMpyc8.jpg",id:"13"},
  {imagenPrincipal: "https://www.quepeliculaver.com/uploads/2021/12/poster-11-rapidos-y-furiosos-9.jpg",id:"14"},
  {imagenPrincipal: "https://www.ubuy.ec/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjFHTWxBZEY4TEwuX0FDX1NMMTIwMF8uanBn.jpg",id:"15"},
  {imagenPrincipal: "https://www.themoviedb.org/t/p/original/d7HsbvoGkd5FZ7TB4z1uLKJnE90.jpg",id:"16"},
  {imagenPrincipal: "https://www.themoviedb.org/t/p/original/mtvqzEb4vYdOQP984k1dAuWMdiz.jpg",id:"17"},
  {imagenPrincipal: "https://www.themoviedb.org/t/p/original/6VFzRo4lKsEy5jlcRREctOWR2IC.jpg",id:"18"},
  {imagenPrincipal: "https://www.themoviedb.org/t/p/original/suaooqn1Mnv60V19MoGxneMupJs.jpg",id:"19"}
];



  /**/
  @ViewChild('Principal')
  peliculasPrincipal!: SlickCarouselComponent
  
  @ViewChild('GrandesExitos')
  GrandesExitos!: SlickCarouselComponent
  @ViewChild('tendencia_slick')
  tendencia_slick!: SlickCarouselComponent
  @ViewChild('galadornado_slick')
  galadornado_slick!: SlickCarouselComponent
  @ViewChild('anime_slick')
  anime_slick!: SlickCarouselComponent
  @ViewChild('estrenosProximamente_slick')
  estrenosProximamente_slick!: SlickCarouselComponent

  next(id: number): void {
    if(id==1){
      this.peliculasPrincipal.slickNext();
    }
    if(id==2){
      this.GrandesExitos.slickNext();
    }
    if(id==3){
      this.tendencia_slick.slickNext();
    }
    if(id==4){
      this.galadornado_slick.slickNext();
    }
    if(id==5){
      this.anime_slick.slickNext();
    }
    if(id==6){
      this.estrenosProximamente_slick.slickNext();
    }
    
  }
  prev(id: number) : void  {
    if(id==1){
      this.peliculasPrincipal.slickPrev();
    }
    if(id==2){
      this.GrandesExitos.slickPrev();
    }
    if(id==3){
      this.tendencia_slick.slickPrev();
    }
    if(id==4){
      this.galadornado_slick.slickPrev();
    }
    if(id==5){
      this.anime_slick.slickPrev();
    }
    if(id==6){
      this.estrenosProximamente_slick.slickPrev();
    }
  }

  sig(){
    this.GrandesExitos.slickNext();
  }

  atras(){
    this.GrandesExitos.slickPrev();
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
  CrearBorderEnImg(id:string){
    let img = <HTMLVideoElement> document.getElementById(id);
    img.style.border='5px solid green';
  }
  cambiarColorBoton(boton: string){
    let botonId = <HTMLVideoElement> document.getElementById(boton);
    botonId.style.fontSize = '32px';
    botonId.style.color = 'white';
  }
  cambiarColorBotonv2(boton: string,id:string){
    let botonId = <HTMLVideoElement> document.getElementById(boton);
    botonId.classList.replace("invisible", "visible");
    let IMG = <HTMLVideoElement> document.getElementById(id);
    IMG.style.border = '3px solid rgb(115,61,235)';
  }
  restaurarColorBotonV2(boton: string,id:string){
    let botonn = <HTMLVideoElement> document.getElementById(boton);
    botonn.classList.replace("visible", "invisible");
    let IMG = <HTMLVideoElement> document.getElementById(id);
    IMG.style.border = 'none';
  }
  restaurarColorBoton(boton: string){
    let id = <HTMLVideoElement> document.getElementById(boton);
    id.style.fontSize = '30px';
    id.style.color = 'rgb(202, 199, 199)';
  }
}
