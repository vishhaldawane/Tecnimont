import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.css']
})
export class AsyncAwaitComponent implements OnInit {

  constructor() { 
    console.log('1.AsyncAwaitComponent: constructor');
    this.displayData();
  }

  ngOnInit(): void {
  }

  fetchData() {
    return new Promise((resolve)=>{
      setTimeout(() => {
        console.log('3.AsyncAwaitComponent: setTimeout()');
        resolve('data');
      }, 2000);
    });
  }

  displayData() {
    this.fetchData()
    .then((data)=> {
      console.log('2.AsyncAwaitComponent: displayData()');
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
  }


  
  async displayData2() {
    try {
      console.log('2.AsyncAwaitComponent: displayData2()');
      let response = await this.fetchData();
     // console.log('displayData2() response : ',response);
    }
    catch(e) {
      console.log(e);
    }
  }

//a'synchronous'
  
}
