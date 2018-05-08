import { Injectable } from "@angular/core";
import {Http} from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class ImagesService {

    constructor(private http:Http){
    }
  
    getImages(keyWord:String, size:number, currentPage:number){
      return this.http.get("https://pixabay.com/api/?key=8915602-e8662d005c34937276462ac90&q=" 
      + keyWord + " &per_page=" + size + "&page=" + currentPage).map(resp=>resp.json());
    }
  
} 
