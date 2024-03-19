import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  count: number=1;
  data: number[]=[];
  
  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      this.count++;
      this.data.push(this.count);
    },1000);
  }

  getData() {
    console.log(this.data);
  }
}
