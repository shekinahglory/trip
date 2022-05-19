import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-dashboard-right',
  templateUrl: './dashboard-right.component.html',
  styleUrls: ['./dashboard-right.component.css']
})
export class DashboardRightComponent {

  images = [
    "/../../assets/images/girl.JPG",
    "/../assets/images/designone.jpg",
    "/../assets/images/designtwo.jpeg",
  
  ];


  selectedIndex = 0;

  
  
  
  @Input() indicators = true;

  @Input() controls = true;

  // element: HTMLElement = document.getElementById("userinfo");

  constructor(private renderer: Renderer2) { }

  

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

  showUserInfo(){


     let element:HTMLElement = new HTMLElement();
    //  element = document.getElementById("userinfo");
    //  this.element.style.top = '0px';
     this.renderer.setStyle(element, 'top', '-400px');

  }

  remoteUserInfo(){
    // const el:HTMLElement = document.getElementById("userinto");
    // this.renderder.setStyle(el, 'top', '-400px');
  }

}
