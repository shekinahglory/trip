import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { concat } from "rxjs";
import { UserServiceService } from "./user-service.service";




@Injectable({
    providedIn: 'root'
  })
export class ConnecAndSave {


    private backEndUrl =  "http://localhost:8080/api/signup/user/save";
    private saveImageUrl:string = "http://localhost:8080/api/signup/user/save/images";
    private checkUsernameExistUrl = "http://localhost:8080/api/signup/user/checkUsernameExist";
    private checkEmailExistUrl = "http://localhost:8080/api/signup/user/checkEmailExist"

    constructor(private http: HttpClient){

    }


    
    checkEmail(email:any){
    

      const params = new HttpParams().set('email', email)
      

      return this.http.post(this.checkEmailExistUrl + "?", email, {params,responseType: 'text'});
    }

    checkUsername(username:any){
      const params = new HttpParams().set('username', username)
      return this.http.post(this.checkUsernameExistUrl, username, {params, responseType: 'text'});
    }

     saveUser(user: any){

         return this.http.post(this.backEndUrl, user, {responseType: 'text'}) ;

    }
    saveImage(image: any){
      return this.http.post(this.saveImageUrl, image, {responseType: 'text'} );
  }


    trymulti(){

      for(let i =0; i < 3; i++){
        console.log("working " + i);
      }
    }

}