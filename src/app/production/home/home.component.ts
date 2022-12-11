import { Component } from '@angular/core';
import { DialogService } from 'src/app/service/dialog.service';
import { YoutubeDialogComponent } from '../youtube-dialog/youtube-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  latestMovies = [] as any
  eventImage = [] as any
  displayDialog=false;

  img = 'https://www.dwp.in/file/wp-content/plugins/revslider/public/assets/assets/loader.gif'
  constructor( private dialogService:DialogService) {
    this.latestMovies = [
      { thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg', title: 'Hummingbirds are amazing creatures' },
      { thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg' , title: 'Hummingbirds are amazing creatures'},
      { thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg', title: 'Hummingbirds are amazing creatures' },

      { thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg', title: 'Hummingbirds are amazing creatures' },
      { thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg', title: 'Hummingbirds are amazing creatures' }
    ]
    this.eventImage = [
      {thumbImage:'https://www.dwp.in/file/wp-content/uploads/2020/12/filn-fare-awards.png'},
      {thumbImage:'https://www.dwp.in/file/wp-content/uploads/2020/12/Chennai-International-Film-Festival.png'},
      {thumbImage:'https://www.dwp.in/file/wp-content/uploads/2020/12/Behindwoods-Gold-Medal.png'},
      {thumbImage:'https://www.dwp.in/file/wp-content/uploads/2020/12/Ananda-Vikatan-Cinema-Awards.png'},
      {thumbImage:'https://www.dwp.in/file/wp-content/uploads/2020/12/Zee-Cine-Awards-1.png'},
   
    ]
  }
  ngOnInit(): void{
    
    }
    dialogOpen() {
      console.log('home-triggerd')

      this.displayDialog = true;
      this.dialogService.setMessage((this.displayDialog = true));
    }
}
