import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { ConnecAndSave } from 'src/app/services/user.service.connandsave';
import { ImageService } from 'src/app/services/user.service.image';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {


  userSaved = false;

  constructor(private router: Router, private userService:UserServiceService, 
    private saveService: ConnecAndSave, private imageService: ImageService) { }

  ngOnInit(): void {
    console.log(this.imageService);
  }


  next(){

    this.userService.setJob("C.E.O");
    this.userService.setIncome("4000000");
    this.userService.setEducation("Bachelors");

    // console.log(this.userService);


    this.saveService.saveUser(this.userService)
              .subscribe(
                data => {
                  this.userSaved = true;
                  this.saveImages(data);
    
                  
                },
                error => {
                  console.log(error);
                },
                ()=>{
                  console.log('completed');
                }
                
              );

             
            console.log(this.userSaved); 
  
 
             



  }

  saveImages(username:any){
     
      const imageData = new FormData();
      imageData.append('file', this.imageService.getFirst(), username);

      this.saveService.saveImage(imageData).subscribe(
            data => {
              console.log(data);
            }
      );

      if(this.imageService.getSecond() != null){
        const imageDataSec = new FormData();
        imageDataSec.append('file', this.imageService.getSecond(), username);
        this.saveService.saveImage(imageDataSec).subscribe(
              data => {
                console.log(data);
              }
        )

      }

      if(this.imageService.getThird() != null){
        const imageDataSec = new FormData();
        imageDataSec.append('file', this.imageService.getThird(), username);
        this.saveService.saveImage(imageDataSec).subscribe(
              data => {
                console.log(data);
              }
        )

      }

      if(this.imageService.getFourth() != null){
        const imageDataSec = new FormData();
        imageDataSec.append('file', this.imageService.getFourth(), username);
        this.saveService.saveImage(imageDataSec).subscribe(
              data => {
                console.log(data);
              }
        )

      }

      if(this.imageService.getFith() != null){
        const imageDataSec = new FormData();
        imageDataSec.append('file', this.imageService.getFith(), username);
        this.saveService.saveImage(imageDataSec).subscribe(
              data => {
                console.log(data);
              }
        )

      }

      if(this.imageService.getSix() != null){
        const imageDataSec = new FormData();
        imageDataSec.append('file', this.imageService.getSix(), username);
        this.saveService.saveImage(imageDataSec).subscribe(
              data => {
                console.log(data);
              }
        )

      }

      
    
  }



  previous(){
    this.router.navigateByUrl("signup/children");
    

  }

}
