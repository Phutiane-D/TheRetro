import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

@Input() eventGroup: string ="";
@Input() pictureG: string=""; 

  constructor() { }

  ngOnInit(): void {
  }
onClick(){
  console.log("Clicked");
}
}
