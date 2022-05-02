import { Injectable } from "@angular/core";



@Injectable()
export class CommonService {


    userInfo =[];


    getUserInfo(){
        return this.userInfo;
    }

    setUserService(userInfo:[]){
        this.userInfo = userInfo
    }

}