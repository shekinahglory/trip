import { Component, OnInit } from '@angular/core';
import { JWTTokenService } from '../services/user.service.jwttokenservice';
import { LocalStorageService } from '../services/user.service.localstorage';

@Component({
  selector: 'app-accountcreated',
  templateUrl: './accountcreated.component.html',
  styleUrls: ['./accountcreated.component.css']
})
export class AccountcreatedComponent implements OnInit {

  constructor(private jwtTokenService: JWTTokenService, private localStorage: LocalStorageService) { }

  ngOnInit(): void {

    const token:any = this.localStorage.get("token");
    console.log(token);
    this.jwtTokenService.setToken(token);
    console.log(this.jwtTokenService.getDecodeToken());
    console.log(this.jwtTokenService.decodeToken())
    console.log(this.jwtTokenService.isTokenExpired())
    console.log((this.jwtTokenService.getExpiryTime() )* 1000)
    console.log(new Date().getTime());
    const tokenTime = (this.jwtTokenService.getExpiryTime() )* 1000;
    const currentTime = new Date().getTime();

    console.log(((tokenTime - currentTime) / 1000)/60)
  }

}
