import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import {LazyLoadService} from 'ngx-slickjs';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private ElByClassName: ElementRef,private lazyLoadService: LazyLoadService) {}
  title = 'ProyectoEcuaFlims';
  NumeroPelicula = 1;
  slides = [
    {img: "https://firebasestorage.googleapis.com/v0/b/morochoreydavid.appspot.com/o/Peliculas%2FUncharted.png?alt=media&token=c31d3beb-9f66-4507-aaca-bbfb50e20718"},
    {img: "https://firebasestorage.googleapis.com/v0/b/morochoreydavid.appspot.com/o/Peliculas%2Fel%20mundo%20de%20los%20perdidos.png?alt=media&token=9f5322f3-2da6-46d6-8bb0-15d24f9c848e"},
    {img: "https://firebasestorage.googleapis.com/v0/b/morochoreydavid.appspot.com/o/Peliculas%2Fethernals.png?alt=media&token=79c087fd-d790-401c-a730-2dbffc166876"},
    {img: "https://firebasestorage.googleapis.com/v0/b/morochoreydavid.appspot.com/o/Peliculas%2FProyectoAdan.png?alt=media&token=f13b110f-d8bc-4748-8944-a3667cf74c3c"},
    {img: "https://firebasestorage.googleapis.com/v0/b/morochoreydavid.appspot.com/o/Peliculas%2FTe%20amare%20por%20siempre.png?alt=media&token=4436981a-d0fc-4b55-afcb-94ce7378c738"},
    {img: "https://firebasestorage.googleapis.com/v0/b/morochoreydavid.appspot.com/o/Peliculas%2F2067.png?alt=media&token=bd9c7a37-1796-4f7c-9fb8-76a9db924a90"},
    {img: "https://firebasestorage.googleapis.com/v0/b/morochoreydavid.appspot.com/o/Peliculas%2FEnd%20game.png?alt=media&token=7ecb3dd1-3023-4a8c-a0d1-b682abc4598a"},
    {img: "https://firebasestorage.googleapis.com/v0/b/morochoreydavid.appspot.com/o/Peliculas%2Fvenom.png?alt=media&token=7d0c632c-f0ca-42f0-b1aa-1ba0723f9f9b"},
    {img: "https://firebasestorage.googleapis.com/v0/b/morochoreydavid.appspot.com/o/Peliculas%2FMORBIUS.png?alt=media&token=46be3a97-fbbc-4739-a8ef-b16b3740d78d"},
    {img: "https://firebasestorage.googleapis.com/v0/b/morochoreydavid.appspot.com/o/Peliculas%2FShang%20chi.png?alt=media&token=39f92f58-95b9-4908-b657-d6ebcbae011d"},
    {img: "https://firebasestorage.googleapis.com/v0/b/morochoreydavid.appspot.com/o/Peliculas%2FyourName.png?alt=media&token=21fb01d8-8606-43ad-a44a-a22c2d43b073"},
    {img: "https://firebasestorage.googleapis.com/v0/b/morochoreydavid.appspot.com/o/Peliculas%2FSonic%202.png?alt=media&token=0f0bbe8b-419d-4f31-9b3a-eb3e907f89ef"}
  ];
  imgFondo = [
    {actor1:"Tom Holland",actor2:"Tobey Maguire",actor3:"Andrew Garfield",img: "https://pbs.twimg.com/media/FNU7GhdX0AIneOt.jpg:large",p:"SPIDER-MAN NO HAY HOME ",model:"#exampleModal",sipnosis:"Tras descubrirse la identidad secreta de Peter Parker como Spider-Man, la vida del joven se vuelve una locura. Peter decide pedirle ayuda al Doctor Extraño para recuperar su vida. Pero algo sale mal y provoca una fractura en el multiverso.",actor1Img:"https://firebasestorage.googleapis.com/v0/b/morochoreydavid.appspot.com/o/Actores%20PNG%2FTom%20Holand2.png?alt=media&token=01455bb4-37f3-4eec-9a48-d56adf921f57",actorImg2:"https://firebasestorage.googleapis.com/v0/b/morochoreydavid.appspot.com/o/Actores%20PNG%2FTobeyMaguirre.png?alt=media&token=6e9c460b-17a1-4980-877f-6566c5afbfb2",actorImg3:"https://firebasestorage.googleapis.com/v0/b/morochoreydavid.appspot.com/o/Actores%20PNG%2FAndrew%20Garfield.png?alt=media&token=11672aa3-2cf9-4d9a-8331-0659dde3c772"},
    {actor1:"Spider-Man",actor2:"Doctor Strange",actor3:"Thanos Zombie",img:"https://www.movilnet-e.com.ve/wp-content/uploads/2021/09/what-if-marvel-studios.jpg",p:"WHAT IF",model:"#whatIF",sipnosis:"Basada en los cómics homónimos, What if, ¿Qué pasaría si...? en Latinoameria, explora que hubiese ocurrido si algunos de los momentos más icónicos del Universo Cinematográfico de Marvel no hubiesen sucedido de esa forma.",actor1Img:"https://firebasestorage.googleapis.com/v0/b/morochoreydavid.appspot.com/o/Actores%20PNG%2FSpiderman.png?alt=media&token=38cb9aaa-bee7-4a9e-a159-eba6568c4727",actorImg2:"https://firebasestorage.googleapis.com/v0/b/morochoreydavid.appspot.com/o/Actores%20PNG%2FDoctorStrnge.png?alt=media&token=44d341c2-e299-4559-b37c-46364f3b9dd1",actorImg3:"https://firebasestorage.googleapis.com/v0/b/morochoreydavid.appspot.com/o/Actores%20PNG%2FThanosZombie.png?alt=media&token=51509624-8e78-407d-aea0-5f8efdaff90e"},
    {actor1:"Lightyear",actor2:"Izzy Hawthorne",actor3:"Zurg",img: "https://archivos-cms.cinecolombia.com/images/_aliases/exhibition_embed/6/4/8/5/25846-1-esl-CO/534f53a439da-imagen_trailer_1000x510.jpg",p:"LIGHTYEAR",model:"#Thor",sipnosis:"En Lightyear luego de un incidente en el que queda abandonado en un planeta hostil a 4.2 millones de años luz de la Tierra junto a su comandante y tripulación, Buzz intenta encontrar el camino de regreso a casa a través del espacio y el tiempo.",actor1Img:"https://firebasestorage.googleapis.com/v0/b/morochoreydavid.appspot.com/o/Actores%20PNG%2FLighyear.png?alt=media&token=91d48617-e741-4976-9931-6df4760793c6",actorImg2:"https://firebasestorage.googleapis.com/v0/b/morochoreydavid.appspot.com/o/Actores%20PNG%2FIzzy%20Hawthorne.png?alt=media&token=ec679d4a-cac9-44a2-8df5-868020c54c35",actorImg3:"https://firebasestorage.googleapis.com/v0/b/morochoreydavid.appspot.com/o/Actores%20PNG%2FZurg.png?alt=media&token=ee44b1c4-86cf-458f-9fc8-b9b80bf28cb0"},
    {actor1:"Chris Pratt",actor2:"Bryce Dallas",actor3:"Laura Dern",img: "https://images6.alphacoders.com/123/1239922.jpg",p:"JURASSIC WORLD 3 DOMINION",model:"#Jurrasic",sipnosis:"Cuatro años después de la destrucción de Isla Nublar, los dinosaurios ahora conviven y cazan con los seres humanos en todo el mundo. Este frágil equilibrio remodelará el futuro y determinará, de una vez por todas, si los seres humanos seguirán en la cúspide",actor1Img:"https://firebasestorage.googleapis.com/v0/b/morochoreydavid.appspot.com/o/Actores%20PNG%2Fchris%20pratt.png?alt=media&token=69fa141e-7f2a-4cdb-a234-3a100e26a0c9",actorImg2:"https://firebasestorage.googleapis.com/v0/b/morochoreydavid.appspot.com/o/Actores%20PNG%2FBryce%20Dallas.png?alt=media&token=e08f2b9e-6d8e-4102-9c0b-0672a89b499e",actorImg3:"https://firebasestorage.googleapis.com/v0/b/morochoreydavid.appspot.com/o/Actores%20PNG%2FLaura%20Dern.png?alt=media&token=0b4fd2fc-2c1c-4115-accc-44a1753adc93"},
    {actor1:"Benedict Cumberbatch",actor2:"Elizabeth Olsen",actor3:"Benedict Wong",img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1C983C9E4FF6B2DDA6BD3272948CE3957EC8C658C5373D494052660FFD6CC307/scale?width=1200&aspectRatio=1.78&format=jpeg",p:"DOCTOR STRANGE 2",model:"#DoctoStrange",sipnosis:"En esta nueva aventura, el Doctor Strange va a poner a prueba los límites de sus poderes y esto le llevará a explorar una nueva dimensión de sus capacidades. Tras haber fallado su hechizo, cuando trataba de ayudar a Spider-Man, debera enmendar su error.",actor1Img:"https://firebasestorage.googleapis.com/v0/b/morochoreydavid.appspot.com/o/Actores%20PNG%2FBenedict%20Cumberbatch.png?alt=media&token=50cef29e-a87c-4ce4-9854-375700ea665b",actorImg2:"https://firebasestorage.googleapis.com/v0/b/morochoreydavid.appspot.com/o/Actores%20PNG%2FElizabeth%20Olsen.png?alt=media&token=57edf7d3-33d9-4ae4-82ef-5631e8b8e674",actorImg3:"https://firebasestorage.googleapis.com/v0/b/morochoreydavid.appspot.com/o/Actores%20PNG%2FBenedict%20Wong.png?alt=media&token=e28afb6b-ceae-4f6f-a8cb-c36ddacb91b1"}
  ];
  slideConfig = {"slidesToShow": 1,"nextArrow":false,"prevArrow":false,"swipeToSlide":true,"infinite":false,"accessibility":false,"swipe":false};
  slideConfigImage = {"slidesToShow": 3,"nextArrow":false,"prevArrow":false,"accessibility":false,"autoplay": true,
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
