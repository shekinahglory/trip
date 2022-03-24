import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accountsettings',
  templateUrl: './accountsettings.component.html',
  styleUrls: ['./accountsettings.component.css']
})
export class AccountsettingsComponent implements OnInit {

  selectedFile: any;



  yourimages = [
    "../../../assets/images/girl.JPG",
    "../../../assets/images/girl.JPG"
  ]

  constructor() { }

  ngOnInit(): void {
  }
  

  onFileChanged(event:any, index:number) {

    const reader = new FileReader();
    this.selectedFile = event.target.files[0];

    reader.readAsDataURL(this.selectedFile);
   
    

    reader.onload = () => {
      this.yourimages[index] =  reader.result as string;
    }
  }

}
