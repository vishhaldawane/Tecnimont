import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-async-await2',
  templateUrl: './async-await2.component.html',
  styleUrls: ['./async-await2.component.css']
})
export class AsyncAwait2Component implements OnInit {

  constructor(private dataService: DataService) { 
    this.loadData1();
  }

  loadData1() {
    this.dataService.getData1().subscribe((data:any)=>{
      console.log(data);
    });
  }
  
 /* async loadData2() {
    let data = await this.dataService.getData2();
    console.log(data);
  }
  */

  ngOnInit(): void {
  }

}
