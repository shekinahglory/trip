import { Component, OnInit } from '@angular/core';
import { ITEMS_DRINK } from 'src/app/models/app.model.itemdrink';
import { ITEMS_KID } from 'src/app/models/app.model.itemkid';
import { ITEMS_SMOKE } from 'src/app/models/app.model.itemsmoke';
import { Item } from 'src/app/models/app.radio.radioItem';
import { CommonService } from 'src/app/services/user.service.commonservice';
import { DashboardService } from 'src/app/services/user.service.dashboardservice';
import { LocalStorageService } from 'src/app/services/user.service.localstorage';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {



userInfo:any;
  
radioSel:any;
radioSelected:string = '';
radioSelectedString?:string;
radioSelectedKid:string = '';
radioSelectedStringKid?:string;
radioSelKid:any;
itemsList: Item[] = ITEMS_KID;
itemsListKids: Item[] = ITEMS_KID;
radioSels: any;
radioSelecteds: string = '';
radioSelectedStrings?: string;
itemsLists: Item[] = ITEMS_DRINK;

radioSelSmoker: any;
radioSelectedSmoker: string = '';
radioSelectedStringSmoker?: string;
itemsListSmoker: Item[] = ITEMS_SMOKE;

  

  state = "state"
  city = 'city'
  about = ''
  interest = ''

  constructor(private commonService: CommonService,private dashboardService: DashboardService,
     private localStorage: LocalStorageService) {
     
   
   }

  ngOnInit(): void {

    this.userInfo = this.localStorage.get('userinfo');
    this.dashboardService.getUserImages(this.userInfo).subscribe(
         data => {
          this.city = data.city;
          this.about = data.about;
          this.interest = data.interest;
          this.radioSelected = data.haveKids;
          this.radioSelectedKid = data.wantKids;
          this.radioSelecteds = "Never";
          this.radioSelectedSmoker = data.smoker;
         }
    )
   
   
   
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
    // this.userService.setHaveKids(this.radioSelected);
    
  }
  onItemChangeKids(item: any){
    this.getSelecteditemKid();
    // this.userService.setWantKids(this.radioSelectedKid);
    
  }
  getSelecteditems() {
    this.radioSels = ITEMS_DRINK.find(Item => Item.value === this.radioSelecteds);
    this.radioSelectedStrings = JSON.stringify(this.radioSels);
  }
  getSelecteditemSmoker() {
    this.radioSelSmoker = ITEMS_SMOKE.find(Item => Item.value === this.radioSelectedSmoker);
    this.radioSelectedStringSmoker = JSON.stringify(this.radioSelSmoker);
  }

  onItemChanges(item: any) {

    this.getSelecteditems();
  }
  onItemChangeSmoker(item: any) {

    this.getSelecteditemSmoker();
  }

}
