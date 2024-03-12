import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent  {

  books: Book[]= [
    {bookId:123,bookName:"Java11",bookAuthor:'James Gosling',bookPrice:1550},
    {bookId:223,bookName:"Oracle18",bookAuthor:'Scott M',bookPrice:2550},
    {bookId:323,bookName:"Unix",bookAuthor:'Richard S',bookPrice:1550},
    {bookId:423,bookName:"Asp.Net",bookAuthor:'David Paquette',bookPrice:517},
    {bookId:523,bookName:"Angular",bookAuthor:'Pablo Deeleman',bookPrice:3099},
  ]
  selectedBookName: string = this.books[0].bookName;
}

export class Book {
  bookId: number=0;
  bookName: string='';
  bookAuthor: string="";
  bookPrice: number=0;
}
