import { Component } from '@angular/core';
import {ButtonPressService} from "../services/button-press.service";

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent {

  private buttonService: ButtonPressService;

  constructor(buttonService: ButtonPressService) {
    this.buttonService = buttonService;
  }

  buttonClick(id: number) {
    this.buttonService.setPressedSubject(id.toString());
  }
}
