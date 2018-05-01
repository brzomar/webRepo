import { Injectable } from "@angular/core";

@Injectable()
export class ContactService {
    Users=[];

    addUser(u){
        this.Users.push(u);
    }

    getAllUser(){
        return this.Users;
    }
}