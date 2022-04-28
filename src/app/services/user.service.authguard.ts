import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./user.service.authservice";
import { JWTTokenService } from "./user.service.jwttokenservice";
import { LocalStorageService } from "./user.service.localstorage";



@Injectable(
    {providedIn: 'root'}
)
export class AuthorizeGuard implements CanActivate{


    constructor(private authservice: AuthService, private localStorage: LocalStorageService,
         private router: Router, private jwtservice: JWTTokenService){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree 
    | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

      let token:any =  this.localStorage.get('token');
      this.jwtservice.setToken(token);
       
         if(this.jwtservice.isTokenExpired()){
                // this.localStorage.remove('token');
                console.log(true);
                return  this.router.navigateByUrl("/login");
         } else  {
             return true;
         }
       
    }

}