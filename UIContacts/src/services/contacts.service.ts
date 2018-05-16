import { Injectable } from "@angular/core";
import {Http} from '@angular/http';
import "rxjs/add/operator/map";


@Injectable()
export class ContactsService{

    constructor(private http:Http){
    }

    searchContacts(keyWord:String, size:number, currentPage:number){
        var url = "http://localhost:8080/searchContacts?keyWord=" 
        + keyWord + "&size=" + size + "&page=" + currentPage;
        console.log(url);
        return this.http.get(url).map(resp=>resp.json());
      }
}