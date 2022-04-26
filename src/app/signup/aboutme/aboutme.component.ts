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

  genderOptions = [
      {name: 'male', value:1},
      {name: 'female', value:2}
  ];
  genderLookOptions = [
    {name: 'male', value:1},
    {name: 'female', value:2}
];

stateList = [
  {name:'MD', value:1},
  {name :'PA', value:2}
]
  
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


  yourimages:any = [ ];

  constructor(private router: Router, private userService: UserServiceService, private imageService: ImageService
      , private backendService: ConnecAndSave) { }

  ngOnInit(): void {
    this.yourimages[0] = ""
  }


  emailChanged(event:any){
        const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   console.log( regularExpression.test(String(event.target.value).toLowerCase()));
   if(regularExpression.test(String(event.target.value).toLowerCase())){
         this.backendService.checkEmail(event.target.value).subscribe(
              data => { 
                 console.log(data);
                if (data === 'exist'){
                  this.emailError = true;
                  console.log(data)
                }else {
                  this.emailError = false;
                }
              }
         )
   }
      
  }

  onUsernameChaged(event:any){
    this.backendService.checkUsername(event.target.value).subscribe(
            data => {
              if(data === 'exist'){
                 this.usernameError = true;
              } else {
                this.usernameError = false;
              }
            }
    )
  }

  onPasswordTyped(event:any){
         

  }

  onFileChanged(event:any){
    const reader = new FileReader();
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




    this.userService.setGender(this.gender);
    this.userService.setCity(this.city);
    this.userService.setLookingFor(this.lookingGender);
    this.userService.setState(this.state);
    this.userService.setDay(this.day);
    this.userService.setEmail(this.email);
    this.userService.setPassword(this.password);
    this.userService.setUsername(this.username);
    this.userService.setYear(this.year);
    this.userService.setMonth(this.month);
    this.imageService.setUsername(this.username);
    
    this.router.navigateByUrl('signup/credentials');

    this.backendService.checkUsername(this.username).subscribe(
       data => {
          if(data === 'exist'){
             this.usernameError = true;

          } else {
          
          }
       }
    )

    
  }

  check(){
    console.log(this.gender);
  }

}

