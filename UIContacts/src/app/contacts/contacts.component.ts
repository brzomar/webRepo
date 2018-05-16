import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contactsPage: any;
  currentKeyWord="";
  pages:Array<number>=[];
  currentPage: number;
  size:number=5;

  constructor(private contactService:ContactsService) { }

  ngOnInit() {
    this.currentPage = 1;
    this.serverRequest(this.currentKeyWord)
  }

  onSearche(formData){
    this.currentPage = 1;
    this.serverRequest(formData.keyWord)
  }

  serverRequest(key:String){
    this.contactService.searchContacts(key, this.size, this.currentPage).subscribe(data=>{
    console.log(data);
    this.contactsPage=data;
    this.pages = new Array(data.totalPages);
    }, err=>{
      console.log(err)
    });
  }

  goToPage(indexPage){
    this.currentPage = indexPage+1;
    this.serverRequest(this.currentKeyWord);
  }
}
