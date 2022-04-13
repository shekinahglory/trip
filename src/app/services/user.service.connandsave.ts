import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserServiceService } from "./user-service.service";




@Injectable({
    providedIn: 'root'
  })
export class ConnecAndSave {


    private backEndUrl =  "http://localhost:8080/api/signup/user/save";

    constructor(private http: HttpClient){

    }




     saveUser(user: any){

         return this.http.post(this.backEndUrl, user, {responseType: 'text'});

    }

}