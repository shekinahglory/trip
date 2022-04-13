import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITEMS_KID } from 'src/app/models/app.model.itemkid';

import { Item } from 'src/app/models/app.radio.radioItem';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {

                    
                    
  radioSel:any;
  radioSelected:string;
  radioSelectedString?:string;
  radioSelectedKid:string;
  radioSelectedStringKid?:string;
  radioSelKid:any;
  itemsList: Item[] = ITEMS_KID;
  itemsListKids: Item[] = ITEMS_KID;

  constructor(private router:Router, private userService: UserServiceService) { 
    this.radioSelected = "No";
    this.radioSelectedKid = "No";

  }

  getSelecteditem(){
    this.radioSel = ITEMS_KID.find(Item => Item.value === this.radioSelected);
    this.radioSelectedString = JSON.stringify(this.radioSel);
  }
  getSelecteditemKid(){
    this.radioSelKid = ITEMS_KID.find(Item => Item.value === this.radioSelectedKid);
    this.radioSelectedStringKid = JSON.stringify(this.radioSelKid);
  }

  onItemChange(item: any){
    this.getSelecteditem();
    this.userService.setHaveKids(this.radioSelected);
    
  }
  onItemChangeKids(item: any){
    this.getSelecteditemKid();
    this.userService.setWantKids(this.radioSelectedKid);
    
  }


  

  ngOnInit(): void {
    console.log(this.userService);
  }


  next(){

   
    this.userService.setHaveKids(this.radioSelected);
    this.userService.setWantKids(this.radioSelectedKid);
    this.router.navigateByUrl("signup/skills");

  }
  previous(){
    this.router.navigateByUrl("signup/credentials");

  }

}
