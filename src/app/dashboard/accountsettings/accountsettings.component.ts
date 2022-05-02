import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/user.service.commonservice';
import { DashboardService } from 'src/app/services/user.service.dashboardservice';
import { LocalStorageService } from 'src/app/services/user.service.localstorage';

@Component({
  selector: 'app-accountsettings',
  templateUrl: './accountsettings.component.html',
  styleUrls: ['./accountsettings.component.css']
})
export class AccountsettingsComponent implements OnInit {

  selectedFile: any;

 selectedFile1:any;
 selectedFile2:any;
 selectedFile3:any;
 selectedFile4:any;
 selectedFile5:any;
  userInfo:any;


  yourimages = ['']

  constructor(private localStorage: LocalStorageService, private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.userInfo = this.localStorage.get('userinfo');
   


    this.dashboardService.getUserImages(this.userInfo).subscribe(
          
      data => {
       
        if(data.imagesUrls[0]){
          this.yourimages[0] = data.imagesUrls[0].url;
        }
        if(data.imagesUrls[1]){
          this.yourimages[1] = data.imagesUrls[1].url;
        }
        if(data.imagesUrls[2]){
          this.yourimages[2] = data.imagesUrls[2].url;
        }
        if(data.imagesUrls[3]){
          this.yourimages[3] = data.imagesUrls[3].url;
        }
        if(data.imagesUrls[4]){
          this.yourimages[4] = data.imagesUrls[4].url;
        }
        if(data.imagesUrls[5]){
          this.yourimages[5] = data.imagesUrls[5].url;
        }
      }
    )
  }
  

  // onFileChanged(event:any, index:number) {

  //   const reader = new FileReader();
  //   this.selectedFile = event.target.files[0];

  //   reader.readAsDataURL(this.selectedFile);
  //   reader.onload = () => {
  //     this.yourimages[index] =  reader.result as string;
  //   }
  // }


  onFileChanged(event:any){
    const reader = new FileReader();
    this.selectedFile = event.target.files[0];
    // this.countImageFile++;
    // this.imageService.setImageFirst(this.selectedFile);
    reader.readAsDataURL(this.selectedFile);
    reader.onload = () => {
      this.yourimages[0] =  reader.result as string;
     }
  }

  onFileChanged2(event:any){
    const reader = new FileReader();
    this.selectedFile2 = event.target.files[0];
    // this.imageService.setImageThird(this.selectedFile2);
    reader.readAsDataURL(this.selectedFile2);
    reader.onload = () => {
      this.yourimages[2] =  reader.result as string;
     }
  }

  onFileChanged1(event:any){
    const reader = new FileReader();
    this.selectedFile1 = event.target.files[0];
    // this.imageService.setImageSecond(this.selectedFile1);
    reader.readAsDataURL(this.selectedFile1);
    reader.onload = () => {
      this.yourimages[1] =  reader.result as string;
     }
  }
  onFileChanged3(event:any){
    const reader = new FileReader();
    this.selectedFile3 = event.target.files[0];
    // this.imageService.setImageFourth(this.selectedFile3);
    reader.readAsDataURL(this.selectedFile3);
    reader.onload = () => {
      this.yourimages[3] =  reader.result as string;
     }
  }

  onFileChanged4(event:any){
    const reader = new FileReader();
    this.selectedFile4 = event.target.files[0];
    // this.imageService.setImageFith(this.selectedFile4);
    reader.readAsDataURL(this.selectedFile4);
    reader.onload = () => {
      this.yourimages[4] =  reader.result as string;
     }
  }
  onFileChanged5(event:any){
    const reader = new FileReader();
    this.selectedFile5 = event.target.files[0];
    // this.imageService.setImageSix(this.selectedFile5);
    reader.readAsDataURL(this.selectedFile5);
    reader.onload = () => {
      this.yourimages[5] =  reader.result as string;
     }
  }

  removeImage(index:number){
      this.yourimages[index] = '';
    
  }

}
