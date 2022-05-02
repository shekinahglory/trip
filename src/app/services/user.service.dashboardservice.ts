import { HttpClient, HttpHeaders, HttpParams, HttpParamsOptions } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LocalStorageService } from "./user.service.localstorage";



@Injectable()
export class DashboardService {
    
    userImagesUrl = "http://localhost:8080/api/dashboard/userinfo"

    constructor(private localStore: LocalStorageService, private httpClient: HttpClient
        , ){

    }

    getUserImages(username:any){
       

      let token =  this.localStore.get('token');
      let httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token })
      };

      const headers = new HttpHeaders({ 'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token });
   
      const usernameObj:any = {'username': username}
      const httpParams: HttpParamsOptions = {'username' : username} as HttpParamsOptions;

      const options = {
          headers: {
            
            "Authorization": "Bearer " + token
          }, 
          params: {'username' : username}}
    return  this.httpClient.get<any>(this.userImagesUrl, options);

    }
}