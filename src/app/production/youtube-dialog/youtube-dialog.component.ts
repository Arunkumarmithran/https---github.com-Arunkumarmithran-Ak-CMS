import { Component,OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DialogService } from 'src/app/service/dialog.service';

@Component({
  selector: 'app-youtube-dialog',
  templateUrl: './youtube-dialog.component.html',
  styleUrls: ['./youtube-dialog.component.scss']
})
export class YoutubeDialogComponent implements OnInit, OnDestroy{
  displayDialog=false;
  subscription = new Subscription();

  constructor (private dialogService:DialogService) {}
  ngOnInit(): void {
    this.dialogService.message.subscribe((message: any) => {
      this.displayDialog=message
      console.log(message,'dialog')
     });
  }  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
