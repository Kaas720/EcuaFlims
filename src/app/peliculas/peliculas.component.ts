import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  constructor() { }
  slides = [
    {img: "https://www.themoviedb.org/t/p/original/zFTLPipninMF4THDbdkQUZLWMEw.jpg"},
    {img: "https://www.themoviedb.org/t/p/original/qFAVW4XJaxhj7PcpiUI5hhO9bOX.jpg"},
    {img: "https://www.themoviedb.org/t/p/original/odBUpjZGxY3y7FBo5NBtEYGJf5r.jpg"},
    {img: "https://www.themoviedb.org/t/p/original/k5waciRFMN5bwudDrgFLffoAorm.jpg"},
    {img: "https://www.themoviedb.org/t/p/original/baOzlpQllZbjyNBcTdeXESh9Y0M.jpg"},
    {img: "https://www.themoviedb.org/t/p/original/68W2DvgAXWlQ2XrSEBKDqBZwuub.jpg"},
    {img: "https://www.themoviedb.org/t/p/original/9oERKIVyTWpHNum3STVsAGD4ojz.jpg"},
    {img: "https://www.themoviedb.org/t/p/original/knRt4E8KyfwEv0SVu9LsLvD28IQ.jpg"},
    {img: "https://www.themoviedb.org/t/p/original/220fvwTHqV7nNpRpZItmbVCHLjC.jpg"}
  ];

  slides1 = [
    {img: "https://www.themoviedb.org/t/p/original/owF9NIcQOPFAOjp2pni8BsVlnRq.jpg"},
    {img: "https://www.themoviedb.org/t/p/original/bjk8F2hDzuOiDRPqK2GpWUgkrwy.jpg"},
    {img: "https://www.themoviedb.org/t/p/original/w4wVmhQ6JH7G7eLdIkfOv17iyBy.jpg"},
    {img: "https://www.themoviedb.org/t/p/original/2iYS1XVm8vh5vokZhO3N4dtgODn.jpg"},
    {img: "https://www.themoviedb.org/t/p/original/5dN112OTkbWTah8PJA9dzQsUE47.jpg"},
    {img: "https://www.themoviedb.org/t/p/original/a8ogjWFd0QS6BzBkzfDMWukc26i.jpg"},
    {img: "https://www.themoviedb.org/t/p/original/6fzyU1Mb7mbzcB2xFQc54bO3JDX.jpg"},
    {img: "https://www.themoviedb.org/t/p/original/chgaG2mUPGZ0Wj6YS9SbCNEiLnL.jpg"},
    {img: "https://www.themoviedb.org/t/p/original/hAy2yUav8QPnDzfOGihNI527NjY.jpg"}
  ];
  slides2 = [
    {img: "https://www.themoviedb.org/t/p/original/5QkoSqDPwSVWx51r2lBCUre7GzE.jpg"},
    {img: "https://www.themoviedb.org/t/p/original/d45faoiDeZsrdIdYpLy34vtYf3S.jpg"},
    {img: "https://www.themoviedb.org/t/p/original/kdg6Y06jfq9FV7qknWNcKLYtBJn.jpg"},
    {img: "https://www.themoviedb.org/t/p/original/xR3M7IrYpp5akX4QdDewGDKbqLF.jpg"},
    {img: "https://www.themoviedb.org/t/p/original/bCDaKZLRkrVVtPNyHxUfKvepW1N.jpg"},
    {img: "https://www.themoviedb.org/t/p/original/4WtQBxUkwKYOTvYwdsznQbTI9eN.jpg"},
    {img: "https://www.themoviedb.org/t/p/original/tHoASPhXRGJM6XFvDooJHIFcP3r.jpg"},
    {img: "https://www.themoviedb.org/t/p/original/aKw7oqYdfn4pkKYvp18Gd1YhK6m.jpg"},
    {img: "https://www.themoviedb.org/t/p/original/9BVwATUyspEyWwW4H6ZbfBY0HxM.jpg"}
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
  slickModal!: SlickCarouselComponent;
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

  ngOnInit(): void {
  }

}
