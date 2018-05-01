import { Injectable } from "@angular/core";

@Injectable()
export class AboutService {
    info={
        nom: "Berrezoug",
        prenom: "Omar",
        mail: "brz.omar@yahoo.fr",
        tel: 632997916
      };
      comments=[
    {date:new Date(), message:"A"},
    {date:new Date(), message:"B"},
    {date:new Date(), message:"C"}
      ];

      addComment(c){
          c.date = new Date();
          this.comments.push(c);
      }

      getAllComment(){
          return this.comments;
      }

      getInfo(){
          return this.info;
      }
}