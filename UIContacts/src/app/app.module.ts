import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import {Routes, RouterModule} from '@angular/router';
import { NewContactComponent } from './new-contact/new-contact.component';
import { ContactsService } from '../services/contacts.service';
import { HttpModule } from '@angular/http';
const routes:Routes=[
  {path:'contacts',component:ContactsComponent},
  {path:'newContact',component:NewContactComponent},
  {path:'',redirectTo:'contacts',pathMatch:'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    NewContactComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), HttpModule, FormsModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
