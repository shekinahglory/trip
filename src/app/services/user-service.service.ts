import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  
  private gender?:string;
    private lookingGender?:string;
     private state?:string;
      private city?:string;
      private email?:string;
      private username?:string;
      private password?:string;
      private birthDate?:number;
      private drinker?:string;
      private smoker?:string;
      private about?:string;
      private interest?:string;
      private haveKids?:string;
      private wantKids?:string;
      private job?:string;
      private income?:string;
      private education?:string;

      public setEducation(edu:string){
        this.education = edu;
      }

      public getEducation():string{
        return this.education +'';
      }

      public setJob(job:string){
        this.job = job;
      }

      public getJob():string{
        return this.job +'';

      }

      public setIncome(income:string){
        this.income = income;
      }

      public getIncome():string{
        return this.income +'';
      }

      public setHaveKids(kid:string){
        this.haveKids = kid;
      }

      public getHaveKids():string{
        return this.haveKids + '';
      }

      public setWantKids(kids:string){
        this.wantKids = kids;
      }
      public getWantKids():string{
        return this.wantKids + '';
      }


      public setInterest(interest:string){
        this.interest = interest;

      }

      public getInterest():string{
        return this.interest + '';
      }

      public setAbout(about:string){
        this.about = about;

      }

      public getAbout():string{
        return this.about + '';
      }

      public setDrinker(drinker:string){
        this.drinker = drinker;
      }

      public getDrinker():string{
        return this.drinker +'';
      }

      public setSMoker(smoker:string){
        this.smoker = smoker;
      }

      public getSmoker():string{
        return this.smoker + '';
      }

     

      public setDay(day:number){
        this.birthDate = day;
      }
      public getDay(){
        return this.birthDate;
      }

    

      public setEmail(email:string){
        this.email = email;
      }
      public getEmail():string{
        return this.email+ '';
      }
      public setUsername(username:string){
        this.username = username;
      }
      public getUsername():string{
        return this.username + '';
      }

      public setPassword(password:string){
        this.password = password
      }
      public getPassword():string{
        return this.password + '';
      }
  
  
  constructor() {
    // this.user = user;
   }

   public setGender(gender:string){
    this.gender = gender;
 }
 public setLookingFor(lf:string){
   this.lookingGender= lf;
 }

 public setState(state:string){
   this.state = state;
 }

 public setCity(city:string){
   this.city = city;
 }

 public getGender():string{
   return this.gender + '';
 }
 public getLookingFor():string{
   return this.lookingGender + '';
 }
 public getState():string{
   return this.state + '';
 }

 public getCity():string{
   return this.city + '';
 }


  
  

}
