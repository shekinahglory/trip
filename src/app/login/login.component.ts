import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JWTTokenService } from '../services/user.service.jwttokenservice';
import { LocalStorageService } from '../services/user.service.localstorage';
import { LoginService } from '../services/user.service.loginservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:any;
  password:any;
  emailEmpty = false;
  passwordEmpty = false;
  loginError = false;

  constructor(private router: Router, private jwtService: JWTTokenService, 
    private localeStore: LocalStorageService, private loginService: LoginService) { }

  ngOnInit(): void {
  }


  loginUser(){
       
      if(!this.email ){
        this.emailEmpty = true;
      }
      if(!this.password){
        this.passwordEmpty = true;
      }
      if(this.email && this.password){
        
          this.loginService.loginUser(this.email, this.password).subscribe(
               
               data => {
                 
                 this.localeStore.set('token', data.access_token);
                 this.router.navigateByUrl("/dashboard");
               },
               error => {
                   this.loginError = true;
                  
               }

          )
      }

  }

  emailChanged(event:any){
      if(event.data){
         this.emailEmpty = false;
      }
  }

  passwordChanged(event:any){
     if(event.data){
       this.passwordEmpty = false;
     }
  }

  createAccount(){
    this.router.navigateByUrl("signup")
  }

}
