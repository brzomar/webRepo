import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { Router } from '@angular/router';
import { Contact } from '../../model/model.contact';

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

  constructor(private contactService:ContactsService, private router:Router) { }

  ngOnInit() {
    this.currentPage = 0;
    this.serverRequest(this.currentKeyWord)
  }

  onSearche(formData){
    this.currentPage = 0;
    this.serverRequest(formData.keyWord)
  }

  serverRequest(key:String){
    this.contactService.searchContacts(key, this.size, this.currentPage).subscribe(data=>{
    this.contactsPage=data;
    this.pages = new Array(data.totalPages);
    }, err=>{
      console.log(err)
    });
  }

  goToPage(indexPage){
    this.currentPage = indexPage;
    this.serverRequest(this.currentKeyWord);
  }

  onEditContact(id:number){
    this.router.navigate(['editContact', id]);
  }

  onDeleteContact(c:Contact){
    this.contactService.deleteContact(c.id).subscribe(data=>{
      this.contactsPage.content.splice(
        this.contactsPage.content.indexOf(c),1
      );
    }, err=>{
      console.log(err);
    })
  }
}
