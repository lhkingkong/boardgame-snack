import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { ReservePageComponent } from './reserve-page/reserve-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ShopPageComponent } from './shop-page/shop-page.component';


const routes: Routes = [
  {
    path: 'news',
    component: NewsPageComponent
  },
  {
    path: 'food',
    component: FoodPageComponent
  },
  {
    path: 'reserve',
    component: ReservePageComponent
  },
  {
    path: 'shop',
    component: ShopPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: '**',
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
