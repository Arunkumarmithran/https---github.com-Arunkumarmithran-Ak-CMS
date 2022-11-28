import { Component } from '@angular/core';

@Component({
  selector: 'app-production-panel',
  templateUrl: './production-panel.component.html',
  styleUrls: ['./production-panel.component.scss']
})
export class ProductionPanelComponent  {
  onChanges='home';
  // about!:string;
  // movies!:string;
  // events!:string;
  // teaser!:string;
  // onChanges!:string


  constructor() {
  
  }
  ngOnInit(): void{
    }
    componentAction(data:string){
      this.onChanges=data
console.log(data,'Arunkm')
    }
 
}
