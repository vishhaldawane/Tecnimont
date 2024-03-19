import { Component, OnInit } from '@angular/core';
import { ResolveEnd } from '@angular/router';

@Component({
  selector: 'app-promise2',
  templateUrl: './promise2.component.html',
  styleUrls: ['./promise2.component.css']
})
export class Promise2Component implements OnInit {

  isOnline = false;
  status ='offline';

  constructor() { }

  ngOnInit(): void {
    this.getStatus();
    //this.checkLogic();
    this.myPromise.then((res: any)=>{
      console.log(res);
      this.checkLogic();
    },
      (err:any) =>{
        console.log(err);
      }
    );
  }

  myPromise: any;

  getStatus() {
    console.log('1. getStatus() invoked..');
    this.myPromise = new Promise((resolve,reject)=>{

      setTimeout(() => {
        console.log('2. RECIEVED isOnline as true');
        this.isOnline = true;
        //resolve(this.isOnline);
        reject("DB Connection Error"); //try this instead of above resolve
      }, 3000);   

    });

  }
  checkLogic() {
    console.log('3. checkLogic invoked...')
    if(this.isOnline)
      this.status='online';
    else{
      this.status='offline';
    }
  }


}
