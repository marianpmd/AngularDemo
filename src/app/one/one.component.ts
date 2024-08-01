import {Component, OnInit} from '@angular/core';
import {ButtonPressService} from "../services/button-press.service";

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  containerName: string = "One";
  isDisabled: boolean = false;
  searchTerm: string = "";
  items: string[] = ["Alex", "Maria", "Mihai"];

  childName: string = "Child - Two";
  buttonPressed: string = '';

  private buttonService: ButtonPressService;

  constructor(buttonService: ButtonPressService) {
    this.buttonService = buttonService;
  }

  ngOnInit(): void {
    this.buttonService.buttonValue.subscribe(value => this.buttonPressed = value);
  }

  onButtonClick() {
    console.log(`Clicked!`)
  }


  onTwoButtonPress($event: string) {
    this.buttonPressed = $event.toString();
  }
}
