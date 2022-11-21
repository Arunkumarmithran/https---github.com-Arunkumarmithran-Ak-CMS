import { Component } from '@angular/core';

@Component({
  selector: 'app-production-panel',
  templateUrl: './production-panel.component.html',
  styleUrls: ['./production-panel.component.scss']
})
export class ProductionPanelComponent  {
  latestMovies = [] as any

  img = 'https://www.dwp.in/file/wp-content/plugins/revslider/public/assets/assets/loader.gif'
  constructor() {
    this.latestMovies = [
      { thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg', title: 'Hummingbirds are amazing creatures' },
      { thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg' , title: 'Hummingbirds are amazing creatures'},
      { thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg', title: 'Hummingbirds are amazing creatures' },
      { thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg', title: 'Hummingbirds are amazing creatures' }
    ]
  }
  ngOnInit(): void{
    }
 
}
