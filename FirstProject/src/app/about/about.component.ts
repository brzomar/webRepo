import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  info:any;
  comments=[];
  commentaire1={
    date:null, message:''
  };
  commentaire2={
    date:null, message:''
  };
  constructor(private abooutService:AboutService) {
    this.info=this.abooutService.getInfo();
    this.comments=this.abooutService.getAllComment();
   }

  ngOnInit() {
  }

  onAddCommentaire(){
    this.abooutService.addComment(this.commentaire1);
    this.commentaire1={date:null,message:''};
  }
  
  onAddCommentaireForForm(c){
    this.abooutService.addComment(c);
    this.commentaire2={date:null,message:''};
  }

}
