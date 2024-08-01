import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent {

  @Input('nameForTwo') name: string='';
  @Output("buttonPressed") eventEmitter: EventEmitter<string> = new EventEmitter<string>();

  onClick(id: number) {
    this.eventEmitter.emit(id.toString());
  }
}
