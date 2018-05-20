import { Injectable } from "@angular/core";
import {Http} from '@angular/http';
import "rxjs/add/operator/map";
import { Contact } from "../model/model.contact";


@Injectable()
export class ContactsService{

    constructor(private http:Http){
    }

    searchContacts(keyWord:String, size:number, currentPage:number){
        var url = "http://localhost:8080/searchContacts?keyWord=" 
        + keyWord + "&size=" + size + "&page=" + currentPage;
        return this.http.get(url).map(resp=>resp.json());
    }

    getContact(id:number){
        var url = "http://localhost:8080/contact/" + id; 
        return this.http.get(url).map(resp=>resp.json());
    }

    saveContact(contact:Contact){
        var url = "http://localhost:8080/contact";
        return this.http.post(url,contact).map(resp=>resp.json());
    }

    updateContact(contact:Contact, id:number){
        var url = "http://localhost:8080/contact/" + id;
        return this.http.put(url,contact).map(resp=>resp.json());
    }

    deleteContact(id:number){
        var url = "http://localhost:8080/contact/" + id;
        return this.http.delete(url).map(resp=>resp);
    }
}