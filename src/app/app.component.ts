import { ViewChildren } from '@angular/core';
import { Component } from '@angular/core';
import { CarouselComponent } from 'angular-responsive-carousel';
declare  var $:  any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    ngOnInit(){
      $('.owl-carousel').owlCarousel({
        autoplay: false,
        center: true,
        loop: true,
        nav: true,
        responsive: {
          0: {
            items: 1
          },
          400: {
            items: 2
          },
          740: {
            items: 3
          },
          940: {
            items: 5
          }
        },
      });

    }
}
