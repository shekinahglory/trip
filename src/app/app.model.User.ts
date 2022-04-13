



export class User{

    constructor(private gender:string, private lookingFor:string, private state:string, private city:string) { }



    public setGender(gender:string){
        this.gender = gender;
     }
     public setLookingFor(lf:string){
       this.lookingFor = lf;
     }
   
     public setState(state:string){
       this.state = state;
     }
   
     public setCity(city:string){
       this.city = city;
     }
   
     public getGender():string{
       return this.gender;
     }
     public getLookingFor():string{
       return this.lookingFor;
     }
     public getState():string{
       return this.state;
     }
   
     public getCity():string{
       return this.city;
     }
    
}