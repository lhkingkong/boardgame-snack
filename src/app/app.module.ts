import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewsPageComponent } from './news-page/news-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ReservePageComponent } from './reserve-page/reserve-page.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { ShopPageComponent } from './shop-page/shop-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MainNavComponent,
    NewsPageComponent,
    ContactPageComponent,
    ReservePageComponent,
    FoodPageComponent,
    ShopPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
