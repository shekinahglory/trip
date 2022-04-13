import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { ConnecAndSave } from 'src/app/services/user.service.connandsave';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private router: Router, private userService:UserServiceService, 
    private saveService: ConnecAndSave) { }

  ngOnInit(): void {
    console.log(this.userService);
  }


  next(){

    this.userService.setJob("C.E.O");
    this.userService.setIncome("4000000");
    this.userService.setEducation("Bachelors");

    // console.log(this.userService);


    this.saveService.saveUser(this.userService)
              .subscribe(
                data => {
                  console.log(data);
                }
              )

  }

  previous(){
    this.router.navigateByUrl("signup/children")

  }

}
