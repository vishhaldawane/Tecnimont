import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mdf',
  templateUrl: './mdf.component.html',
  styleUrls: ['./mdf.component.css']
})
export class MdfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'mdf';
 
  contactForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl()
  })
 
 
  onSubmit() {
    console.log(this.contactForm.value);
  }
  
}
