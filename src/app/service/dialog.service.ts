import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  public message = new Subject<boolean>();

  constructor() { }
  setMessage(value: boolean) {
    console.log(value,'service-checking')

    this.message.next(value);
  }
}
