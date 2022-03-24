import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(this.router.url === '/dashboard/accountsettings' || this.router.url === '/dashboard/deleteaccount' 
    ||  this.router.url === '/dashboard/editabout'
    ){
      this.rightSideContent = 2;
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
    } else {
      this.rightSideContent = 1;
      this.router.navigateByUrl("/dashboard")
    }
    
    
   
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
  
  
}
