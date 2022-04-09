import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

@Input() eventGroup: string ="";
@Input() pictureG: string=""; 

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onClick(){
    this.router.navigate(['/listEvents']);
  }
}
