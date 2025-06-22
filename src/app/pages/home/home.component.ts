import { Component, Renderer2, ViewEncapsulation } from '@angular/core';
import $ from 'jquery';

// import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  encapsulation:ViewEncapsulation.None
})
export class HomeComponent {
   heading_txt : string = "We Give Trust"
   dir: string = 'assets/bus.jpg';
   bus: string = 'assets/green bus.png';
   back_bus :string = 'assets/busPotarit.jpg';
 
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  slides = [
    { icon: 'fas fa-wifi', text: 'Unlimited WiFi' },
    { icon: 'fas fa-bed', text: 'Sleeper Couch' },
    { icon: 'fas fa-bottle-water', text: 'Drinking Water' },
    { icon: 'fas fa-mug-hot', text: 'Hot Beverages' },
    { icon: 'fas fa-tv', text: 'TV' },
    { icon: 'fas fa-plug', text: 'Charger Plug' },
    // { icon: 'fas fa-bottle-water', text: 'Drinking Water' },
    { icon: 'fas fa-door-open', text: 'Emergency Exit' }
  ];

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const slickListElements = document.querySelectorAll('.slick-track');
    slickListElements.forEach((element) => {
      this.renderer.setStyle(element, 'margin-top', '10px');
    });
  }
}
