import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { element } from 'protractor';

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

  

  constructor(private renderer: Renderer2) { }
  
  ngOnInit(){
   

    const heightNoHeader = window.innerHeight - (window.innerHeight * 0.3);
    const height = heightNoHeader + 'px';
    const el:HTMLElement | null = document.getElementById("carousel-wrapper-id");
    const el2:HTMLElement | null = document.getElementById("container");
    const el3:HTMLElement | null = document.getElementById("image-flui-id");

    this.renderer.setStyle(el, 'height', heightNoHeader+ 'px')
    this.renderer.setStyle(el2, 'height', heightNoHeader+ 'px')

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

  showUserInfo(){

   
    const el: HTMLElement | null = document.getElementById("userinfo");
     if(window.innerWidth >= 1150){

             this.renderer.setStyle(el, 'top', '0px');

         } else {
           this.renderer.setStyle(el, 'top', '100px')
         }
    
    

  }

  remoteUserInfo(){
    const el:HTMLElement | null = document.getElementById("userinfo");
    this.renderer.setStyle(el, 'top', '-400px');
  }

}
