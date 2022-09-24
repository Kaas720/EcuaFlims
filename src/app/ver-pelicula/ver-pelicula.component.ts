import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import Swal from 'sweetalert2';
import { PeliculasService } from '../services/peliculas.service';
import { PipeTransform, Pipe } from "@angular/core";
import { PeliculaInterface } from '../interfaces/PeliculaInterface';


@Component({
 
  selector: 'app-ver-pelicula',
  templateUrl: './ver-pelicula.component.html',
  styleUrls: ['./ver-pelicula.component.css']
})


export class VerPeliculaComponent implements OnInit {
  id: number;
  activatedRoute: any;
  constructor(protected _sanitizer: DomSanitizer,private router: ActivatedRoute,private service : PeliculasService, private routers: Router) { 
    this.routers.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.id = Number(this.router.snapshot.queryParamMap.get('id'));
  }
  slides1 = [
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
  numeroEstrella:number=0;
  peliculasLink:any
  ngOnInit(): void {
    this.buscarPeliculaPorId(this.id);
  }
  enviarNuevaVentana(ides:string){
    this.routers.navigate(['/user/VerPeliculas/'], { queryParams: { id:  ides} });
  }
  imagenFondo : string | undefined;
  imagenPoster : string | undefined;
  titulo : string | undefined;
  sipnosis : string | undefined;
  link : string =""; 
  linkDescarga : string | undefined;
  idCategoria: number =0;
  photoURL() {
    return this._sanitizer.bypassSecurityTrustResourceUrl(this.link);
  }
  cerrarVideo(id_entrada: string){
    let x = <HTMLVideoElement> document.getElementById(id_entrada);
    if(x!=null)
    {
      x.pause();
      x.currentTime = 0;
    }
  }
  buscarPeliculaPorId(id:number){
    this.service.getPeliculasporId(id).subscribe((data : any) =>{
      this.imagenFondo = data.imagenSegundaria
      this.imagenPoster = data.imagenPrincipal
      this.titulo = data.nombrePelicula
      this.sipnosis =data.sipnosisPelicula
      this.numeroEstrella = data.calificacion
      this.link = data.limkPelicula
      this.linkDescarga = data.imagenCuarta
      this.idCategoria = data.idCategoria
      this.peliculasLink =  [{links: this.link,
        img: this.imagenFondo
        }]
      this.ActivarEstella();
      this.cargarPeliculas(this.idCategoria);
    },
    (errorData) => {
      if(localStorage.getItem('token_value') == null) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Usuario no inicio Sesion 😥',
        })
        this.routers.navigate(['']);
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
  ActivarEstella(){
    let numeroEstrella2:number=1;
    let iconoFontCambio
    while(this.numeroEstrella>=numeroEstrella2){
      iconoFontCambio = <HTMLVideoElement> document.getElementById('estrella'+numeroEstrella2);
      iconoFontCambio.classList.replace("bi-star", "bi-star-fill");
      numeroEstrella2++;
    }
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
  @ViewChild('slickModal')
  slickModal!: SlickCarouselComponent
  
  @ViewChild('slickModal2')
  slickModal2!: SlickCarouselComponent
  next(id: number): void {
    if(id==1){
      this.slickModal.slickNext();
    }
    if(id==2){
      this.slickModal2.slickNext();
    }
    
  }
  prev(id: number) : void  {
    if(id==1){
      this.slickModal.slickPrev();
    }
    if(id==2){
      this.slickModal2.slickPrev();
    }
  }
  ImgPrincipal : any;
  Img_Grandes_exitos_de_EcuaFilms : any;
  cargarPeliculas(idCategoria:number){
    this.service.getPeliculas(idCategoria+"").subscribe((data : any) =>{
      if(idCategoria==this.idCategoria){
        this.ImgPrincipal = data;
      }
      else{
        this.Img_Grandes_exitos_de_EcuaFilms = data;
      }
    },
    (errorData) => {
      if(localStorage.getItem('token_value') == null) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Usuario no inicio Sesion 😥',
        })
        this.routers.navigate(['']);
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

}
