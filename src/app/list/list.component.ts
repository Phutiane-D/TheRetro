import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data = [
    {
      srcName: "festival.jpg",
      eventName: "Cotton Fest",
      eventDescription: "Creative festival cele...",
    },
    {
      srcName: "holi.jpg",
      eventName: "ScorpionKings live",
      eventDescription: "Crazy rock band...",
    },
    {
      srcName: "camping.jpg",
      eventName: "Country Special",
      eventDescription: "The best of country...",
    },
    {
      srcName: "confetti.jpg",
      eventName: "FITMusic",
      eventDescription: "The best exercise beats...",
    }
  ]
}
