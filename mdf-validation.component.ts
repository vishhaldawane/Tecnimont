import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mdf-validation',
  templateUrl: './mdf-validation.component.html',
  styleUrls: ['./mdf-validation.component.css']
})
export class MdfValidationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Angular Reactive forms';
 
 
  contactForm = new FormGroup({
    firstname: new FormControl('',[Validators.required,Validators.minLength(10)]),
    lastname: new FormControl('',[Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]),
    email:new FormControl('',[Validators.email,Validators.required]),
    gender: new FormControl('',[Validators.required]),
    isMarried: new FormControl('',[Validators.required]),
    country: new FormControl('',[Validators.required])
  })
 
  get firstname() {
    return this.contactForm.get('firstname');
  } 
 
  get lastname() {
    return this.contactForm.get('lastname');
  } 
 
  get email() {
    return this.contactForm.get('email');
  } 
 
  get gender() {
    return this.contactForm.get('gender');
  } 
 
  get isMarried() {
    return this.contactForm.get('isMarried');
  } 
 
  get country() {
    return this.contactForm.get('country');
  } 
  
 
 
  countryList: country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];
 
 
 
 
  onSubmit() {
    console.log(this.contactForm.value);
  }
 
}


export class Contact {
  firstname!:string;
  lastname!:string;
  gender!:string;
  isMarried!:boolean;
  country!:string;
} 

export class country {
  id: string;
  name: string;
 
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}