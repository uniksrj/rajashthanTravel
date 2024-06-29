import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'rajashthanTravel';
  isLoading:boolean | undefined = true;
  LoaderPageComponent: any;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000); 
  }
}
