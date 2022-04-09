import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the-retro';
  data = [
    {id:1, pic:"../../assets/camping.jpg", date: '2017-01-01', name:'Camping', det:'lets see if this works...'},
    // {id:2, pic:, date:, name:, det:},
    // {id:3, pic:, date:, name:, det:},
    // {id:4, pic:, date:, name:, det:},
    // {id:5, pic:, date:, name:, det:},

  ];
}
