import { ViewChildren } from "@angular/core";
import { Component } from "@angular/core";
import { CarouselComponent } from "angular-responsive-carousel";
import { CarouselModule } from "ngx-owl-carousel-o";
import { OwlOptions } from "ngx-owl-carousel-o";

export interface Slide {
  title: string;
}
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  customOptions: OwlOptions = {
    loop: true,
    nav: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay: false,
    center: true,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      }
    },
  };
  ngOnInit() {}
}
