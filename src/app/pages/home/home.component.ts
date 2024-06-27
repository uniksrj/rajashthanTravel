import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers : [NgbCarouselConfig]
})
export class HomeComponent{
   heading_txt : string = "We Give Trust"
   dir: string = 'assets/bus.jpg';
   bus: string = 'assets/green bus.png';
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
 
}
