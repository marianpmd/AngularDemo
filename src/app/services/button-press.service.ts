import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ButtonPressService {

  private _pressedSubject = new BehaviorSubject<string>('');
  public buttonValue = this._pressedSubject.asObservable();


  setPressedSubject(value: string) {
    this._pressedSubject.next(value);
  }

  constructor() { }
}
