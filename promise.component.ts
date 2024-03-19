import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  isOnline = false;
  status ='offline';

  constructor() { }

  ngOnInit(): void {
    this.getStatus();
    this.checkLogic();
  }

  getStatus() {
    console.log('1. getStatus() invoked..')
    //this.isOnline =   true; //1st way
    setTimeout(() => {
      console.log('2. RECIEVED isOnline as true');
      this.isOnline = true;
    }, 3000);  //2nd wayt
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
