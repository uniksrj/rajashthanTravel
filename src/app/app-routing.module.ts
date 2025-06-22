import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { BookingsComponent } from './pages/bookings/bookings.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

const routes: Routes = [
  {path: "",
    redirectTo:'home',
    pathMatch : "full"
  },
  {
    path : "home",
    component : HomeComponent
  },
  {
    path : "search",
    component : SearchComponent
  },
  {
    path : "bookings",
    component : BookingsComponent
  },
  {
    path : "aboutus",
    component: AboutUsComponent
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 0]
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
