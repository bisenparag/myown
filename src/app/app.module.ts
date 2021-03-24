import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { IvyCarouselModule } from "angular-responsive-carousel";
import { CarouselModule } from "ngx-owl-carousel-o";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IvyCarouselModule, CarouselModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
