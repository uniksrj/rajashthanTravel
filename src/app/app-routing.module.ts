import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { BookingsComponent } from './pages/bookings/bookings.component';

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
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
