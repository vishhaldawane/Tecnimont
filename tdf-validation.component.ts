import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf-validation',
  templateUrl: './tdf-validation.component.html',
  styleUrls: ['./tdf-validation.component.css']
})
export class TdfValidationComponent implements OnInit {

  constructor() { }

  title = 'Template driven forms';
 
  @ViewChild('contactForm') contactForm: NgForm | undefined;
 
  contact!:Contact;
 
  ngOnInit() {
 
    this.contact = { 
      firstname:"",
      lastname:"",
      gender:"male",
      isToc:true,
      email:"",
    };
 
  }
 
  onSubmit() {
    console.log(this.contactForm);
  }
 
}
 
export class Contact {
  firstname:string='';
  lastname:string='';
  gender:string='';
  isToc:boolean=false;
  email:string='';
} 

