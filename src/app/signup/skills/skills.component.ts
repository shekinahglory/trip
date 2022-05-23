import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alert } from 'selenium-webdriver';
import { UserServiceService } from 'src/app/services/user-service.service';
import { ConnecAndSave } from 'src/app/services/user.service.connandsave';
import { ImageService } from 'src/app/services/user.service.image';
import { LocalStorageService } from 'src/app/services/user.service.localstorage';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {


  userSaved = false;

  constructor(private router: Router, private userService:UserServiceService, 
    private saveService: ConnecAndSave, private imageService: ImageService, 
    private localStorage: LocalStorageService) { }

  ngOnInit(): void {
    console.log(this.imageService);
  }


  next(){

    this.userService.setJob("C.E.O");
    this.userService.setIncome("4000000$");
    this.userService.setEducation("Bachelors");

    this.saveService.saveUser(this.userService)
              .subscribe(
                data => {
                  this.userSaved = true;
                  const imageData = new FormData();
                  imageData.append('file', this.imageService.getFirst(), data);
                  this.saveService.saveImage(imageData).subscribe(
                    firstToken => {
                      if(this.imageService.getSecond() == null){
<<<<<<< HEAD
                        this.localStorage.set("token",firstToken);  
=======
                        this.localStorage.set("token",firstToken);
                        this.afterSignUp(firstToken);
>>>>>>> 0652cbf44573287b44fbed0fa35d54a72f7051ac
                      }
                      
                    }, 
                    error => {
                        console.log(error);
                    },
                    () => {
                      if(this.imageService.getSecond() != null){
                        const imageDataSec = new FormData();
                        imageDataSec.append('file', this.imageService.getSecond(), data);
                        this.saveService.saveImage(imageDataSec).subscribe(
                          data => {
                            if(this.imageService.getThird() == null){
                              this.localStorage.set("token",data);
                              this.afterSignUp(data);
                            }
                          
                          },
                          error => {
                            console.log(error);
                          },
                          () => {
                            if(this.imageService.getThird() != null){
                              const imageDataSec = new FormData();
                              imageDataSec.append('file', this.imageService.getThird(), data);
                              this.saveService.saveImage(imageDataSec).subscribe(
                                data => {
                                  if(this.imageService.getFourth() == null){
                                    this.localStorage.set("token",data);
                                  }      
                                },
                                error => {
                                  console.log(error);
                                },
                                () => {
                                   
                                      if(this.imageService.getFourth() != null){
                                        const imageDataSec = new FormData();
                                        imageDataSec.append('file', this.imageService.getFourth(), data);
                                        this.saveService.saveImage(imageDataSec).subscribe(
                                          data => {
                                            if(this.imageService.getFirst() == null){
                                              this.localStorage.set("token",data);
                                              this.afterSignUp(data);
                                            }        
                                          
                                          },
                                          error => {
                                            console.log(error);
                                           },
                                          () => {
                                            if(this.imageService.getFith() != null){
                                              const imageDataSec = new FormData();
                                              imageDataSec.append('file', this.imageService.getFith(), data);
                                              this.saveService.saveImage(imageDataSec).subscribe(
                                                data => {
                                                  if(this.imageService.getSix == null){
                                                    this.localStorage.set("token",data);
                                                    this.afterSignUp(data)
                                                  }           
                                                },
                                                error => {
                                                   console.log(error);
                                                },
                                                () => {
                                                  if(this.imageService.getSix() != null){
                                                    const imageDataSec = new FormData();
                                                    imageDataSec.append('file', this.imageService.getSix(), data);
                                                    this.saveService.saveImage(imageDataSec).subscribe(
                                                      data => {
                                                        this.localStorage.set("token",data);
                                                        this.afterSignUp(data);
                                                      
                                                      }
                                                    )
                                            
                                                  }

                                                }
                                              )
                                      
                                            }

                                          }
                                        )
                                
                                      }

                                }
                              )
                      
                            }
                          }
                        )
                
                      }
                    }
                  );
                                 
                },
               
                error => {
                  console.log(error);
                },
      
               
              );
           


  }

  afterSignUp(token:any){
    
    console.log(token)
    if(token){
      this.router.navigateByUrl("/accountcreated");
    } else {
       alert('There was an error! Please check every thing and resubmit')
    }
   
  }

  saveImages(username:any){
     
      const imageData = new FormData();
      imageData.append('file', this.imageService.getFirst(), username);

      this.saveService.saveImage(imageData).subscribe(
            data => {
              this.localStorage.set("token",data);
              console.log(data);
            }
      );

      if(this.imageService.getSecond() != null){
        const imageDataSec = new FormData();
        imageDataSec.append('file', this.imageService.getSecond(), username);
        this.saveService.saveImage(imageDataSec).subscribe(
          data => {
            this.localStorage.set("token",data);
          }
        )

      }

      if(this.imageService.getThird() != null){
        const imageDataSec = new FormData();
        imageDataSec.append('file', this.imageService.getThird(), username);
        this.saveService.saveImage(imageDataSec).subscribe(
          data => {
            this.localStorage.set("token",data);
          
          }
        )

      }

      if(this.imageService.getFourth() != null){
        const imageDataSec = new FormData();
        imageDataSec.append('file', this.imageService.getFourth(), username);
        this.saveService.saveImage(imageDataSec).subscribe(
          data => {
            this.localStorage.set("token",data);
          
          }
        )

      }

      if(this.imageService.getFith() != null){
        const imageDataSec = new FormData();
        imageDataSec.append('file', this.imageService.getFith(), username);
        this.saveService.saveImage(imageDataSec).subscribe(
          data => {
            this.localStorage.set("token",data);
          
          }
        )

      }

      if(this.imageService.getSix() != null){
        const imageDataSec = new FormData();
        imageDataSec.append('file', this.imageService.getSix(), username);
        this.saveService.saveImage(imageDataSec).subscribe(
          data => {
            this.localStorage.set("token",data);
          
          }
        )

      }

      
    
  }



  previous(){
    this.router.navigateByUrl("signup/children");
    

  }

}
