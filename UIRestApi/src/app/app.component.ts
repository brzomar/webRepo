import { Component } from '@angular/core';
import "rxjs/add/operator/map";
import { ImagesService } from '../services/images.service';
import { error } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imagesPage: any;
  currentPage: number;
  size:number=10;
  pages:Array<number>=[];
  totalPages:number;
  currentKeyWord:String="";

  constructor(private imagesService:ImagesService){
  }

  onSearche(dataForm){
    this.currentPage = 1;
    this.serverRequest(dataForm)
  }

  goToPage(indexPage){
    this.currentPage = indexPage+1;
    this.serverRequest({keyWord:this.currentKeyWord});
  }

  serverRequest(data){
      this.imagesService.getImages(data.keyWord, this.size, this.currentPage).subscribe(data=>{
      this.imagesPage=data;
      this.totalPages = Math.trunc(data.totalHits/this.size);
      var remainder = data.totalHits % this.size;
      if (remainder != 0) {
        ++this.totalPages;
      }
      this.pages = new Array(this.totalPages);
    }, err=>{
      console.log(err)
    });
  }

}
