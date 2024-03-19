import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent  {

  title = 'Template driven forms';
 
  countryList:country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];

  contact!: Contact ;
  
  onSubmit(contactForm: any) {
    console.log(contactForm.value);
  }
 
  ngOnInit() {
 
    this.contact = {
      firstname: "Sachin",
      lastname: "Tendulkar",
      email: "sachin@gmail.com",
      gender: "male",
      isMarried: true,
      country: "2",
      address: { city: "Mumbai", street: "Perry Cross Rd", pincode: "400050" }
    };
  }
} 
export class country {
  id:string;
  name:string;
 
  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }
}

export class Contact {
  firstname!:string;
  lastname!:string;
  email!:string;
  gender!:string;
  isMarried!:boolean;
  country!:string;
  address!: {
    city:string;
    street:string;
    pincode:string;
  }
} 
 
 
  


