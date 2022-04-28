import { Injectable } from "@angular/core";
import { JWTTokenService } from "./user.service.jwttokenservice";
import { LocalStorageService } from "./user.service.localstorage";




@Injectable()
export class AuthService{


    constructor(private tokenService: JWTTokenService, private localStorage: LocalStorageService){

    }


      isLoggedIn():boolean{
          const token:any = this.localStorage.get("token");
          this.tokenService.setToken(token);

          if(this.tokenService.getExpiryTime()){
                return true;
          } else {
              return false;
          }

      }

}