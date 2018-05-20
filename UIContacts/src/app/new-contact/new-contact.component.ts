import { Component, OnInit } from '@angular/core';
import { Contact } from '../../model/model.contact';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  contact:Contact = new Contact();
  editMode:boolean=true;

  constructor(private contactService:ContactsService) { }

  ngOnInit() {
  }

  onAddContact(data){
    this.contact = data;
    this.contactService.saveContact(data).subscribe(data=>{
      this.contact=data;
      this.editMode=false;
    }, err=>{
      console.log(JSON.parse(err._body).message);
    });
  }
}
