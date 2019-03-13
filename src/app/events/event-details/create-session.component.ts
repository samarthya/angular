import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: "./create-session.component.html",
  styleUrls: ['create.style.css'],
})
export class CreateSessionComponent implements OnInit{
  constructor() {

  }

  ngOnInit() {
    console.log(' Initialized : CreateSessionComponent. ');
  }
}
