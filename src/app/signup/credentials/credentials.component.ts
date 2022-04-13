import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AboutUser } from 'src/app/models/app.model.AboutUser';
import { ITEMS_DRINK } from 'src/app/models/app.model.itemdrink';
import { ITEMS_SMOKE } from 'src/app/models/app.model.itemsmoke';
import { Item } from 'src/app/models/app.radio.radioItem';

import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.css']
})
export class CredentialsComponent implements OnInit {

  radioSel:any;
  radioSelected:string;
  radioSelectedString?:string;
  itemsList: Item[] = ITEMS_DRINK;

  radioSelSmoker:any;
  radioSelectedSmoker:string;
  radioSelectedStringSmoker?:string;
  itemsListSmoker: Item[] = ITEMS_SMOKE;

  aboutUser?: AboutUser;

  about:string = '';
  interest:string = '';

  constructor(private router: Router, private userService: UserServiceService) { 

    this.itemsList = ITEMS_DRINK;
    this.itemsListSmoker = ITEMS_SMOKE;
    this.radioSelected = "Never";
    this.radioSelectedSmoker = "Non Smoker";
  }
  getSelecteditem(){
    this.radioSel = ITEMS_DRINK.find(Item => Item.value === this.radioSelected);
    this.radioSelectedString = JSON.stringify(this.radioSel);
  }
  getSelecteditemSmoker(){
    this.radioSelSmoker = ITEMS_SMOKE.find(Item => Item.value === this.radioSelectedSmoker);
    this.radioSelectedStringSmoker = JSON.stringify(this.radioSelSmoker);
  }

  onItemChange(item: any){
   
    this.getSelecteditem();
  }
  onItemChangeSmoker(item: any){
  
    this.getSelecteditemSmoker();
  }

  ngOnInit(): void {

    console.log(this.userService);

    
  }

  next(){
    
      this.userService.setAbout(this.about);
     this.userService.setInterest(this.interest);
     this.userService.setDrinker(this.radioSelected);
     this.userService.setSMoker(this.radioSelectedSmoker);
    this.router.navigateByUrl("signup/children");

  }
  previous(){
    this.router.navigateByUrl("signup");
  }

}
