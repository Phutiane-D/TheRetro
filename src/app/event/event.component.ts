import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

 @Input() eventName: string = '';
 @Input() eventDescription: string = '';
 @Input() srcName: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
