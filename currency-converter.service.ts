import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {

  constructor() { }
  convert(s:string, t:string, a: number) : number { // <-- service's function
    let amount=0;  
    console.log('convert()');
    console.log(s);
    console.log(t);
    console.log(a);
    if(s=='INR' && t=='USD') {
      amount = a / 82;
    }
    else if(s=='USD' && t=='INR') {
      amount = a * 82;
    }
    return amount;
  }
  loadAllCurrencies() {
    console.log('loadAllCurrencies()');

  }
  findCurrentRate() {
    console.log('findCurrentRate()');

  }
}
