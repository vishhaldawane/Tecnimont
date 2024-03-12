import { createCssSelector } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { CurrencyConverterService } from '../currency-converter.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent {

  selectedSource!:string;
  selectedTarget!:string;
  amountToConvert!:number;
  convertedAmount: number =0;
  
// ccs: CurrencyConverterService();

  constructor(private ccs: CurrencyConverterService) {
    //this.ccs = ccs;
  }
  
  convertIt() { //this is event function
    console.log('CurrencyConverterComponent: convert() is invoked.. ')
    this.ccs.loadAllCurrencies();
    this.ccs.findCurrentRate();
    this.convertedAmount= this.ccs.convert(this.selectedSource,this.selectedTarget,this.amountToConvert);//this is service's function
  }

}
