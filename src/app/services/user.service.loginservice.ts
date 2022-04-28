import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";



@Injectable()
export class LoginService{

    
    private loginUrl = 'http://localhost:8080/api/login';
    private userInfoUrl = 'http://localhost:8080/api/dashboard/userinfo'

    constructor(private httpClient: HttpClient){

    }


    loginUser(username:any, password:any){
        const params = new HttpParams().set('username', username).set('password', password);
        // this.http.post(this.checkUsernameExistUrl, username, {params, responseType: 'text'});
        const body = { username, password };

      return this.httpClient.post<any>(this.loginUrl , body, { params });
    }

    getUserInfo(username:any){
      
        const params = new HttpParams().set('username', username);
        return this.httpClient.get<any>(this.userInfoUrl,  {params});
    }




}