import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  latestMovies = [] as any

  img = 'https://www.dwp.in/file/wp-content/plugins/revslider/public/assets/assets/loader.gif'
  constructor() {
    this.latestMovies = [
      { thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg', title: 'Hummingbirds are amazing creatures' },
      { thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg' , title: 'Hummingbirds are amazing creatures'},
      { thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg', title: 'Hummingbirds are amazing creatures' },

      { thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg', title: 'Hummingbirds are amazing creatures' },
      { thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg', title: 'Hummingbirds are amazing creatures' }
    ]
  }
  ngOnInit(): void{
      console.log('home')
    
    
    }
}
