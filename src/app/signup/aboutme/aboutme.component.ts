import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { ConnecAndSave } from 'src/app/services/user.service.connandsave';
import { ImageService } from 'src/app/services/user.service.image';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {


  gender = '';
  lookingGender = '';
  state = '';
  city = '';
  month = 0 ;
  day = 0;
  year = 0;
  email='';
  password='';
  username='';
  regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  genderOptions = [
      {name: 'male', value:1},
      {name: 'female', value:2}
  ];
  genderLookOptions = [
    {name: 'male', value:1},
    {name: 'female', value:2}
];

stateList:any = [
  {name:'Maryland', value:1},
  {name :'Pensylvania', value:2},
  {name:'New York', value:1},
  {name :'Chicago', value:2}
];

cityList:any = [];

  
 selectedFile:any;
 selectedFile1:any;
 selectedFile2:any;
 selectedFile3:any;
 selectedFile4:any;
 selectedFile5:any;
 emailError = false;
 usernameError = false;
 enabled = true;
 emailEmpty = false;
 emailValid = false;
 genderEmpty = false;
 lkgenderEmpty = false;
 stateEmpty = false;
 cityEmpty = false;
 dateEmpty =false;
 usernameEmpty = false;
 passwordEmpty = false;
 imageEmpty = false;
 stateId = '';


  yourimages:any = [ ];

  stateSelected(state:any){
    let stateId = this.stateList[state].id;
    let stateName = this.stateList[state].name
    console.log(stateName)

    this.userService.setState(stateName)
    console.log(this.stateList[state].name)
    this.backendService.getCities(stateId).subscribe(
      data => {
         this.cityList = data;
      }
    )
}

  constructor(private router: Router, private userService: UserServiceService, 
    private imageService: ImageService
      , private backendService: ConnecAndSave) { }

  ngOnInit(): void {

    this.backendService.getCountries().subscribe(
      data => {
        this.stateList = data;
        this.backendService.getCities(this.stateList[0].id).subscribe(
          data => {
             this.cityList = data;
          }
        )
      }
    ); 
    
  }

  emFocusOut(event:any){
    if(!this.regularExpression.test(String(event.target.value).toLocaleLowerCase())){
           this.emailValid = true;
    }
  }


  emailChanged(event:any){
  
   this.emailEmpty  =false;
   if(this.regularExpression.test(String(event.target.value).toLowerCase())){
     this.emailValid = false;
         this.backendService.checkEmail(event.target.value).subscribe(
              data => { 
                 console.log(data);
                if (data === 'exist'){
                  this.emailError = true;
                  console.log(data)
                }else {
                  this.emailError = false;
                  this.userService.setEmail(event.target.value)
                }
              }
         )
   }
      
  }

  onUsernameChaged(event:any){
    this.usernameEmpty = false;
    this.backendService.checkUsername(event.target.value).subscribe(
            data => {
              if(data === 'exist'){
                 this.usernameError = true;
              } else {
                this.usernameError = false;
                this.userService.setUsername(event.target.value);
                this.imageService.setUsername(this.username);
              }
            }
    )
  }

  onPasswordTyped(event:any){     

  }

  birthdayInput(event:any){
    this.userService.setDay(this.day);

  }

  onFileChanged(event:any){
    const reader = new FileReader();
    this.imageEmpty = false
    this.selectedFile = event.target.files[0];
    // this.countImageFile++;
    this.imageService.setImageFirst(this.selectedFile);
    reader.readAsDataURL(this.selectedFile);
    reader.onload = () => {
      this.yourimages[0] =  reader.result as string;
     }
  }

  onFileChanged2(event:any){
    const reader = new FileReader();
    this.selectedFile2 = event.target.files[0];
    this.imageService.setImageThird(this.selectedFile2);
    reader.readAsDataURL(this.selectedFile2);
    reader.onload = () => {
      this.yourimages[2] =  reader.result as string;
     }
  }

  onFileChanged1(event:any){
    const reader = new FileReader();
    this.selectedFile1 = event.target.files[0];
    this.imageService.setImageSecond(this.selectedFile1);
    reader.readAsDataURL(this.selectedFile1);
    reader.onload = () => {
      this.yourimages[1] =  reader.result as string;
     }
  }
  onFileChanged3(event:any){
    const reader = new FileReader();
    this.selectedFile3 = event.target.files[0];
    this.imageService.setImageFourth(this.selectedFile3);
    reader.readAsDataURL(this.selectedFile3);
    reader.onload = () => {
      this.yourimages[3] =  reader.result as string;
     }
  }

  onFileChanged4(event:any){
    const reader = new FileReader();
    this.selectedFile4 = event.target.files[0];
    this.imageService.setImageFith(this.selectedFile4);
    reader.readAsDataURL(this.selectedFile4);
    reader.onload = () => {
      this.yourimages[4] =  reader.result as string;
     }
  }
  onFileChanged5(event:any){
    const reader = new FileReader();
    this.selectedFile5 = event.target.files[0];
    this.imageService.setImageSix(this.selectedFile5);
    reader.readAsDataURL(this.selectedFile5);
    reader.onload = () => {
      this.yourimages[5] =  reader.result as string;
     }
  }

  removeImage(index:number){
      this.yourimages[index] = '';
    
  }

  continue(){
   
    

    if(!this.gender){
       this.genderEmpty = true;
    }
    if(!this.lookingGender){
      this.lkgenderEmpty = true;
    }

    if(!this.email){
       this.emailEmpty = true;
    }
    if(!this.state){
      this.stateEmpty = true;
    }
    if(!this.city){
      this.cityEmpty = true;
    }
    if(!this.day){
      this.dateEmpty= true;
    }
    if(!this.username){
      this.usernameEmpty = true;
    }
    if(!this.password){
      this.passwordEmpty = true;
    }
    if(!this.selectedFile){
       this.imageEmpty = true;
    }


    console.log(this.userService.getState());
    console.log(this.city);

    if(this.email && this.lookingGender && this.username && this.password
        && this.city && this.state && this.day && this.gender && this.selectedFile ){
          this.router.navigateByUrl('signup/credentials')
        } else {

        }
    
   
    
  }

  stateChanged(){
     this.stateEmpty = false;
     this.userService.setState(this.state);
  }

  genderChanged(event:any){
     this.genderEmpty = false;
     this.userService.setGender(event.target.value);
  }
  lkgenderChanged(event:any){
    this.lkgenderEmpty = false;
    this.userService.setLookingFor(event.target.value);
  }
  cityChanged(event:any){
    this.cityEmpty = false;
    this.userService.setCity(event.target.value);
  }
  dateChanged(){
    this.dateEmpty = false;
    this.userService.setDay(this.day);
  }
  passwordChanged(){
     this.passwordEmpty = false;
     this.userService.setPassword(this.password)
  }

  check(){
    console.log(this.gender);
  }

  singin(){
    this.router.navigateByUrl("/login")
  }

}

