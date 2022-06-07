import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../services/user.service.dashboardservice';
import { JWTTokenService } from '../services/user.service.jwttokenservice';
import { LocalStorageService } from '../services/user.service.localstorage';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  rightSideContent = 1;
  accountsetting = true;
  editabout = false;
  deleteaccount = false;
  username:any = '';
  profileImage = '';
  mesconpage = 1;
  isSelected = true;
  notSelected = false;
  mesconsmallscreenisSelected = false;
  imgActivated = true;
  stgsActivated = false;
  dltActivated = false;

  mesconsmallscreen:any;

  @ViewChild("mescon") messCon: ElementRef | undefined;
  

  constructor(private router: Router, private localeStorage: LocalStorageService,
              private jwtTokenService: JWTTokenService, private dashboardService: DashboardService) { }

  openPage(val : any){
     
    if(this.isSelected == true){
      this.isSelected = false;
      this.mesconpage = 2;
    } else {
      this.isSelected = true;
      this.mesconpage = 1;
    }

  }

 

  changeStyle($event:any){
      
  }

  ngOnInit(): void {

    
    if(window.innerWidth >= 1150 && !(this.router.url === "/dashboard/accountsettings")
       || !(this.router.url == "/dashboard/deleteaccount") || !("dashboard/editabout") 
       ){
      this.mesconsmallscreen = false;
    } else {
     
      this.mesconsmallscreen = true;
    }
    

    let token:any = this.localeStorage.get('token');
    this.jwtTokenService.setToken(token);
    this.username = this.jwtTokenService.getUser();
   

  
    if(this.router.url === "/dashboard/accountsettings"){
      this.mesconsmallscreen = false;
 
      this.deleteaccount = false;
      this.editabout = false;
      this.accountsetting = true;
    }
    if(this.router.url === "/dashboard/deleteaccount"){
      this.mesconsmallscreen = false;

      this.deleteaccount = true;
      this.editabout = false;
      this.accountsetting = false;

    }
    if(this.router.url === "dashboard/editabout"){
      this.mesconsmallscreen = false;
     
      this.deleteaccount = false;
      this.editabout = true;
      this.accountsetting = false;

    }
    
    this.dashboardService.getUserImages(this.username).subscribe(
        data => {
        
          this.localeStorage.set('userinfo', data.username);
          this.profileImage = data.imageUrl;
        }
    )
       

    if(this.router.url === '/dashboard/accountsettings' || this.router.url === '/dashboard/deleteaccount' 
    ||  this.router.url === '/dashboard/editabout'
    ){
      this.rightSideContent = 2;
    } else {
      this.mesconsmallscreen = true;
    }

    if(this.router.url === '/dashboard/deleteaccount'){
      this.deleteaccount = true;
      this.editabout = false;
      this.accountsetting = false;
     }
     if(this.router.url === '/dashboard/accountsettings'){
      this.deleteaccount = false;
      this.editabout = false;
      this.accountsetting = true;
     }
     if(this.router.url === '/dashboard/editabout'){
      this.deleteaccount = false;
      this.editabout = true;
      this.accountsetting = false;
     }
    

   
  }

  editProfile(){
    if(this.rightSideContent == 1){
      this.rightSideContent = 2;
      this.router.navigateByUrl("/dashboard/accountsettings")
      this.mesconsmallscreen = false;
    } else {
      this.mesconsmallscreen = true;
      this.rightSideContent = 1;
      this.router.navigateByUrl("/dashboard")
    }
    
    
   
  }

  openMessagePage(){
    this.mesconsmallscreenisSelected = true;
    this.isSelected = false;

 }

  peopleButtonClicked(){
     this.mesconsmallscreen = true;
     this.isSelected = true;
    //  this.router.navigateByUrl("/dashboard")
  }

  gotoDeleteaccount(){
       if(this.router.url != '/dashboard/deleteaccount'){
        this.router.navigateByUrl("/dashboard/deleteaccount");
       }
       this.deleteaccount = true;
       this.editabout = false;
       this.accountsetting = false;
     
  }

  gotoProfileImages(){
    if(this.router.url != '/dashboard/accountsettings'){
      this.router.navigateByUrl("/dashboard/accountsettings");
     }

     this.deleteaccount = false;
     this.editabout = false;
     this.accountsetting = true;
  }

  gotoAbout(){
    if(this.router.url != '/dashboard/editabout'){
      this.router.navigateByUrl("/dashboard/editabout");
     }

     this.deleteaccount = false;
     this.editabout = true;
     this.accountsetting = false;
  }
  

  logout(){

    this.localeStorage.remove('token');
    this.router.navigateByUrl("/login");
  }
  
}
