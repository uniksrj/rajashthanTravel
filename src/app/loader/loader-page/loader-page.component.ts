import { Component, OnChanges, OnInit, SimpleChanges, input } from '@angular/core';

@Component({
  selector: 'app-loader-page',
  templateUrl: './loader-page.component.html',
  styleUrl: './loader-page.component.css'
})
export class LoaderPageComponent implements OnInit, OnChanges{

 @input() isFade: boolean | undefined = true;

  display = true;
  // isFade: any;

  constructor(){}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['isLoading'] && !changes['isLoading'].firstChange && !this.isFade){
      this.fadeOut();
      
    }
}
  ngOnInit(): void {
      
  }
 

  fadeOut(){
    const preloader = document.querySelector('.preloader-overlay') as HTMLElement;
    if(preloader){
      preloader.style.animation = 'fadeOut 0.4s both';
      setTimeout(() => {
        this.display = false;
      }, 400);
    }
  }

}
