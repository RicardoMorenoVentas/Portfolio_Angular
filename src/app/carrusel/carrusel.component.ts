import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent {

  images = [944, 1011, 984, 970, 1024].map((n) => `https://picsum.photos/id/${n}/1920/500`);

  constructor(private config : NgbCarouselConfig){
    this.config.interval = 5000;
    this.config.wrap = true;
    this.config.keyboard = true;
    this.config.pauseOnHover = true;
  }
}
