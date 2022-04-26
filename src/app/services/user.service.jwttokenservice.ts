import { ThrowStmt } from "@angular/compiler";
import { Injectable } from "@angular/core";
import jwt_decode from "jwt-decode";



@Injectable()
export class JWTTokenService {

    jwtToken:string= '';
    decodedToken?: { [key:string]: string} ;

    constructor(){

    }

    setToken(token: string){
        if(token){
               this.jwtToken = token;
        }
    }

    decodeToken(){
        if(this.jwtToken){
            this.decodedToken = jwt_decode(this.jwtToken);
        }
    }

    getDecodeToken(){
        return jwt_decode(this.jwtToken);
    }

    getUser(){
        this.decodeToken();
        return this.decodedToken ? this.decodedToken.username : null;
    }

    getEmailId(){
        this.decodeToken();
        return this.decodedToken ? this.decodedToken.email : null;
    }

    getExpiryTime():any{
        this.decodeToken();
        return this.decodedToken ? this.decodedToken.exp : null;
    }

    isTokenExpired():boolean {
        const expiryTime: any = this.getExpiryTime();
        if(expiryTime){
            return((1000 * expiryTime) - (new Date()).getTime()) < 5000;
        } else {
            return false;
        }
    }

}