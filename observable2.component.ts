import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable2',
  templateUrl: './observable2.component.html',
  styleUrls: ['./observable2.component.css']
})
export class Observable2Component implements OnInit {

  count: number=1;
  data: number[]=[];
  
  myObservable: any;

  constructor() { }

  ngOnInit(): void {
    this.myObservable = new Observable<number[]>((observer)=>{
      setInterval(()=>{
        this.count++;
        this.data.push(this.count);
        if(this.count < 5 ) {
          observer.next(this.data); //emit the data
        }
        else {
          observer.complete(); //in case if not complted
          //observer.error('DB Connection Error');
        }
      },1000);  
    });
  }

  /*getData() { //without subscribe no output in console
    console.log(this.data);
  }*/

  getData() {
    this.myObservable.subscribe((res: any)=>{
      console.log(res);
    },
    (err: any)=>{
      console.log(err);
    },
    ()=>{
      console.log('COMPLETED');
    }
    );
    console.log(this.data);
  }
}
