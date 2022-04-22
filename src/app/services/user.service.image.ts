import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
}     
)
export class ImageService{

    private firstImage:any;
    private secondImage:any;
    private thirdsImage:any;
    private fourthImage:any;
    private fithImage:any;
    private sixthImage:any;
    private username:any;

    public setUsername(username:any){
        this.username = username;
    }

    public getUsername(){
        return this.username;
    }



    public setImageFirst(one:any){
        this.firstImage = one;
    }

    public getFirst(){
        return this.firstImage;
    }
    public setImageSecond(second:any){
        this.secondImage = second;
    }
    public getSecond(){
        return this.secondImage;
    }
    public setImageThird(third:any){
        this.thirdsImage = third;
    }
    public getThird(){
        return this.thirdsImage;
    }

    public setImageFourth(four:any){
        this.fourthImage = four;
    }
    public getFourth(){
        return this.fourthImage;
    }
    public setImageFith(five:any){
        this.fithImage = five;
    }
    public getFith(){
        return this.fithImage;
    }

    public setImageSix(six:any){
        this.sixthImage = six;
    }
    public getSix(){
        return this.sixthImage;
    }
}