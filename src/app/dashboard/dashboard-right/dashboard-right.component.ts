import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-right',
  templateUrl: './dashboard-right.component.html',
  styleUrls: ['./dashboard-right.component.css']
})
export class DashboardRightComponent implements OnInit {

  images = [
    "/../../assets/images/girl.JPG",
    "/../assets/images/designone.jpg",
    "/../assets/images/designtwo.jpeg",
  
  ];


  selectedIndex = 0;

  @Input() indicators = true;

  @Input() controls = true;

  

  constructor() { }

  ngOnInit(): void {
  }

  selectedImage(index: number){
    this.selectedIndex = index;
 }

 onPrevClick(): void {
   if(this.selectedIndex === 0){
     this.selectedIndex = this.images.length - 1;
   } else {
     this.selectedIndex--;
   }
 }

 onNextClick():void{
   if(this.selectedIndex === this.images.length -1){
     this.selectedIndex = 0;
   } else {
     this.selectedIndex++;
   }
 }


  liked(){
    alert('clicked liked');
    console.log("hey");
  }

  fav(){
   
  }

  pass(){

  }

}
