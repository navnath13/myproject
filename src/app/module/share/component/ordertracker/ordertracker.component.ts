import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ordertracker',
  templateUrl: './ordertracker.component.html',
  styleUrls: ['./ordertracker.component.css']
})
export class OrdertrackerComponent {
  @Input() activeStep:any;
  @Input() steps:any;
}
