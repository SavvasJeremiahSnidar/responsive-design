import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss']
})
export class TilesComponent implements OnInit {

  data : {
    name : string
    subject : string
    grade : string
  }[] = [];
  i : number = 0;

  constructor() { }

  ngOnInit() {
    while(this.i < 10) {
      this.data.push({
        name: `student ${this.i}`,
        subject: 'math', 
        grade: `${this.i}`
      })
      this.i = this.i + 1
    }
    console.log(this.data)
  }

}
