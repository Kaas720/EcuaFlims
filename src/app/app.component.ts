import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private ElByClassName: ElementRef) {}
  title = 'ProyectoEcuaFlims';
  NumeroPelicula = 1;
  slides = [
    {img: "https://i.blogs.es/1aad84/marvel/1366_521.jpeg",active:"active"},
    {img: "https://as01.epimg.net/meristation/imagenes/2021/03/12/reportajes/1615546576_319724_1615546812_noticia_normal.jpg",active:"false"},
    {img: "https://as01.epimg.net/meristation/imagenes/2018/05/07/noticia/1525671060_782091_1531814346_portada_normal.jpg",active:"false"},
    {img: "https://media.tycsports.com/files/2020/09/05/116790/marvel-avengers_862x485.jpg",active:"false"}
  ];
  imgFondo = [
    {img: "https://pbs.twimg.com/media/FNU7GhdX0AIneOt.jpg:large",p:"SPIDER-MAN NO HAY HOME ",model:"#exampleModal",sipnosis:"Tras descubrirse la identidad secreta de Peter Parker como Spider-Man, la vida del joven se vuelve una locura. Peter decide pedirle ayuda al Doctor Extraño para recuperar su vida. Pero algo sale mal y provoca una fractura en el multiverso.",actor1Img:"https://yt3.ggpht.com/ytc/AKedOLTv44o9Fwwv-a72JtravJ-mRFBoBOG_8_jNVYMBtw=s900-c-k-c0x00ffffff-no-rj",actorImg2:"https://yt3.ggpht.com/ytc/AKedOLTv44o9Fwwv-a72JtravJ-mRFBoBOG_8_jNVYMBtw=s900-c-k-c0x00ffffff-no-rj",actorImg3:"https://yt3.ggpht.com/ytc/AKedOLTv44o9Fwwv-a72JtravJ-mRFBoBOG_8_jNVYMBtw=s900-c-k-c0x00ffffff-no-rj"},
    {img:"https://www.movilnet-e.com.ve/wp-content/uploads/2021/09/what-if-marvel-studios.jpg",p:"WHAT IF",model:"#whatIF",sipnosis:"Basada en los cómics homónimos, What if, ¿Qué pasaría si...? en Latinoameria, explora que hubiese ocurrido si algunos de los momentos más icónicos del Universo Cinematográfico de Marvel no hubiesen sucedido de esa forma.",actor1Img:"https://yt3.ggpht.com/ytc/AKedOLTv44o9Fwwv-a72JtravJ-mRFBoBOG_8_jNVYMBtw=s900-c-k-c0x00ffffff-no-rj",actorImg2:"https://yt3.ggpht.com/ytc/AKedOLTv44o9Fwwv-a72JtravJ-mRFBoBOG_8_jNVYMBtw=s900-c-k-c0x00ffffff-no-rj",actorImg3:"https://yt3.ggpht.com/ytc/AKedOLTv44o9Fwwv-a72JtravJ-mRFBoBOG_8_jNVYMBtw=s900-c-k-c0x00ffffff-no-rj"},
    {img: "https://archivos-cms.cinecolombia.com/images/_aliases/exhibition_embed/6/4/8/5/25846-1-esl-CO/534f53a439da-imagen_trailer_1000x510.jpg",p:"LIGHTYEAR",model:"#Thor",sipnosis:"En Lightyear luego de un incidente en el que queda abandonado en un planeta hostil a 4.2 millones de años luz de la Tierra junto a su comandante y tripulación, Buzz intenta encontrar el camino de regreso a casa a través del espacio y el tiempo.",actor1Img:"https://yt3.ggpht.com/ytc/AKedOLTv44o9Fwwv-a72JtravJ-mRFBoBOG_8_jNVYMBtw=s900-c-k-c0x00ffffff-no-rj",actorImg2:"https://yt3.ggpht.com/ytc/AKedOLTv44o9Fwwv-a72JtravJ-mRFBoBOG_8_jNVYMBtw=s900-c-k-c0x00ffffff-no-rj",actorImg3:"https://yt3.ggpht.com/ytc/AKedOLTv44o9Fwwv-a72JtravJ-mRFBoBOG_8_jNVYMBtw=s900-c-k-c0x00ffffff-no-rj"},
    {img: "https://images6.alphacoders.com/123/1239922.jpg",p:"JURASSIC WORLD 3 DOMINION",model:"#Jurrasic",sipnosis:"Cuatro años después de la destrucción de Isla Nublar, los dinosaurios ahora conviven y cazan con los seres humanos en todo el mundo. Este frágil equilibrio remodelará el futuro y determinará, de una vez por todas, si los seres humanos seguirán en la cúspide",actor1Img:"https://yt3.ggpht.com/ytc/AKedOLTv44o9Fwwv-a72JtravJ-mRFBoBOG_8_jNVYMBtw=s900-c-k-c0x00ffffff-no-rj",actorImg2:"https://yt3.ggpht.com/ytc/AKedOLTv44o9Fwwv-a72JtravJ-mRFBoBOG_8_jNVYMBtw=s900-c-k-c0x00ffffff-no-rj",actorImg3:"https://yt3.ggpht.com/ytc/AKedOLTv44o9Fwwv-a72JtravJ-mRFBoBOG_8_jNVYMBtw=s900-c-k-c0x00ffffff-no-rj"},
    {img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1C983C9E4FF6B2DDA6BD3272948CE3957EC8C658C5373D494052660FFD6CC307/scale?width=1200&aspectRatio=1.78&format=jpeg",p:"DOCTOR STRANGE 2",model:"#DoctoStrange",sipnosis:"En esta nueva aventura, el Doctor Strange va a poner a prueba los límites de sus poderes y esto le llevará a explorar una nueva dimensión de sus capacidades. Tras haber fallado su hechizo, cuando trataba de ayudar a Spider-Man, debera enmendar su error.",actor1Img:"https://yt3.ggpht.com/ytc/AKedOLTv44o9Fwwv-a72JtravJ-mRFBoBOG_8_jNVYMBtw=s900-c-k-c0x00ffffff-no-rj",actorImg2:"https://yt3.ggpht.com/ytc/AKedOLTv44o9Fwwv-a72JtravJ-mRFBoBOG_8_jNVYMBtw=s900-c-k-c0x00ffffff-no-rj",actorImg3:"https://yt3.ggpht.com/ytc/AKedOLTv44o9Fwwv-a72JtravJ-mRFBoBOG_8_jNVYMBtw=s900-c-k-c0x00ffffff-no-rj"}
  ];
  slideConfig = {"slidesToShow": 1,"nextArrow":false,"prevArrow":false,"swipeToSlide":true,"infinite":false,"accessibility":false,"swipe":false};
  slideConfigImage = {"slidesToShow": 1,"nextArrow":false,"prevArrow":false,"accessibility":false};
  @ViewChild('slickModal')
  slickModal!: SlickCarouselComponent;
  @ViewChild('slickModalPeliculasTrailer')
  slickModalPeliculasTrailer!: SlickCarouselComponent;
  @ViewChild('videos')
  divuser!: ElementRef;
  @ViewChild('video1')
  video1!: ElementRef;
  ngOnInit(): void {
  setTimeout(() => {
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
  cerrarVideo(id_entrada: string){
    let x = <HTMLVideoElement> document.getElementById(id_entrada);
    if(x!=null)
    {
      x.pause();
      x.currentTime = 0;
    }
  }
  verEvento(){
    alert("Verificar Video");
  }
  aumentarContador(id_entradNexta: string, id_entradPrev: string){
    let x = <HTMLVideoElement> document.getElementById(id_entradNexta);
    let prevButton = <HTMLVideoElement> document.getElementById("botonprev");
    if(this.NumeroPelicula<5){
      this.slickModalPeliculasTrailer.slickNext();
      this.NumeroPelicula++;
    }
    if(this.NumeroPelicula>1){
      if(prevButton!=null){
        prevButton.classList.replace("invisible", "visible");
      }
    }
    if(this.NumeroPelicula>=5){
      if(x!=null){
        x.classList.replace("visible", "invisible");
      }
    }
  }
  bajarContador(id_entrada: string,id_entradPrev: string){
    let x = <HTMLVideoElement> document.getElementById(id_entrada);
    let prevButton = <HTMLVideoElement> document.getElementById("botonprev");
    if(this.NumeroPelicula>1){
      this.slickModalPeliculasTrailer.slickPrev();
      this.NumeroPelicula--;   
    }
    if(this.NumeroPelicula<=1){
      if(prevButton!=null){
        prevButton.classList.replace("visible", "invisible");
      }
    }
    if(this.NumeroPelicula<5){
      if(x!=null){
        x.classList.replace("invisible", "visible");
      }
    }
  }
}
