import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  users=[];
  user={name:'',userName:'',adress:''};

  constructor(private contactService:ContactService) { 
    this.users = this.contactService.getAllUser();
  }

  ngOnInit() {
  }

  onAddUser(u){
    this.contactService.addUser(u);
    this.user={name:'',userName:'',adress:''};
  }
  
}
