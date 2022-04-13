import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

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
  


  yourimages = [
    "../../../assets/images/girl.JPG",
    "../../../assets/images/girl.JPG"
  ]

  constructor(private router: Router, private userService: UserServiceService) { }

  ngOnInit(): void {
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
     
    
    this.router.navigateByUrl('signup/credentials');
  }

  check(){
    console.log(this.gender);
  }

}
