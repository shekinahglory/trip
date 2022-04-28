import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JWTTokenService } from '../services/user.service.jwttokenservice';
import { LocalStorageService } from '../services/user.service.localstorage';
import { LoginService } from '../services/user.service.loginservice';

@Component({
  selector: 'app-accountcreated',
  templateUrl: './accountcreated.component.html',
  styleUrls: ['./accountcreated.component.css']
})
export class AccountcreatedComponent implements OnInit {

  constructor(private jwtTokenService: JWTTokenService, private localStorage: LocalStorageService
    , private router: Router) { }

  ngOnInit(): void {

    const token:any = this.localStorage.get("token");
    console.log(token);
    this.jwtTokenService.setToken(token);
    console.log(this.jwtTokenService.getDecodeToken());
    console.log(this.jwtTokenService.decodeToken())
    console.log(this.jwtTokenService.isTokenExpired())
    
    
   
  }

  goToDashBoard(){
      this.router.navigateByUrl("/dashboard")
  }

}
