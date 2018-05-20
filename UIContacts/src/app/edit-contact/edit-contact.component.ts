import { Component, OnInit } from '@angular/core';
import { Contact } from '../../model/model.contact';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  editMode:boolean=true;
  contact:Contact=new Contact();
  idContact:number;

  constructor(private activatedRoute:ActivatedRoute, private contactService:ContactsService, private router:Router) { 
    this.idContact = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.contactService.getContact(this.idContact).subscribe(data=>{
      this.contact=data;
    }, err=>{
      console.log(err);
    });
  }

  onUpdateContact(data){
    this.contactService.updateContact(data, this.contact.id).subscribe(data=>{
      this.editMode=false;
      this.contact=data;
    }, err=>{
      console.log(err);
    });
  }

  onConfirmationEdit(){
    this.editMode=true;
    this.router.navigate(['contacts']);
  }

  onCancel(){
    this.router.navigate(['contacts']);
  }

}
